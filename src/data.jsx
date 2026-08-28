import { SiArcgis, SiBootstrap, SiCss, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiRapid, SiReact, SiReactrouter, SiRedux, SiTailwindcss, SiWordpress } from "react-icons/si"

const about = {
    first_name: "Saif",
    last_name: "ur Rehman",
    email: "saifurrehman7482@gmail.com",
    role: "Front-end Developer"
}

const skills = [
    {
        name: "HTML",
        icon: <SiHtml5 />
    },
    {
        name: "CSS",
        icon: <SiCss />
    },
    {
        name: "JavaScript",
        icon: <SiJavascript />
    },
    {
        name: "BootStrap",
        icon: <SiBootstrap />
    },
    {
        name: "TailwindCSS",
        icon: <SiTailwindcss />
    },
    {
        name: "Git/Github",
        icon: <SiGithub />
    },
    {
        name: "React.js",
        icon: <SiReact />
    },
    {
        name: "React Redux",
        icon: <SiRedux />
    },
    {
        name: "RestAPI",
        icon: <SiRapid />
    },
    {
        name: "React Routers",
        icon: <SiReactrouter />
    },
    {
        name: "Firebase",
        icon: <SiFirebase />
    },
    {
        name: "Wordpress",
        icon: <SiWordpress />
    },
    {
        name: "ArcGIS",
        icon: <SiArcgis />
    }
]

const education = [
    {
        institute: "Al-Khalil Model School",
        degree: "Matriculation in Biology",
        year: "March' 2024",
        score: "A+"
    },
    {
        institute: "Govt. Degree science and commerce College Malir at Saudabad ",
        degree: "HSC in Pre-engineering",
        year: "aug' 2026",
        score: "A"
    },
    {
        institute: "Dawood University of Engineering and Technology",
        degree: "BE in Computer system engineering",
        year: "ongoing",
        score: "N/A"
    }
]

const projects = [
    {
        name: "Student Management System (SMS)",
        features: [
            "Firebase Backend: Real-time Firestore database, Firebase Authentication, and secure rule enforcement.",
            "Role-Based Portals: Dedicated, secure dashboards for Admin, Teacher, and Student workflows.",
            "Global State: Synchronized app via Redux toolkit with editable features."
        ],
        remaining: [
            "Student dashboard doesn't involve any interactable feature.",
            "Email verification system.",
            "Add new users logic.",
        ],
        technologies: ["ReactJS","TailwindCSS","Redux","Firebase","Git/Githib","Netlify", "VS Code"],
        date_started: new Date(2025, 10),
        date_ended: null,
        expected_end: new Date(2026, 11),
        status: "Live"
    },
        {
        name: "Weather Application",
        features: [
            "Provides Realtime weather details of current location.",
            "Provides a Realtime Map view of weather conditons.",
            "Provides diffrent units of measurments."
        ],
        remaining: [
            "Integration with a paid API to display better results.",
            "UI fixes and responsiveness required.",
            "Forecast API is required for the Forecast page."
        ],
        technologies: ["ReactJS","CSS","TailwindCSS","Redux","Git/Githib","Netlify", "VS Code"],
        date_started: new Date(2026, 2),
        date_ended: null,
        expected_end: new Date(2027, 12),
        status: "Offline"
    }
]


export { about, skills, education, projects }