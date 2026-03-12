<script setup>
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
</script>

<template>
  <section class="experience" id="experiencia">
    <div class="experience__container">
      <div class="experience__header">
        <h2 class="section-title">{{ t('experience.title') }}</h2>
        <p class="experience__subtitle">{{ t('experience.subtitle') }}</p>
      </div>

      <!-- Educación -->
      <div class="education-block">
        <h3 class="education-block__title">
          <i class="fas fa-graduation-cap"></i>
          {{ t('experience.educationTitle') }}
        </h3>

        <div class="timeline">
          <div
            v-for="(item, index) in t('experience.education')"
            :key="'edu-' + index"
            class="timeline__item"
          >
            <div class="timeline__dot-wrapper">
              <div class="timeline__dot timeline__dot--edu"></div>
              <div v-if="index < t('experience.education').length - 1" class="timeline__line"></div>
            </div>
            <div class="timeline__content">
              <div class="timeline__meta">
                <span class="timeline__date">
                  <i class="far fa-calendar-alt"></i>
                  {{ item.period }}
                </span>
                <span v-if="item.current" class="timeline__badge">{{ t('experience.current') }}</span>
              </div>
              <h3 class="timeline__role">{{ item.degree }}</h3>
              <p class="timeline__company">
                <i class="fas fa-university"></i>
                {{ item.institution }}
              </p>
              <p class="timeline__description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Experiencia laboral -->
      <div class="education-block">
        <h3 class="education-block__title">
          <i class="fas fa-briefcase"></i>
          {{ t('experience.title') }}
        </h3>

        <div class="timeline">
          <div
            v-for="(item, index) in t('experience.items')"
            :key="'job-' + index"
            class="timeline__item"
          >
            <div class="timeline__dot-wrapper">
              <div class="timeline__dot"></div>
              <div v-if="index < t('experience.items').length - 1" class="timeline__line"></div>
            </div>
            <div class="timeline__content">
              <div class="timeline__meta">
                <span class="timeline__date">
                  <i class="far fa-calendar-alt"></i>
                  {{ item.period }}
                </span>
                <span v-if="item.current" class="timeline__badge">{{ t('experience.current') }}</span>
              </div>
              <h3 class="timeline__role">{{ item.role }}</h3>
              <p class="timeline__company">
                <i class="fas fa-building"></i>
                {{ item.company }}
              </p>
              <p class="timeline__description">{{ item.description }}</p>
              <div v-if="item.technologies && item.technologies.length" class="timeline__techs">
                <span v-for="(tech, ti) in item.technologies" :key="ti" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ========= BASE MOBILE ========= */
.experience {
  padding: var(--space-16) 0;
  background: var(--bg-secondary);
}

.experience__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.experience__header {
  text-align: center;
  margin-bottom: var(--space-10);
}

.experience__subtitle {
  color: var(--text-tertiary);
  font-size: var(--text-base);
  margin-top: var(--space-5);
}

/* --- Education block divider --- */
.education-block {
  margin-top: var(--space-10);
  padding-top: var(--space-8);
  border-top: 1px solid var(--border-primary);
}

.education-block__title {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.education-block__title i {
  color: var(--color-primary-500);
  font-size: var(--text-xl);
}

/* --- Timeline --- */
.timeline {
  display: flex;
  flex-direction: column;
}

.timeline__item {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.timeline__dot-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 4px;
}

.timeline__dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--color-primary-600);
  border: 2px solid var(--bg-secondary);
  box-shadow: 0 0 0 3px var(--color-primary-800);
  flex-shrink: 0;
}

.timeline__dot--edu {
  background: var(--color-accent-600);
  box-shadow: 0 0 0 3px var(--color-accent-900);
}

.timeline__line {
  width: 2px;
  flex: 1;
  min-height: 28px;
  background: var(--border-primary);
  margin-top: var(--space-2);
  margin-bottom: var(--space-2);
}

.timeline__content {
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-4);
  margin-bottom: var(--space-4);
  flex: 1;
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

.timeline__content:hover {
  border-color: var(--color-primary-700);
  box-shadow: var(--shadow-lg);
}

.timeline__meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
  margin-bottom: var(--space-2);
}

.timeline__date {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  font-weight: var(--font-medium);
}

.timeline__badge {
  display: inline-flex;
  align-items: center;
  padding: 2px var(--space-2);
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(124, 58, 237, 0.3);
  color: var(--color-primary-300);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
}

.timeline__role {
  font-size: var(--text-base);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.timeline__company {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-primary-400);
  font-weight: var(--font-medium);
  margin-bottom: var(--space-3);
}

.timeline__description {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-3);
}

.timeline__techs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tech-tag {
  padding: 2px var(--space-2);
  background: rgba(124, 58, 237, 0.08);
  border: 1px solid rgba(124, 58, 237, 0.25);
  color: var(--color-primary-300);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
}

/* ========= TABLET: 640px ========= */
@media (min-width: 640px) {
  .timeline__role { font-size: var(--text-lg); }
  .timeline__date { font-size: var(--text-sm); }
  .timeline__dot  { width: 15px; height: 15px; }
  .timeline__content { padding: var(--space-5); }
}

/* ========= DESKTOP: 1024px ========= */
@media (min-width: 1024px) {
  .experience { padding: var(--space-20) 0; }
  .experience__container { padding: 0 var(--space-6); }
  .experience__header { margin-bottom: var(--space-14); }
  .experience__subtitle { font-size: var(--text-lg); }

  .timeline { max-width: 820px; margin: 0 auto; }

  .timeline__content { padding: var(--space-6); }
  .timeline__role { font-size: var(--text-xl); }
  .timeline__description { font-size: var(--text-base); }

  .education-block { margin-top: var(--space-12); padding-top: var(--space-10); }
  .education-block__title { font-size: var(--text-xl); }
}
</style>
