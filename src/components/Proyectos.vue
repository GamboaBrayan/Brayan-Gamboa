<script setup>
import { computed } from 'vue';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();

const staticProjectData = [
  {
    posts_id: 0,
    imagen: "/images/skillLedger.png",
    enlace: "https://skillledger.netlify.app/login",
    github: "https://github.com/GamboaBrayan",
  },
  {
    posts_id: 1,
    imagen: "/images/vitality.png",
    enlace: "https://vitality-landing.netlify.app/",
    github: "https://github.com/GamboaBrayan",
  },
  {
    posts_id: 2,
    imagen: "/images/Api_news.png",
    enlace: "https://apiinfonow.netlify.app/",
    github: "https://github.com/GamboaBrayan",
  },
];

const projects = computed(() => {
  const translatedItems = t('projects.items');
  // Return empty array if translation isn't an array yet (safety check)
  if (!Array.isArray(translatedItems)) return [];
  
  return translatedItems.map((item, index) => ({
    ...item,
    // Merge with static data if available for this index
    ...(staticProjectData[index] || {})
  }));
});
</script>

<template>
  <div class="proyectos" id="Proyectos">
    <div class="proyectos__container">
      <div class="proyectos__header">
        <h2 class="proyectos__title">{{ t('projects.title') }}</h2>
        <p class="proyectos__subtitle">{{ t('projects.subtitle') }}</p>
      </div>
      
      <div class="proyectos__grid">
        <div v-for="(proyecto, index) in projects" :key="index" class="proyecto-card">
          <div class="proyecto-card__image-wrapper">
            <img v-if="proyecto.imagen" :src="proyecto.imagen" :alt="proyecto.nombre" class="proyecto-card__image" />
            <div class="proyecto-card__overlay">
              <div class="proyecto-card__links">
                <a v-if="proyecto.enlace" :href="proyecto.enlace" target="_blank" rel="noopener noreferrer" class="proyecto-card__link">
                  <i class="fas fa-external-link-alt"></i>
                  <span>{{ t('projects.demo') }}</span>
                </a>
                <a v-if="proyecto.github" :href="proyecto.github" target="_blank" rel="noopener noreferrer" class="proyecto-card__link">
                  <i class="fab fa-github"></i>
                  <span>{{ t('projects.code') }}</span>
                </a>
              </div>
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
.proyectos {
  padding: var(--space-20) 0;
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.proyectos__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.proyectos__header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.proyectos__title {
  font-size: var(--text-4xl);
  font-weight: var(--font-extrabold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
  position: relative;
  display: inline-block;
}

.proyectos__title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary-500), var(--color-accent-500));
  border-radius: var(--radius-full);
}

.proyectos__subtitle {
  color: var(--text-secondary);
  font-size: var(--text-lg);
  margin-top: var(--space-6);
}

.proyectos__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-8);
}

.proyecto-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  border: 1px solid var(--border-primary);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);
}

.proyecto-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-primary-500);
}

.proyecto-card__image-wrapper {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: var(--bg-tertiary);
}

.proyecto-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.proyecto-card:hover .proyecto-card__image {
  transform: scale(1.1);
}

.proyecto-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 24, 39, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.proyecto-card:hover .proyecto-card__overlay {
  opacity: 1;
}

.proyecto-card__links {
  display: flex;
  gap: var(--space-4);
}

.proyecto-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  background: linear-gradient(135deg, var(--color-primary-600), var(--color-accent-500));
  color: white;
  text-decoration: none;
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);
}

.proyecto-card__link:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.proyecto-card__content {
  padding: var(--space-6);
}

.proyecto-card__title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.proyecto-card__description {
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-5);
}

.proyecto-card__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tech-tag {
  padding: var(--space-1) var(--space-3);
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.3);
  color: var(--color-primary-400);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
 font-weight: var(--font-medium);
  transition: all var(--transition-base);
}

.tech-tag:hover {
  background: rgba(147, 51, 234, 0.2);
  border-color: var(--color-primary-500);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .proyectos {
    padding: var(--space-16) 0;
  }
  
  .proyectos__grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  .proyectos__header {
    margin-bottom: var(--space-12);
  }
}

@media (max-width: 390px) {
  .proyectos__container {
    padding: 0 var(--space-4);
  }
  
  .proyecto-card__links {
    flex-direction: column;
    width: 80%;
  }
  
  .proyecto-card__link {
    width: 100%;
    justify-content: center;
  }
}
</style>