<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../composables/useLanguage';

gsap.registerPlugin(ScrollTrigger);

const { t } = useLanguage();
let gsapCtx;

onMounted(() => {
  gsapCtx = gsap.context(() => {
    gsap.from('.skills__header', {
      y: 28,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.skills__header',
        start: 'top 90%',
        once: true,
      },
    });

    gsap.from('.skill-item', {
      y: 22,
      opacity: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: 'power2.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.skills__grid',
        start: 'top 90%',
        once: true,
      },
    });
  });
});

onUnmounted(() => {
  if (gsapCtx) gsapCtx.revert();
});

const skills = {
  technical: [
    { name: "HTML5",             icon: "fab fa-html5" },
    { name: "CSS3",              icon: "fab fa-css3-alt" },
    { name: "JavaScript",        icon: "fab fa-js" },
    { name: "Vue.js",            icon: "fab fa-vuejs" },
    { name: "PHP",               icon: "fab fa-php" },
    { name: "Laravel",           icon: "fab fa-laravel" },
    { name: "MySQL",             icon: "fas fa-database" },
    { name: "Supabase",          icon: "fas fa-server" },
    { name: "Trello",            icon: "fab fa-trello" },
    { name: "Git",               icon: "fab fa-git-alt" },
    { name: "Figma",             icon: "fab fa-figma" },
    { name: "Responsive Design", icon: "fas fa-mobile-alt" }
  ]
};
</script>

<template>
  <section class="skills" id="habilidades">
    <div class="skills__container">
      <div class="skills__header">
        <h2 class="section-title">{{ t('skills.title') }}</h2>
        <p class="skills__subtitle">{{ t('skills.subtitle') }}</p>
      </div>

      <div class="skills__grid">
        <!-- Technical Skills -->
        <div class="skill-category">
          <h3 class="skill-category__title">{{ t('skills.technical') }}</h3>
          <div class="skills-pills">
            <span
              v-for="(skill, index) in skills.technical"
              :key="'tech-' + index"
              class="skill-pill"
            >
              <i :class="skill.icon"></i>
              {{ skill.name }}
            </span>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="skill-category">
          <h3 class="skill-category__title">{{ t('skills.soft') }}</h3>
          <div class="skills-pills">
            <span
              v-for="(skill, index) in t('skills.softSkills')"
              :key="'soft-' + index"
              class="skill-pill skill-pill--soft"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ========= BASE MOBILE ========= */
.skills {
  padding: var(--space-16) 0;
  background: var(--bg-secondary);
}

.skills__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.skills__header {
  text-align: center;
  margin-bottom: var(--space-10);
}

.skills__subtitle {
  color: var(--text-tertiary);
  font-size: var(--text-base);
  margin-top: var(--space-5);
}

/* Single column on mobile */
.skills__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

.skill-category {
  background: var(--bg-primary);
  padding: var(--space-5);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-md);
}

.skill-category__title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--border-primary);
}

.skills-pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.skill-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  color: var(--text-secondary);
  border-radius: var(--radius-lg);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  transition: border-color var(--transition-base), color var(--transition-base);
  cursor: default;
}

.skill-pill:hover {
  border-color: var(--color-primary-600);
  color: var(--text-primary);
}

.skill-pill--soft {
  background: var(--color-primary-50);
  border-color: var(--color-primary-200);
  color: var(--color-primary-700);
}

.skill-pill--soft:hover {
  background: var(--color-primary-100);
  border-color: var(--color-primary-500);
  color: var(--color-primary-800);
}

/* ========= TABLET: 640px ========= */
@media (min-width: 640px) {
  .skills__grid { gap: var(--space-6); }

  .skill-pill {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
    gap: var(--space-2);
  }
}

/* ========= DESKTOP: 1024px ========= */
@media (min-width: 1024px) {
  .skills { padding: var(--space-20) 0; }

  .skills__container { padding: 0 var(--space-6); }

  .skills__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
  }

  .skills__header { margin-bottom: var(--space-14); }

  .skills__subtitle { font-size: var(--text-lg); }

  .skill-category { padding: var(--space-8); }

  .skill-category__title { font-size: var(--text-xl); margin-bottom: var(--space-5); }
}
</style>