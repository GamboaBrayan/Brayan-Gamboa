<script setup>
import { ref, onMounted } from 'vue';

const nombre = "Brayan Gamboa Delgado";
const rol = "Desarrollador Front-end";
const descripcion = "Estudiante de Ingeniería de Software especializado en crear experiencias web modernas y funcionales con Vue.js, JavaScript y tecnologías front-end actuales.";

const displayedText = ref('');
const isTyping = ref(true);
let typewriterTimeout;

const typewriter = () => {
  let index = 0;
  const text = rol;
  
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

onMounted(() => {
  setTimeout(typewriter, 500);
});
</script>

<template>
  <div class="home" id="aboutme">
    <video src="../assets/background.mp4" autoplay muted loop class="home__video"></video>
    <div class="home__overlay"></div>
    
    <div class="home__container">
      <div class="home__content fadeInUp">
        <div class="home__image-wrapper">
          <div class="home__image-glow"></div>
          <img src="../assets/me.png" alt="Brayan Gamboa" class="home__image">
        </div>
        
        <div class="home__text">
          <p class="home__greeting">Hola, soy</p>
          <h1 class="home__name gradient-text">{{ nombre }}</h1>
          <div class="home__role-wrapper">
            <h2 class="home__role">
              {{ displayedText }}
              <span class="home__cursor" :class="{ 'blink': !isTyping }">|</span>
            </h2>
          </div>
          <p class="home__description">{{ descripcion }}</p>
          
          <div class="home__cta">
            <a href="#contacto" class="btn btn-primary">
              <i class="fas fa-envelope"></i>
              <span>Contáctame</span>
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(17, 24, 39, 0.85) 0%,
    rgba(31, 41, 55, 0.75) 50%,
    rgba(17, 24, 39, 0.9) 100%
  );
  z-index: -1;
}

.home__container {
  max-width: 1280px;
  width: 100%;
  padding: var(--space-6);
  position: relative;
  z-index: 1;
}

.home__content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-12);
  align-items: center;
  animation: fadeInUp 0.8s ease-out;
}

.home__image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home__image-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.3) 0%,
    transparent 70%
  );
  filter: blur(40px);
  animation: pulse 3s ease-in-out infinite;
}

.home__image {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 80px rgba(59, 130, 246, 0.2);
  object-fit: cover;
  transition: transform var(--transition-base);
}

.home__image:hover {
  transform: scale(1.05);
}

.home__text {
  color: white;
}

.home__greeting {
  font-size: var(--text-lg);
  color: var(--color-accent-400);
  font-weight: var(--font-medium);
  margin-bottom: var(--space-2);
  opacity: 0.9;
}

.home__name {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-extrabold);
  margin-bottom: var(--space-4);
  line-height: 1.1;
}

.home__role-wrapper {
  min-height: 60px;
  margin-bottom: var(--space-4);
}

.home__role {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: var(--font-semibold);
  color: var(--text-secondary);
  display: inline-block;
}

.home__cursor {
  color: var(--color-primary-500);
  font-weight: var(--font-bold);
}

.home__cursor.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

.home__description {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
  max-width: 600px;
}

.home__cta {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.home__social {
  display: flex;
  gap: var(--space-4);
}

.home__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  font-size: var(--text-xl);
  transition: all var(--transition-base);
  backdrop-filter: blur(10px);
}

.home__social-link:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.home__social-link:nth-child(1):hover {
  background: #333;
  border-color: #333;
}

.home__social-link:nth-child(2):hover {
  background: #0077b5;
  border-color: #0077b5;
}

.home__social-link:nth-child(3):hover {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  border-color: transparent;
}

.home__scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: var(--text-2xl);
  opacity: 0.7;
  transition: all var(--transition-base);
  cursor: pointer;
}

.home__scroll-indicator:hover {
  opacity: 1;
  color: var(--color-primary-400);
}

/* Responsive */
@media (max-width: 1024px) {
  .home__content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-8);
  }
  
  .home__image-wrapper {
    order: -1;
  }
  
  .home__image {
    max-width: 300px;
  }
  
  .home__text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .home__cta {
    justify-content: center;
  }
  
  .home__social {
    justify-content: center;
  }
}

@media (max-width: 390px) {
  .home__container {
    padding: var(--space-4);
  }
  
  .home__image {
    max-width: 250px;
  }
  
  .home__greeting {
    font-size: var(--text-base);
  }
  
  .home__description {
    font-size: var(--text-base);
  }
  
  .home__cta {
    flex-direction: column;
    width: 100%;
  }
  
  .btn {
    width: 100%;
  }
  
  .home__social-link {
    width: 44px;
    height: 44px;
    font-size: var(--text-lg);
  }
}
</style>