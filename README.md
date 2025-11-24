# Portafolio Personal - Brayan Gamboa Delgado

Portafolio profesional desarrollado con Vue 3 y Vite, diseñado para mostrar mis proyectos, habilidades y experiencia como desarrollador Front-end.

![Portfolio Preview](./public/images/preview.png)

## 🚀 Demo en Vivo

[Ver Portafolio](https://brayangamboa.netlify.app) _(Actualizar con tu URL de deploy)_

## ✨ Características

- 🎨 Diseño moderno y profesional
- 📱 Totalmente responsive (Mobile, Tablet, Desktop)
- ⚡ Optimizado para rendimiento
- 🎭 Animaciones suaves y atractivas
- 🌙 Sistema de diseño con variables CSS
- 💌 Formulario de contacto funcional con EmailJS
- 🔍 Optimizado para SEO
- ♿ Accesible (WCAG 2.1)

## 🛠️ Tecnologías Utilizadas

- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Estilos:** CSS3 + Tailwind CSS 4
- **Iconos:** Font Awesome 6
- **Fuentes:** Google Fonts (Inter)
- **Formularios:** EmailJS
- **Deploy:** Netlify / Vercel

## 📦 Instalación y Uso

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/GamboaBrayan/portafolio.git

# Navegar al directorio
cd portafolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Lint del código
npm run lint
```

## 📁 Estructura del Proyecto

```
portafolio/
├── public/
│   ├── cv/              # CV en PDF
│   └── images/          # Im ágenes del portafolio
├── src/
│   ├── assets/          # Assets del proyecto
│   ├── components/      # Componentes Vue
│   │   ├── Navbar.vue
│   │   ├── Home.vue
│   │   ├── Proyectos.vue
│   │   ├── Habilidades.vue
│   │   ├── Contacto.vue
│   │   ├── Footer.vue
│   │   └── ScrollToTop.vue
│   ├── styles/          # Estilos globales
│   │   ├── variables.css
│   │   └── global.css
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Sistema de Diseño

El portafolio utiliza un sistema de diseño basado en CSS variables para mantener consistencia:

- **Colores:** Paleta profesional con azules y cyans
- **Tipografía:** Escala modular con Inter
- **Espaciado:** Sistema de spacing consistente
- **Sombras:** Elevaciones predefinidas
- **Transiciones:** Timings estandarizados

## 📧 Configurar EmailJS

Para que el formulario de contacto funcione:

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar un servicio de email
3. Crear una plantilla de email
4. Actualizar las credenciales en `src/components/Contacto.vue`:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Tu Service ID
  'YOUR_TEMPLATE_ID',   // Tu Template ID
  {...},
  'YOUR_USER_ID'        // Tu User ID
);
```

## 🚀 Deploy

### Netlify

1. Conectar repositorio de GitHub
2. Configurar build:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📈 Optimizaciones

- ✅ Lazy loading de imágenes
- ✅ Code splitting
- ✅ Compresión de assets
- ✅ Meta tags para SEO
- ✅ Open Graph para redes sociales
- ✅ Smooth scroll
- ✅ Lighthouse score > 90

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Brayan Gamboa Delgado**

- GitHub: [@GamboaBrayan](https://github.com/GamboaBrayan)
- LinkedIn: [Brayan Gamboa](https://www.linkedin.com/in/brayan-gamboa-delgado/)
- Email: Brayangamboa620@gmail.com

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!
