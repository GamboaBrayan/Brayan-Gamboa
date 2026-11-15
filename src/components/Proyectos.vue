<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../composables/useLanguage';

gsap.registerPlugin(ScrollTrigger);

const { t } = useLanguage();
let gsapCtx;

const staticProjectData = [
  { posts_id: 0, imagen: "/images/skillLedger.png", github: "https://github.com/TalentChain-UPC/Frontend", demo: null },
  { posts_id: 1, imagen: "/images/vitality.png",    github: "https://github.com/GamboaBrayan/Vitality-Landing", demo: null },
  { posts_id: 2, imagen: "/images/Api_news.png",    github: "https://github.com/GamboaBrayan/ApiNews",         demo: "https://apiinfonow.netlify.app" },
  { posts_id: 3, imagen: "/images/rossandflor.png",    github: "https://github.com/ROSS-FLOR/ROSS-FLOR_Frontend",         demo: null  },
];

const projects = computed(() => {
  const translatedItems = t('projects.items');
  if (!Array.isArray(translatedItems)) return [];
  return translatedItems.map((item, index) => ({
    ...item,
    ...(staticProjectData[index] || {})
  }));
});

onMounted(() => {
  gsapCtx = gsap.context(() => {
    gsap.from('.proyectos__header', {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.proyectos__header',
        start: 'top 90%',
        once: true,
      },
    });

    const cards = gsap.utils.toArray('.proyecto-card');
    cards.forEach((card, idx) => {
      const brushPaths = card.querySelectorAll('.proyecto-card__brush-frame path');
      brushPaths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      const img = card.querySelector('.proyecto-card__image');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 92%',
          once: true,
        },
        delay: (idx % 2) * 0.12,
      });

      tl.from(card, {
        y: 32,
        opacity: 0,
        duration: 0.65,
        ease: 'power3.out',
        immediateRender: false,
      });

      if (img) {
        tl.from(img, {
          scale: 1.06,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          immediateRender: false,
        }, '-=0.4');
      }

      if (brushPaths.length) {
        tl.to(brushPaths, {
          strokeDashoffset: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power2.inOut',
        }, '-=0.55');
      }
    });
  });
});

onUnmounted(() => {
  if (gsapCtx) gsapCtx.revert();
});
</script>

<template>
  <div class="proyectos" id="Proyectos">
    <div class="proyectos__container">
      <div class="proyectos__header">
        <h2 class="section-title">{{ t('projects.title') }}</h2>
        <p class="proyectos__subtitle">{{ t('projects.subtitle') }}</p>
      </div>

      <div class="proyectos__grid">
        <div v-for="(proyecto, index) in projects" :key="index" class="proyecto-card">
          <div class="proyecto-card__image-wrapper">
            <img v-if="proyecto.imagen" :src="proyecto.imagen" :alt="proyecto.nombre" loading="lazy" decoding="async" class="proyecto-card__image" />
            <!-- Delineado curvo tipo brocha -->
            <svg class="proyecto-card__brush-frame" viewBox="0 0 400 200" preserveAspectRatio="none" fill="none" aria-hidden="true">
              <path
                d="M 8 28 C 12 10, 28 8, 95 10"
                stroke="var(--color-primary-600)"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M 305 190 C 372 192, 388 188, 392 168"
                stroke="var(--color-primary-600)"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
            <!-- Hover overlay: GitHub + Demo -->
            <div v-if="proyecto.github || proyecto.demo" class="proyecto-card__overlay">
              <a
                v-if="proyecto.github"
                :href="proyecto.github"
                target="_blank"
                rel="noopener noreferrer"
                class="proyecto-card__overlay-btn"
                :aria-label="'GitHub: ' + proyecto.nombre"
                @click.stop
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                v-if="proyecto.demo"
                :href="proyecto.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="proyecto-card__overlay-btn"
                :aria-label="'Ver sitio: ' + proyecto.nombre"
                @click.stop
              >
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <div class="proyecto-card__content">
            <h3 class="proyecto-card__title">{{ proyecto.nombre }}</h3>
            <p class="proyecto-card__description">{{ proyecto.descripcion }}</p>

            <div class="proyecto-card__technologies">
              <span v-for="(tech, techIndex) in proyecto.tecnologias" :key="techIndex" class="tech-tag">
                {{ tech }}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ========= BASE MOBILE ========= */
.proyectos {
  padding: var(--space-16) 0;
  background: var(--bg-primary);
}

.proyectos__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.proyectos__header {
  text-align: center;
  margin-bottom: var(--space-10);
}

.proyectos__subtitle {
  color: var(--text-tertiary);
  font-size: var(--text-base);
  margin-top: var(--space-5);
}

/* Single column on mobile */
.proyectos__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

.proyecto-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border-primary);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
}

.proyecto-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary-500);
}

.proyecto-card__image-wrapper {
  position: relative;
  width: 100%;
  height: 190px;
  overflow: hidden;
  background: var(--bg-tertiary);
}

.proyecto-card__brush-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.proyecto-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.proyecto-card:hover .proyecto-card__image {
  transform: scale(1.04);
}

/* Hover overlay with two icon buttons */
.proyecto-card__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  background: rgba(248, 250, 252, 0.85);
  opacity: 0;
  transition: opacity var(--transition-base);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}

.proyecto-card:hover .proyecto-card__overlay {
  opacity: 1;
}

.proyecto-card__overlay-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-secondary);
  color: var(--text-primary);
  font-size: 1.4rem;
  text-decoration: none;
  box-shadow: var(--shadow-md);
  transition: background var(--transition-base), transform var(--transition-base), color var(--transition-base), border-color var(--transition-base);
}

.proyecto-card__overlay-btn:hover {
  background: var(--color-primary-600);
  border-color: var(--color-primary-600);
  transform: scale(1.1);
  color: #ffffff;
}

.proyecto-card__content {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.proyecto-card__title {
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.proyecto-card__description {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
  flex: 1;
}

.proyecto-card__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.tech-tag {
  padding: var(--space-1) var(--space-3);
  background: var(--color-primary-50);
  border: 1px solid var(--color-primary-200);
  color: var(--color-primary-700);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
}

.proyecto-card__footer {
  border-top: 1px solid var(--border-primary);
  padding-top: var(--space-4);
}

.proyecto-card__github-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: transparent;
  border: 1.5px solid var(--border-secondary);
  color: var(--text-secondary);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  transition: all var(--transition-base);
  text-decoration: none;
}

.proyecto-card__github-btn:hover {
  border-color: var(--color-primary-600);
  color: var(--color-primary-300);
  background: rgba(124, 58, 237, 0.08);
}

/* ========= TABLET: 640px ========= */
@media (min-width: 640px) {
  .proyectos__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }
  .proyecto-card__image-wrapper { height: 200px; }
}

/* ========= DESKTOP: 1024px ========= */
@media (min-width: 1024px) {
  .proyectos { padding: var(--space-20) 0; }

  .proyectos__container { padding: 0 var(--space-6); }

  .proyectos__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-8);
  }

  .proyectos__header { margin-bottom: var(--space-14); }

  .proyectos__subtitle { font-size: var(--text-lg); }

  .proyecto-card__image-wrapper { height: 210px; }

  .proyecto-card__content { padding: var(--space-6); }

  .proyecto-card__title { font-size: var(--text-xl); }
}
</style>