<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__container">
      <div class="navbar__brand">
        <span class="navbar__logo gradient-text">BG</span>
      </div>
      
      <button 
        class="navbar__toggle" 
        @click="toggleMobileMenu"
        :class="{ 'active': isMobileMenuOpen }"
        aria-label="Toggle menu"
      >
        <span class="hamburger"></span>
      </button>
      
      <ul class="navbar__links" :class="{ 'active': isMobileMenuOpen }">
        <li v-for="link in navLinks" :key="link.id">
          <a 
            :href="`#${link.id}`" 
            class="navbar__link"
            :class="{ 'active': activeSection === link.id }"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <a 
            href="/cv/CV Gamboa Delgado, Brayan.pdf" 
            download 
            class="navbar__cta"
            title="Descargar CV"
          >
            <i class="fas fa-download"></i>
            <span>CV</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref('aboutme');
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { id: 'aboutme', label: 'Sobre mí' },
  { id: 'Proyectos', label: 'Proyectos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contacto', label: 'Contacto' }
];

// Scroll spy functionality
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  
  // Detect active section
  const sections = navLinks.map(link => document.getElementById(link.id));
  const scrollPosition = window.scrollY + 200;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = navLinks[i].id;
      break;
    }
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  z-index: var(--z-fixed);
  transition: all var(--transition-base);
  background: transparent;
}

.navbar--scrolled {
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.navbar__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand {
  display: flex;
  align-items: center;
}

.navbar__logo {
  font-size: var(--text-2xl);
  font-weight: var(--font-extrabold);
  letter-spacing: -1px;
  cursor: pointer;
  transition: transform var(--transition-base);
}

.navbar__logo:hover {
  transform: scale(1.05);
}

.navbar__links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
}

.navbar__link {
  position: relative;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  display: block;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary-500), var(--color-accent-500));
  border-radius: var(--radius-full);
  transition: transform var(--transition-base);
}

.navbar__link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.navbar__link.active {
  color: var(--text-primary);
}

.navbar__link.active::after {
  transform: translateX(-50%) scaleX(1);
}

.navbar__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-5);
  background: linear-gradient(135deg, var(--color-primary-600), var(--color-accent-500));
  color: white;
  text-decoration: none;
  font-weight: var(--font-semibold);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.navbar__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}

.navbar__toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
  z-index: var(--z-50);
}

.hamburger {
  width: 24px;
  height: 2px;
  background-color: white;
  position: relative;
  display: block;
  transition: all var(--transition-base);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: white;
  transition: all var(--transition-base);
}

.hamburger::before {
  top: -7px;
}

.hamburger::after {
  top: 7px;
}

.navbar__toggle.active .hamburger {
  background-color: transparent;
}

.navbar__toggle.active .hamburger::before {
  transform: rotate(45deg);
  top: 0;
}

.navbar__toggle.active .hamburger::after {
  transform: rotate(-45deg);
  top: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar__toggle {
    display: block;
  }
  
  .navbar__links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 80%;
    max-width: 300px;
    background: rgba(17, 24, 39, 0.98);
    backdrop-filter: blur(12px);
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem var(--space-6) var(--space-6);
    gap: var(--space-2);
    transition: right var(--transition-slow);
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
  }
  
  .navbar__links.active {
    right: 0;
  }
  
  .navbar__links li {
    width: 100%;
  }
  
  .navbar__link {
    width: 100%;
    padding: var(--space-3) var(--space-4);
  }
  
  .navbar__cta {
    width: 100%;
    justify-content: center;
    margin-top: var(--space-4);
  }
}

@media (max-width: 390px) {
  .navbar__container {
    padding: 0 var(--space-4);
  }
  
  .navbar__logo {
    font-size: var(--text-xl);
  }
}
</style>