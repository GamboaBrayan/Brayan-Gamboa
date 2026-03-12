<script setup>
const currentYear = new Date().getFullYear();

const socialLinks = [
  { name: 'GitHub',    url: 'https://github.com/GamboaBrayan',                      icon: 'fab fa-github'    },
  { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/brayan-gamboa-delgado/',    icon: 'fab fa-linkedin'  },
  { name: 'Instagram', url: 'https://www.instagram.com/brayan.sgd/',                icon: 'fab fa-instagram' }
];

const quickLinks = [
  { label: 'Sobre mí',    href: '#aboutme'     },
  { label: 'Proyectos',   href: '#Proyectos'   },
  { label: 'Mi Trayectoria', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto',    href: '#contacto'    }
];
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <!-- Brand -->
        <div class="footer__brand">
          <h3 class="footer__logo">BG</h3>
          <p class="footer__description">
            Desarrollador Front-end apasionado por crear experiencias web modernas y funcionales.
          </p>
          <div class="footer__social">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__social-link"
              :aria-label="social.name"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer__links">
          <h4 class="footer__heading">Enlaces Rápidos</h4>
          <ul class="footer__list">
            <li v-for="link in quickLinks" :key="link.label">
              <a :href="link.href" class="footer__link">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer__contact">
          <h4 class="footer__heading">Contacto</h4>
          <ul class="footer__list">
            <li>
              <a href="mailto:Brayangamboa620@gmail.com" class="footer__link">
                <i class="fas fa-envelope"></i>
                Brayangamboa620@gmail.com
              </a>
            </li>
            <li class="footer__text">
              <i class="fas fa-map-marker-alt"></i>
              Lima, Perú
            </li>
          </ul>
        </div>
      </div>


    </div>
  </footer>
</template>

<style scoped>
/* ========= BASE MOBILE ========= */
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-primary);
  padding: var(--space-12) 0 var(--space-5);
}

.footer__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

/* Single column on mobile */
.footer__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  padding-bottom: var(--space-8);
  border-bottom: 1px solid var(--border-primary);
}

.footer__logo {
  font-size: var(--text-2xl);
  font-weight: var(--font-extrabold);
  color: var(--color-primary-400);
  letter-spacing: -1px;
  margin-bottom: var(--space-3);
}

.footer__description {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-5);
}

.footer__social {
  display: flex;
  gap: var(--space-3);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-primary);
  color: var(--text-secondary);
  font-size: var(--text-base);
  transition: all var(--transition-base);
}

.footer__social-link:hover {
  transform: translateY(-2px);
  border-color: var(--color-primary-600);
  color: var(--color-primary-300);
}

.footer__heading {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__link {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  transition: color var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.footer__link:hover { color: var(--color-primary-300); }

.footer__text {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}



/* ========= TABLET: 640px ========= */
@media (min-width: 640px) {
  .footer__content { grid-template-columns: 1fr 1fr; }
  .footer__brand   { grid-column: 1 / -1; }
}

/* ========= DESKTOP: 1024px ========= */
@media (min-width: 1024px) {
  .footer { padding: var(--space-16) 0 var(--space-6); }

  .footer__container { padding: 0 var(--space-6); }

  .footer__content {
    grid-template-columns: 2fr 1fr 1fr;
    gap: var(--space-12);
    padding-bottom: var(--space-12);
  }

  .footer__brand { grid-column: auto; max-width: 380px; }


}
</style>
