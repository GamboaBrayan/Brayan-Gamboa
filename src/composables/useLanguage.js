import { ref } from 'vue';

const currentLanguage = ref('es');

const translations = {
    es: {
        navbar: {
            about: 'Sobre mí',
            projects: 'Proyectos',
            experience: 'Mi Trayectoria',
            skills: 'Habilidades',
            contact: 'Contacto',
            cv: 'CV'
        },
        skills: {
            title: 'Habilidades',
            subtitle: 'Tecnologías y competencias que manejo',
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
            contactBtn: 'Contáctame',
            projectsBtn: 'Ver Proyectos'
        },
        projects: {
            title: 'Proyectos',
            subtitle: 'Algunos de los trabajos que he realizado',
            code: 'Ver en GitHub',
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
                },
                {
                    nombre: "Ross & Flor",
                    descripcion: "Sistema web para una librería que permite a los trabajadores gestionar ventas, emitir boletas y controlar el stock de productos.",
                    tecnologias: ["Vue.js", "JavaScript", "CSS3", "Git"]
                }
            ]
        },
        experience: {
            title: 'Mi Trayectoria',
            subtitle: 'Mi trayectoria profesional',
            educationTitle: 'Educación',
            current: 'Actual',
            items: [
                {
                    role: "Desarrollador Full Stack",
                    company: "R.P Decort Art",
                    period: "DIC 2025 - ENE 2026",
                    current: false,
                    description: "Desarrollo de una plataforma web para la empresa R.P Decort Art, con el objetivo de agilizar el proceso de cotización y venta de productos.",
                    technologies: ["Vue.js", "JavaScript", "CSS3", "Figma", "Git"]
                },
                {
                    role: "Desarrollador Web",
                    company: "IFurniture",
                    period: "FEB 2026 - APR 2026",
                    current: false,
                    description: "Desarrollo y mantenimiento de la plataforma oficial como del ecommerce de la empresa. Implementando mejoras continuas para mejorar la experiencia del usuario.",
                    technologies: ["PHP", "Laravel", "JavaScript", "CSS3", "GitLab", "Git"]
                },
                {
                    role: "QA Trainee",
                    company: "ManduHR",
                    period: "MAY 2026 - Actualidad",
                    current: false,
                    description: "Ejecución de pruebas funcionales y de regresión en la plataforma web, diseño de casos de prueba y reporte detallado de incidencias para asegurar la calidad del producto.",
                    technologies: ["QA Testing", "Pruebas Funcionales", "Jira", "Postman", "Git"]
                }
            ],
            education: [
                {
                    degree: "Ingeniería de Software",
                    institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
                    period: "2021 - Actualidad",
                    current: true,
                    description: "Cursando la carrera con enfoque en desarrollo web, arquitectura de software y metodologías ágiles. Participación en proyectos académicos colaborativos."
                }
            ]
        },
        contact: {
            title: 'Contacto',
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
            experience: 'My Journey',
            skills: 'Skills',
            contact: 'Contact',
            cv: 'CV'
        },
        skills: {
            title: 'Skills',
            subtitle: 'Technologies and competencies I work with',
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
            contactBtn: 'Contact Me',
            projectsBtn: 'View Projects'
        },
        projects: {
            title: 'Projects',
            subtitle: 'Some of the work I have done',
            code: 'View on GitHub',
            items: [
                {
                    nombre: "SkillLedger",
                    descripcion: "Web platform that digitalizes labor recognition using blockchain and gamification to motivate and retain talent.",
                    tecnologias: ["Vue.js", "Blockchain", "Gamification", "Web3"]
                },
                {
                    nombre: "Vitality",
                    descripcion: "Landing page for a university startup about healthy recipes.",
                    tecnologias: ["HTML", "CSS", "JavaScript", "Responsive"]
                },
                {
                    nombre: "InfoNow",
                    descripcion: "Web application to consult the latest news according to your interests.",
                    tecnologias: ["Vue.js", "REST API", "CSS3"]
                },
                {
                    nombre: "Ross & Flor",
                    descripcion: "Web system for a bookstore that allows employees to manage sales, issue receipts and control product stock.",
                    tecnologias: ["Vue.js", "JavaScript", "CSS3", "Git"]
                }
            ]
        },
        experience: {
            title: 'My Journey',
            subtitle: 'My professional journey',
            educationTitle: 'Education',
            current: 'Current',
            items: [
                {
                    role: "Full Stack Developer",
                    company: "R.P Decort Art",
                    period: "DEC 2025 - JAN 2026",
                    current: false,
                    description: "Development of a web platform for R.P Decort Art, aimed at streamlining the quotation and product sales process.",
                    technologies: ["Vue.js", "JavaScript", "CSS3", "Figma", "Git"]
                },
                {
                    role: "Web Developer",
                    company: "IFurniture",
                    period: "FEB 2026 - APR 2026",
                    current: false,
                    description: "Development and maintenance of the company's official platform and e-commerce site. Implementing continuous improvements to enhance the user experience.",
                    technologies: ["PHP", "Laravel", "JavaScript", "CSS3", "GitLab", "Git"]
                },
                {
                    role: "QA Trainee",
                    company: "ManduHR",
                    period: "MAY 2026 - Present",
                    current: false,
                    description: "Execution of functional and regression testing on the web platform, test case design, and detailed bug reporting to ensure product quality.",
                    technologies: ["QA Testing", "Functional Testing", "Jira", "Postman", "Git"]
                }
            ],
            education: [
                {
                    degree: "Software Engineering",
                    institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
                    period: "2021 - Present",
                    current: true,
                    description: "Studying with a focus on web development, software architecture, and agile methodologies. Participation in collaborative academic projects."
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
            if (value && value[key] !== undefined) {
                value = value[key];
            } else {
                return path;
            }
        }
        return value;
    };

    return { currentLanguage, toggleLanguage, t };
}
