const portfolioData = {
    name: "Krishna Kumar S",
    role: "Software Engineer",
    specialization: "Flutter Developer",
    experience: "3+ Years",

    header: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        {
            label: "Get in touch",
            href: "#contact",
            className: "nav-cta"
        }
    ],

    heroDescription: `
        I build cross-platform mobile applications using
        <strong>Flutter and Dart</strong>, focusing on
        <strong>clean architecture, performance, security</strong>,
        and reliable integrations.
    `,

    stats: [
        {
            count: 3,
            suffix: "+",
            label: "Years exp."
        },
        {
            count: 15,
            suffix: "",
            label: "Apps shipped"
        },
        {
            count: 1,
            suffix: "L+",
            label: "Downloads"
        },
        {
            count: 20,
            suffix: "+",
            label: "Projects"
        }
    ],

    about: {
        eyebrow: "About me",
        title: 'Engineering mobile applications that <span class="grad">solve real-world problems</span>',

        paragraphs: [
            `I'm a Flutter developer with <strong>3+ years of professional experience</strong> building and maintaining cross-platform mobile applications. I've worked across government, healthcare, e-commerce, logistics, and service-based domains, focusing on application architecture, performance, security, and reliable API integrations.`,

            `I enjoy building maintainable applications using <strong>Flutter, Dart, Clean Architecture, and SOLID principles</strong>, with state management solutions such as GetX, BLoC, and Provider. My experience includes REST API integration, performance optimization, testing, and production releases.`,

            `Currently, I'm working on government healthcare projects at the <strong>National Informatics Centre (NIC), Chennai</strong>, contributing to the Thaimai application and its integration with the PICME ecosystem. My work includes improving application architecture, implementing security measures, integrating native Android capabilities such as Bluetooth and FaceRD, and strengthening testing and CI/CD workflows.`
        ],

        highlights: [
            {
                icon: "🏛️",
                title: "Government-scale impact",
                description: "Contributing to healthcare applications and digital services through NIC."
            },
            {
                icon: "🧩",
                title: "Mobile architecture",
                description: "Building maintainable Flutter applications using Clean Architecture, SOLID, and robust state management."
            },
            {
                icon: "👥",
                title: "Mentorship & collaboration",
                description: "Trained junior Flutter developers and contributed to improving code quality and development practices."
            }
        ],

        contact: {
            title: "Let's build something",
            description: "Open to Flutter engineering opportunities and challenging product roles.",
            email: "krish.techx@gmail.com",
            phone: "+91 7639325302",
            linkedin: "linkedin.com/in/krish-techx",
            github: "github.com/krish-techx"
        }
    },
};