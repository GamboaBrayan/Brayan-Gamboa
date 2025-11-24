<script setup>
const currentYear = new Date().getFullYear();

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/GamboaBrayan', icon: 'fab fa-github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/brayan-gamboa-delgado/', icon: 'fab fa-linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/brayan.sgd/', icon: 'fab fa-instagram' }
];

const quickLinks = [
  { label: 'Sobre mí', href: '#aboutme' },
  { label: 'Proyectos', href: '#Proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' }
];
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <!-- Brand Section -->
        <div class="footer__brand">
          <h3 class="footer__logo gradient-text">BG</h3>
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
            <li>
              <a href="https://wa.me/+51934504275" target="_blank" rel="noopener noreferrer" class="footer__link">
                <i class="fab fa-whatsapp"></i>
                +51 934 504 275
              </a>
            </li>
            <li class="footer__text">
              <i class="fas fa-map-marker-alt"></i>
              lima, Perú
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ currentYear }} Brayan Gamboa. Todos los derechos reservados.
        </p>
        <p class="footer__credits">
          Hecho con <i class="fas fa-heart"></i> y Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-primary);
  padding: var(--space-16) 0 var(--space-6);
}

.footer__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.footer__content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-12);
  padding-bottom: var(--space-12);
  border-bottom: 1px solid var(--border-primary);
}

.footer__brand {
  max-width: 400px;
}

.footer__logo {
  font-size: var(--text-3xl);
  font-weight: var(--font-extrabold);
  letter-spacing: -1px;
  margin-bottom: var(--space-4);
}

.footer__description {
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.footer__social {
  display: flex;
  gap: var(--space-3);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-primary);
  color: var(--text-secondary);
  font-size: var(--text-lg);
  transition: all var(--transition-base);
}

.footer__social-link:hover {
  transform: translateY(-3px);
  border-color: var(--color-primary-500);
  color: var(--color-primary-400);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.footer__heading {
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-5);
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
  transition: color var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.footer__link:hover {
  color: var(--color-primary-400);
}

.footer__text {
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-8);
  color: var(--text-tertiary);
  font-size: var(--text-sm);
}

.footer__copyright,
.footer__credits {
  margin: 0;
}

.footer__credits i {
  color: var(--color-error);
  margin: 0 var(--space-1);
}

@media (max-width: 1024px) {
  .footer__content {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }
  
  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer__content {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
  
  .footer__bottom {
    flex-direction: column;
    gap: var(--space-2);
    text-align: center;
  }
}

@media (max-width: 390px) {
  .footer__container {
    padding: 0 var(--space-4);
  }
  
  .footer {
    padding: var(--space-12) 0 var(--space-5);
  }
}
</style>
