<script setup>
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();

const skills = {
  technical: [
    { name: "HTML5", icon: "fab fa-html5"},
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Vue.js", icon: "fab fa-vuejs" },
    { name: "Git", icon: "fab fa-git-alt"},
    { name: "Figma", icon: "fab fa-figma" },
    { name: "Responsive Design", icon: "fas fa-mobile-alt"}
  ]
};
</script>

<template>
  <section class="skills" id="habilidades">
    <div class="skills__container">
      <div class="skills__header">
        <h2 class="skills__title">{{ t('skills.title') }}</h2>
        <p class="skills__subtitle">{{ t('skills.subtitle') }}</p>
      </div>
      
      <div class="skills__grid">
        <!-- Technical Skills -->
        <div class="skill-category">
          <div class="skill-category__header">
            <h3 class="skill-category__title">{{ t('skills.technical') }}</h3>
          </div>
          
          <div class="skills-pills">
            <span v-for="(skill, index) in skills.technical" :key="'tech-' + index" class="skill-pill">
              <i :class="skill.icon"></i>
              {{ skill.name }}
            </span>
          </div>
        </div>
        
        <!-- Soft Skills -->
        <div class="skill-category">
          <div class="skill-category__header">
            <h3 class="skill-category__title">{{ t('skills.soft') }}</h3>
          </div>
          
          <div class="skills-pills">
            <span v-for="(skill, index) in t('skills.softSkills')" :key="'soft-' + index" class="skill-pill">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: var(--space-20) 0;
  background: var(--bg-secondary);
}

.skills__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.skills__header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.skills__title {
  font-size: var(--text-4xl);
  font-weight: var(--font-extrabold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
  position: relative;
  display: inline-block;
}

.skills__title::after {
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

.skills__subtitle {
  color: var(--text-secondary);
  font-size: var(--text-lg);
  margin-top: var(--space-6);
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: var(--space-8);
}

.skill-category {
  background: var(--bg-primary);
  padding: var(--space-8);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.skill-category:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary-600);
}

.skill-category__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.skill-category__icon {
  font-size: var(--text-3xl);
  line-height: 1;
}

.skill-category__title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin: 0;
}



/* Soft Skills */
.skills-pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.skill-pill {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: var(--text-primary);
  border-radius: var(--radius-xl);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  transition: all var(--transition-base);
  cursor: default;
}

.skill-pill:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: var(--color-primary-500);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

@media (max-width: 768px) {
  .skills {
    padding: var(--space-16) 0;
  }
  
  .skills__grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  .skill-category {
    padding: var(--space-6);
  }
  
  .skills__header {
    margin-bottom: var(--space-12);
  }
}

@media (max-width: 390px) {
  .skills__container {
    padding: 0 var(--space-4);
  }
  
  .skill-category {
    padding: var(--space-5);
  }
  

  
  .skill-pill {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
  }
}
</style>