<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import gsap from 'gsap';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
const nombre = "Brayan Stiven Gamboa Delgado";
const displayedText = ref('');
const isTyping = ref(true);
let typewriterTimeout;
let gsapCtx;
let removeMouseListeners;

const startTypewriter = () => {
  clearTimeout(typewriterTimeout);
  displayedText.value = '';
  isTyping.value = true;
  const text = t('home.role');
  let index = 0;
  const type = () => {
    if (index < text.length) {
      displayedText.value += text.charAt(index);
      index++;
      typewriterTimeout = setTimeout(type, 100);
    } else {
      isTyping.value = false;
    }
  };
  type();
};

watch(() => t('home.role'), () => startTypewriter());

onMounted(() => {
  setTimeout(startTypewriter, 500);

  gsapCtx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Trazo curvo tipo brocha alrededor de la foto
    const brushPaths = document.querySelectorAll('.home__brush-stroke path');
    brushPaths.forEach((path) => {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    });

    tl.from('.home__image', {
      scale: 0.88,
      opacity: 0,
      duration: 0.85,
    })
    .to('.home__brush-stroke path', {
      strokeDashoffset: 0,
      duration: 1.1,
      stagger: 0.15,
      ease: 'power2.inOut',
    }, '-=0.55')
    .from('.home__greeting, .home__name, .home__role-wrapper, .home__description, .home__cta, .home__social', {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
    }, '-=0.8');

    // Interacción con el mouse en toda la ventana: Parallax del mapa de Berk + Brújula
    const mapEl = document.querySelector('.home__berk-map');
    const compassNeedle = document.querySelector('.home__compass-needle');

    const mapX = mapEl ? gsap.quickTo(mapEl, 'x', { duration: 0.7, ease: 'power2.out' }) : null;
    const mapY = mapEl ? gsap.quickTo(mapEl, 'y', { duration: 0.7, ease: 'power2.out' }) : null;

    const onMouseMove = (e) => {
      if (mapX && mapY) {
        const normX = (e.clientX / window.innerWidth - 0.5) * 2;
        const normY = (e.clientY / window.innerHeight - 0.5) * 2;
        mapX(-normX * 22);
        mapY(-normY * 16);
      }

      if (compassNeedle) {
        const compassRect = compassNeedle.getBoundingClientRect();
        const cx = compassRect.left + compassRect.width / 2;
        const cy = compassRect.top + compassRect.height / 2;
        const angleCompass = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) + 90;
        compassNeedle.style.transform = `rotate(${angleCompass}deg)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    removeMouseListeners = () => window.removeEventListener('mousemove', onMouseMove);
  });
});

onUnmounted(() => {
  clearTimeout(typewriterTimeout);
  if (removeMouseListeners) removeMouseListeners();
  if (gsapCtx) gsapCtx.revert();
});
</script>

<template>
  <div class="home" id="aboutme">
    <!-- Mapa de Berk (archipiélago, curvas topográficas y rutas marítimas) -->
    <svg class="home__berk-map" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
      <!-- Isla principal de Berk (izquierda, costa irregular nórdica) -->
      <path
        d="M 85 255 L 118 212 L 152 198 L 195 162 L 245 174 L 295 152 L 342 186 L 368 228 L 410 258 L 392 312 L 352 345 L 330 392 L 272 418 L 222 402 L 178 424 L 136 382 L 105 335 L 78 298 Z"
        stroke="var(--border-secondary)"
        stroke-width="1.6"
        stroke-linejoin="round"
        fill="var(--bg-tertiary)"
        fill-opacity="0.55"
      />
      <path
        d="M 148 258 L 182 222 L 238 210 L 292 228 L 325 275 L 304 334 L 252 365 L 192 355 L 154 312 Z"
        stroke="var(--border-primary)"
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <path
        d="M 196 276 L 232 256 L 274 270 L 284 312 L 246 336 L 204 322 Z"
        stroke="var(--color-primary-300)"
        stroke-width="1.2"
        stroke-linejoin="round"
      />

      <!-- Isla del Nido (arriba derecha, fiordos) -->
      <path
        d="M 1010 135 L 1055 98 L 1118 108 L 1168 86 L 1228 122 L 1265 178 L 1252 242 L 1212 288 L 1152 312 L 1094 295 L 1042 262 L 998 205 Z"
        stroke="var(--border-secondary)"
        stroke-width="1.6"
        stroke-linejoin="round"
        fill="var(--bg-tertiary)"
        fill-opacity="0.55"
      />
      <path
        d="M 1068 168 L 1118 144 L 1178 158 L 1205 204 L 1182 252 L 1126 266 L 1074 238 Z"
        stroke="var(--border-primary)"
        stroke-width="1.2"
        stroke-linejoin="round"
      />

      <!-- Islotes menores -->
      <path
        d="M 528 618 L 566 588 L 624 598 L 652 638 L 628 688 L 574 696 L 534 662 Z"
        stroke="var(--border-secondary)"
        stroke-width="1.5"
        stroke-linejoin="round"
        fill="var(--bg-tertiary)"
        fill-opacity="0.45"
      />
      <path
        d="M 912 568 L 958 538 L 1014 554 L 1028 602 L 986 644 L 934 636 L 902 598 Z"
        stroke="var(--border-secondary)"
        stroke-width="1.5"
        stroke-linejoin="round"
        fill="var(--bg-tertiary)"
        fill-opacity="0.45"
      />

      <!-- Rutas marítimas punteadas entre islas -->
      <path
        d="M 385 320 C 520 350, 620 480, 590 595"
        stroke="var(--color-primary-300)"
        stroke-width="1.6"
        stroke-dasharray="6 8"
        stroke-linecap="round"
      />
      <path
        d="M 655 630 C 760 590, 840 520, 925 575"
        stroke="var(--color-primary-300)"
        stroke-width="1.6"
        stroke-dasharray="6 8"
        stroke-linecap="round"
      />
      <path
        d="M 980 550 C 1040 440, 1050 360, 1110 305"
        stroke="var(--color-primary-300)"
        stroke-width="1.6"
        stroke-dasharray="6 8"
        stroke-linecap="round"
      />

      <!-- Marca X de destino en la isla principal -->
      <path d="M 242 295 L 256 309 M 256 295 L 242 309" stroke="var(--color-primary-500)" stroke-width="2" stroke-linecap="round" />
    </svg>

    <!-- Brújula nórdica minimalista -->
    <div class="home__compass" aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" stroke="var(--border-secondary)" stroke-width="1.2" stroke-dasharray="4 4" />
        <circle cx="50" cy="50" r="32" stroke="var(--border-primary)" stroke-width="1" />
        <path d="M50 4 L50 14 M50 86 L50 96 M4 50 L14 50 M86 50 L96 50" stroke="var(--color-primary-500)" stroke-width="1.5" stroke-linecap="round" />
      </svg>
      <svg class="home__compass-needle" viewBox="0 0 100 100" fill="none">
        <path d="M50 18 L55 50 L50 56 L45 50 Z" fill="var(--color-primary-600)" />
        <path d="M50 82 L54 50 L50 46 L46 50 Z" stroke="var(--border-secondary)" stroke-width="1.2" fill="var(--bg-secondary)" />
      </svg>
    </div>

    <div class="home__container">
      <div class="home__content">
        <!-- Imagen con delineado curvo tipo brocha -->
        <div class="home__image-wrapper">
          <svg class="home__brush-stroke" viewBox="0 0 240 240" fill="none" aria-hidden="true">
            <path
              d="M 120 10 C 185 8, 232 58, 228 122 C 224 186, 174 232, 112 228 C 50 224, 10 176, 14 114 C 18 54, 64 14, 124 12"
              stroke="var(--color-primary-600)"
              stroke-width="3.5"
              stroke-linecap="round"
            />
            <path
              d="M 32 58 C 12 96, 10 152, 42 192"
              stroke="var(--color-accent-500)"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <img src="../assets/me.jpg" alt="Brayan Gamboa" class="home__image">
        </div>

        <!-- Texto -->
        <div class="home__text">
          <p class="home__greeting">{{ t('home.greeting') }}</p>
          <h1 class="home__name">{{ nombre }}</h1>
          <div class="home__role-wrapper">
            <h2 class="home__role">
              {{ displayedText }}<span class="home__cursor" :class="{ blink: !isTyping }">|</span>
            </h2>
          </div>
          <p class="home__description">{{ t('home.description') }}</p>

          <div class="home__cta">
            <a href="#contacto" class="btn btn-primary">
              <i class="fas fa-envelope"></i>
              <span>{{ t('home.contactBtn') }}</span>
            </a>
            <a href="#Proyectos" class="btn btn-secondary">
              <i class="fas fa-code"></i>
              <span>{{ t('home.projectsBtn') }}</span>
            </a>
          </div>

          <div class="home__social">
            <a href="https://github.com/GamboaBrayan" target="_blank" rel="noopener noreferrer" class="home__social-link" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/brayan-gamboa-delgado/" target="_blank" rel="noopener noreferrer" class="home__social-link" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/brayan.sgd/" target="_blank" rel="noopener noreferrer" class="home__social-link" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ========= BASE MOBILE ========= */
.home {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--bg-primary);
}

.home__berk-map {
  position: absolute;
  inset: -24px;
  width: calc(100% + 48px);
  height: calc(100% + 48px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.85;
}

.home__compass {
  position: absolute;
  bottom: 36px;
  right: 36px;
  width: 84px;
  height: 84px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.85;
  display: none;
}

.home__compass svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.home__compass-needle {
  transform-origin: 50% 50%;
  transition: transform 0.12s ease-out;
}

@media (min-width: 768px) {
  .home__compass {
    display: block;
  }
}

.home__container {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: var(--space-4);
  position: relative;
  z-index: 1;
}

/* Mobile: vertical stack, image on top */
.home__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-8);
  animation: fadeInUp 0.8s ease-out;
}

.home__image-wrapper {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
}

.home__brush-stroke {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.home__image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--bg-secondary);
  box-shadow: var(--shadow-xl);
  transition: transform var(--transition-base);
}

.home__image:hover {
  transform: scale(1.03);
}

.home__text {
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.home__greeting {
  font-size: var(--text-base);
  color: var(--color-primary-600);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-2);
}

.home__name {
  font-size: clamp(1.8rem, 6vw, 3.5rem);
  font-weight: var(--font-extrabold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
  line-height: 1.1;
}

.home__role-wrapper {
  min-height: 44px;
  margin-bottom: var(--space-3);
}

.home__role {
  font-size: clamp(1.1rem, 4vw, 2rem);
  font-weight: var(--font-semibold);
  color: var(--text-secondary);
  display: inline-block;
}

.home__cursor {
  color: var(--color-primary-400);
  font-weight: var(--font-bold);
}
.home__cursor.blink { animation: blink 1s step-end infinite; }

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.home__description {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
  max-width: 520px;
}

.home__cta {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 320px;
  margin-bottom: var(--space-6);
}

.home__cta .btn { width: 100%; justify-content: center; }

.home__social {
  display: flex;
  gap: var(--space-3);
  justify-content: center;
}

.home__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: var(--radius-md);
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  color: var(--text-secondary);
  font-size: var(--text-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.home__social-link:hover {
  transform: translateY(-3px);
  background: var(--color-primary-50);
  border-color: var(--color-primary-600);
  color: var(--color-primary-600);
}

/* ========= TABLET: 640px ========= */
@media (min-width: 640px) {
  .home__image { width: 260px; height: 260px; }

  .home__cta {
    flex-direction: row;
    width: auto;
    max-width: none;
  }
  .home__cta .btn { width: auto; }

  .home__description { font-size: var(--text-lg); }
  .home__greeting    { font-size: var(--text-lg); }
}

/* ========= DESKTOP: 1024px ========= */
@media (min-width: 1024px) {
  .home__container { max-width: 1280px; margin: 0 auto; padding: var(--space-6); }

  /* Switch to side-by-side layout */
  .home__content {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    text-align: left;
    gap: var(--space-12);
  }

  .home__image-wrapper { order: 0; }

  .home__image { width: 360px; height: 360px; }

  .home__text { align-items: flex-start; }

  .home__cta { justify-content: flex-start; }

  .home__social { justify-content: flex-start; }
}
</style>