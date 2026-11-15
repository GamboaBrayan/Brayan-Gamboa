<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__container">
      <div class="navbar__brand">
        <span class="navbar__logo">BG</span>
      </div>

      <button
        class="navbar__toggle"
        @click="toggleMobileMenu"
        :class="{ active: isMobileMenuOpen }"
        aria-label="Toggle menu"
      >
        <span class="hamburger"></span>
      </button>

      <ul class="navbar__links" :class="{ active: isMobileMenuOpen }">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="navbar__link"
            :class="{ active: activeSection === link.id }"
            @click="closeMobileMenu"
          >
            {{ t(`navbar.${link.translationKey}`) }}
          </a>
        </li>
        <li>
          <button @click="toggleLanguage" class="navbar__lang-btn" :title="currentLanguage === 'es' ? 'Switch to English' : 'Cambiar a Español'">
            {{ currentLanguage === 'es' ? 'EN' : 'ES' }}
          </button>
        </li>
        <li>
          <a
            href="/cv/CV Gamboa Delgado, Brayan.pdf"
            download
            class="navbar__cta"
            title="Descargar CV"
          >
            <i class="fas fa-download"></i>
            <span>{{ t('navbar.cv') }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../composables/useLanguage';

const { currentLanguage, toggleLanguage, t } = useLanguage();

const activeSection   = ref('aboutme');
const isScrolled      = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { id: 'aboutme',     translationKey: 'about'      },
  { id: 'Proyectos',   translationKey: 'projects'   },
  { id: 'experiencia', translationKey: 'experience' },
  { id: 'habilidades', translationKey: 'skills'     },
  { id: 'contacto',    translationKey: 'contact'    }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  const sections      = navLinks.map(link => document.getElementById(link.id));
  const scrollPos     = window.scrollY + 200;
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section && section.offsetTop <= scrollPos) {
      activeSection.value = navLinks[i].id;
      break;
    }
  }
};

const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value; };
const closeMobileMenu  = () => { isMobileMenuOpen.value = false; };

onMounted(()   => { window.addEventListener('scroll', handleScroll); handleScroll(); });
onUnmounted(() => { window.removeEventListener('scroll', handleScroll); });
</script>

<style scoped>
/* ========= BASE MOBILE ========= */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.875rem 0;
  z-index: var(--z-fixed);
  transition: all var(--transition-base);
  background: transparent;
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  padding: 0.625rem 0;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
}

.navbar__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand { display: flex; align-items: center; }

.navbar__logo {
  font-size: var(--text-xl);
  font-weight: var(--font-extrabold);
  letter-spacing: -1px;
  color: var(--color-primary-800);
}

/* Hamburger button — visible on mobile */
.navbar__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
  z-index: var(--z-50);
  width: 36px;
  height: 36px;
}

.hamburger {
  width: 22px;
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
  width: 22px;
  height: 2px;
  background-color: white;
  transition: all var(--transition-base);
}
.hamburger::before { top: -6px; }
.hamburger::after  { top:  6px; }

.navbar__toggle.active .hamburger              { background-color: transparent; }
.navbar__toggle.active .hamburger::before      { transform: rotate(45deg); top: 0; }
.navbar__toggle.active .hamburger::after       { transform: rotate(-45deg); top: 0; }

/* Mobile nav drawer (slides from right) */
.navbar__links {
  position: fixed;
  top: 0;
  right: -100%;
  height: 100dvh;
  width: min(80vw, 280px);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-left: 1px solid rgba(15, 23, 42, 0.08);
  flex-direction: column;
  align-items: flex-start;
  padding: 5rem var(--space-5) var(--space-6);
  gap: var(--space-1);
  transition: right var(--transition-slow);
  box-shadow: -4px 0 24px rgba(15, 23, 42, 0.12);
  list-style: none;
  margin: 0;
  display: flex;
}

.navbar__links.active { right: 0; }

.navbar__links li { width: 100%; }

.navbar__link {
  display: block;
  width: 100%;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  padding: var(--space-3) var(--space-3);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  position: relative;
}

.navbar__link:hover {
  color: var(--text-primary);
  background: rgba(15, 23, 42, 0.04);
}

.navbar__link.active {
  color: var(--color-primary-600);
}

/* Active underline indicator */
.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 6px;
  left: var(--space-3);
  width: 0;
  height: 2px;
  background: var(--color-primary-600);
  border-radius: var(--radius-full);
  transition: width var(--transition-base);
}
.navbar__link.active::after { width: 24px; }

.navbar__lang-btn {
  background: rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(15, 23, 42, 0.12);
  color: var(--text-primary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  transition: all var(--transition-base);
  width: 100%;
  text-align: left;
  margin-top: var(--space-2);
}

.navbar__lang-btn:hover {
  background: rgba(124, 58, 237, 0.15);
  border-color: var(--color-primary-600);
}

.navbar__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  background: var(--color-primary-600);
  color: white;
  text-decoration: none;
  font-weight: var(--font-semibold);
  font-size: var(--text-sm);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  width: 100%;
  justify-content: center;
  margin-top: var(--space-2);
}

.navbar__cta:hover {
  background: var(--color-primary-700);
  color: white;
  transform: translateY(-1px);
}

/* ========= DESKTOP: 768px ========= */
@media (min-width: 768px) {
  .navbar__toggle { display: none; }

  .navbar__links {
    /* Reset mobile drawer to inline flex */
    position: static;
    height: auto;
    width: auto;
    background: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border-left: none;
    border: none;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: var(--space-1);
    transition: none;
    box-shadow: none;
  }

  .navbar__links li { width: auto; }

  .navbar__link {
    padding: var(--space-2) var(--space-3);
    white-space: nowrap;
    width: auto;
  }

  .navbar__link::after {
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 60%;
  }
  .navbar__link.active::after {
    transform: translateX(-50%) scaleX(1);
    width: 60%;
  }

  .navbar__lang-btn {
    width: auto;
    text-align: center;
    padding: var(--space-2) var(--space-3);
    margin-top: 0;
    margin-right: var(--space-1);
  }

  .navbar__cta {
    width: auto;
    justify-content: center;
    margin-top: 0;
    padding: var(--space-2) var(--space-4);
  }

  .navbar__container { padding: 0 var(--space-6); }

  .navbar__logo { font-size: var(--text-2xl); }
}
</style>