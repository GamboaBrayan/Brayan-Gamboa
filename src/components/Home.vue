<script setup>
import { ref, onMounted, watch } from 'vue';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
const nombre = "Brayan Stiven Gamboa Delgado";
const displayedText = ref('');
const isTyping = ref(true);
let typewriterTimeout;

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
onMounted(() => setTimeout(startTypewriter, 500));
</script>

<template>
  <div class="home" id="aboutme">
    <video src="../assets/background.mp4" autoplay muted loop class="home__video"></video>
    <div class="home__overlay"></div>

    <div class="home__container">
      <div class="home__content">
        <!-- Imagen -->
        <div class="home__image-wrapper">
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
}

.home__video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -2;
  object-fit: cover;
}

.home__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(17, 24, 39, 0.92) 0%,
    rgba(31, 41, 55, 0.82) 50%,
    rgba(17, 24, 39, 0.94) 100%
  );
  z-index: -1;
}

.home__container {
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
  display: flex;
  justify-content: center;
}

.home__image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(124, 58, 237, 0.35);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  transition: transform var(--transition-base);
}

.home__image:hover {
  transform: scale(1.03);
}

.home__text {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.home__greeting {
  font-size: var(--text-base);
  color: var(--color-primary-300);
  font-weight: var(--font-medium);
  margin-bottom: var(--space-2);
}

.home__name {
  font-size: clamp(1.8rem, 6vw, 3.5rem);
  font-weight: var(--font-extrabold);
  color: #ffffff;
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
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--color-neutral-300);
  font-size: var(--text-lg);
  transition: all var(--transition-base);
}

.home__social-link:hover {
  transform: translateY(-3px);
  background: rgba(124, 58, 237, 0.2);
  border-color: var(--color-primary-600);
  color: white;
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