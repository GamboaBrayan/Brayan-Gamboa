import { ref, computed } from 'vue';

const currentLanguage = ref('es');

const translations = {
    es: {
        navbar: {
            about: 'Sobre mí',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto',
            cv: 'CV'
        },
        skills: {
            title: 'Habilidades y Competencias',
            subtitle: 'Tecnologías y soft skills que domino',
            technical: 'Habilidades Técnicas',
            soft: 'Habilidades Blandas',
            softSkills: [
                "Empatía",
                "Trabajo en Equipo",
                "Comunicación Efectiva",
                "Aprendizaje Continuo",
                "Escucha Activa",
                "Adaptabilidad",
                "Responsabilidad"
            ]
        },
        home: {
            greeting: 'Hola, soy',
            role: 'Desarrollador Front-end',
            description: 'Estudiante de Ingeniería de Software especializado en crear experiencias web modernas y funcionales con Vue.js, JavaScript y tecnologías front-end actuales.',
            contactBtn: 'Contáctame'
        },
        projects: {
            title: 'Proyectos Destacados',
            subtitle: 'Algunos de los trabajos que he realizado',
            demo: 'Demo',
            code: 'Código',
            items: [
                {
                    nombre: "SkillLedger",
                    descripcion: "Plataforma web que digitaliza el reconocimiento laboral usando blockchain y gamificación para motivar y retener talento.",
                    tecnologias: ["Vue.js", "Blockchain", "Gamificación", "Web3"]
                },
                {
                    nombre: "Vitality",
                    descripcion: "Landing Page de un Start up de la universidad sobre recetas saludables.",
                    tecnologias: ["HTML", "CSS", "JavaScript", "Responsive"]
                },
                {
                    nombre: "InfoNow",
                    descripcion: "Aplicación web para consultar las últimas noticias según tus intereses.",
                    tecnologias: ["Vue.js", "API REST", "CSS3"]
                }
            ]
        },
        contact: {
            title: 'Contáctame',
            subtitle: '¿Tienes un proyecto en mente? Hablemos',
            email: 'Email',
            location: 'Ubicación',
            locationText: 'Lima, Perú',
            form: {
                name: 'Nombre',
                namePlaceholder: 'Tu nombre',
                email: 'Email',
                emailPlaceholder: 'correo@ejemplo.com',
                message: 'Mensaje',
                messagePlaceholder: 'Cuéntame sobre tu idea...',
                submit: 'Enviar Mensaje',
                sending: 'Enviando...',
                success: '¡Mensaje enviado correctamente! Te responderé pronto.',
                error: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.',
                validation: 'Por favor completa todos los campos'
            }
        }
    },
    en: {
        navbar: {
            about: 'About Me',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
            cv: 'CV'
        },
        skills: {
            title: 'Skills & Competencies',
            subtitle: 'Technologies and soft skills I master',
            technical: 'Technical Skills',
            soft: 'Soft Skills',
            softSkills: [
                "Empathy",
                "Teamwork",
                "Effective Communication",
                "Continuous Learning",
                "Active Listening",
                "Adaptability",
                "Responsibility"
            ]
        },
        home: {
            greeting: 'Hi, I am',
            role: 'Front-end Developer',
            description: 'Software Engineering student specializing in creating modern and functional web experiences with Vue.js, JavaScript, and current front-end technologies.',
            contactBtn: 'Contact Me'
        },
        projects: {
            title: 'Featured Projects',
            subtitle: 'Some of the work I have done',
            demo: 'Demo',
            code: 'Code',
            items: [
                {
                    nombre: "SkillLedger",
                    descripcion: "Web platform that digitalizes labor recognition using blockchain and gamification to motivate and retain talent.",
                    tecnologias: ["Vue.js", "Blockchain", "Gamification", "Web3"]
                },
                {
                    nombre: "Vitality",
                    descripcion: "Landing Page for a university startup about healthy recipes.",
                    tecnologias: ["HTML", "CSS", "JavaScript", "Responsive"]
                },
                {
                    nombre: "InfoNow",
                    descripcion: "Web application to consult the latest news according to your interests.",
                    tecnologias: ["Vue.js", "REST API", "CSS3"]
                }
            ]
        },
        contact: {
            title: 'Contact Me',
            subtitle: 'Have a project in mind? Let\'s talk',
            email: 'Email',
            location: 'Location',
            locationText: 'Lima, Peru',
            form: {
                name: 'Name',
                namePlaceholder: 'Your name',
                email: 'Email',
                emailPlaceholder: 'email@example.com',
                message: 'Message',
                messagePlaceholder: 'Tell me about your idea...',
                submit: 'Send Message',
                sending: 'Sending...',
                success: 'Message sent successfully! I will reply soon.',
                error: 'There was an error sending the message. Please try again.',
                validation: 'Please complete all fields'
            }
        }
    }
};

export function useLanguage() {
    const toggleLanguage = () => {
        currentLanguage.value = currentLanguage.value === 'es' ? 'en' : 'es';
    };

    const t = (path) => {
        const keys = path.split('.');
        let value = translations[currentLanguage.value];
        for (const key of keys) {
            if (value && value[key]) {
                value = value[key];
            } else {
                return path;
            }
        }
        return value;
    };

    return {
        currentLanguage,
        toggleLanguage,
        t
    };
}
