<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const formStatus = ref({
  loading: false,
  success: false,
  error: ''
});

const sendEmail = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    formStatus.value.error = t('contact.form.validation');
    return;
  }

  formStatus.value.loading = true;
  formStatus.value.error = '';
  formStatus.value.success = false;

  try {
    await emailjs.send(
      'service_y2nuy9q',
      'template_5q0m2ui',
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        message: formData.value.message,
      },
      'metmHNOtfTwfQIHP3'
    );

    formStatus.value.success = true;
    formData.value = { name: '', email: '', message: '' };
  } catch (error) {
    formStatus.value.error = t('contact.form.error');
  } finally {
    formStatus.value.loading = false;
  }
};
</script>

<template>
  <div class="contact" id="contacto">
    <div class="contact__container">
      <div class="contact__header">
        <h2 class="contact__title">{{ t('contact.title') }}</h2>
        <p class="contact__subtitle">{{ t('contact.subtitle') }}</p>
      </div>

      <div class="contact__content">
        <!-- Contact Info -->
        <div class="contact__info">
          <div class="contact__info-item">
            <div class="contact__icon-wrapper">
              <i class="fas fa-envelope"></i>
            </div>
            <div>
              <h3>{{ t('contact.email') }}</h3>
              <a href="mailto:Brayangamboa620@gmail.com" class="contact__link">
                Brayangamboa620@gmail.com
              </a>
            </div>
          </div>



          <div class="contact__info-item">
            <div class="contact__icon-wrapper">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3>{{ t('contact.location') }}</h3>
              <span class="contact__text">{{ t('contact.locationText') }}</span>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact__form-wrapper">
          <form @submit.prevent="sendEmail" class="contact__form">
            <div class="form-group">
              <label for="name" class="form-label">{{ t('contact.form.name') }}</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                class="form-input"
                :placeholder="t('contact.form.namePlaceholder')"
                required
              />
            </div>

            <div class="form-group">
              <label for="email" class="form-label">{{ t('contact.form.email') }}</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                class="form-input"
                :placeholder="t('contact.form.emailPlaceholder')"
                required
              />
            </div>

            <div class="form-group">
              <label for="message" class="form-label">{{ t('contact.form.message') }}</label>
              <textarea
                id="message"
                v-model="formData.message"
                class="form-textarea"
                :placeholder="t('contact.form.messagePlaceholder')"
                rows="5"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              class="btn btn-primary form-submit"
              :disabled="formStatus.loading"
            >
              <span v-if="!formStatus.loading">
                <i class="fas fa-paper-plane"></i>
                {{ t('contact.form.submit') }}
              </span>
              <span v-else class="loading-spinner">
                <i class="fas fa-circle-notch fa-spin"></i>
                {{ t('contact.form.sending') }}
              </span>
            </button>

            <div v-if="formStatus.success" class="alert alert-success">
              <i class="fas fa-check-circle"></i>
              {{ t('contact.form.success') }}
            </div>

            <div v-if="formStatus.error" class="alert alert-error">
              <i class="fas fa-exclamation-circle"></i>
              {{ formStatus.error }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding: var(--space-20) 0;
  background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
}

.contact__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.contact__header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.contact__title {
  font-size: var(--text-4xl);
  font-weight: var(--font-extrabold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
  position: relative;
  display: inline-block;
}

.contact__title::after {
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

.contact__subtitle {
  color: var(--text-secondary);
  font-size: var(--text-lg);
  margin-top: var(--space-6);
}

.contact__content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--space-12);
}

/* Contact Info */
.contact__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.contact__info-item {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-primary);
  transition: all var(--transition-base);
}

.contact__info-item:hover {
  transform: translateX(8px);
  border-color: var(--color-primary-500);
  box-shadow: var(--shadow-lg);
}

.contact__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  min-width: 56px;
  background: linear-gradient(135deg, var(--color-primary-600), var(--color-accent-500));
  border-radius: var(--radius-lg);
  font-size: var(--text-2xl);
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.contact__info-item h3 {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--text-tertiary);
  margin-bottom: var(--space-1);
}

.contact__link {
  color: var(--text-primary);
  font-weight: var(--font-medium);
  transition: color var(--transition-base);
}

.contact__link:hover {
  color: var(--color-primary-400);
}

.contact__text {
  color: var(--text-secondary);
}

/* Form */
.contact__form-wrapper {
  background: var(--bg-secondary);
  padding: var(--space-8);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-lg);
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-label {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  color: var(--text-primary);
  font-size: var(--text-base);
  font-family: var(--font-primary);
  transition: all var(--transition-base);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-tertiary);
}

.form-submit {
  width: 100%;
  margin-top: var(--space-2);
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading-spinner {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* Alerts */
.alert {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}

.alert-success {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--color-success);
}

.alert-error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: var(--color-error);
}

@media (max-width: 1024px) {
  .contact__content {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}

@media (max-width: 768px) {
  .contact {
    padding: var(--space-16) 0;
  }
  
  .contact__header {
    margin-bottom: var(--space-12);
  }
  
  .contact__form-wrapper {
    padding: var(--space-6);
  }
}

@media (max-width: 390px) {
  .contact__container {
    padding: 0 var(--space-4);
  }
  
  .contact__form-wrapper {
    padding: var(--space-5);
  }
  
  .contact__info-item {
    padding: var(--space-4);
  }
  
  .contact__icon-wrapper {
    width: 48px;
    height: 48px;
    min-width: 48px;
    font-size: var(--text-xl);
  }
}
</style>