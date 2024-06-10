import { meta, free, hsenid,bluechip } from "../assets/images";
import {
    susara,
    chat,
    contact,
    unity,
    css,
    git,
    github,
    azure,
    html,
    javascript,
    knockout,
    linkedin,
    sqlServer,
    mysql,
    reddy,
    react,
    threejs,
    dotnet,
    tailwindcss,
    sign,
    crystal,
    illustrator
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: azure,
        name: "Azure",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: knockout,
        name: "knockout",
        type: "Frontend",
    },
    {
        imageUrl: sqlServer,
        name: "SQLServer",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "mysql",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "threejs",
        type: "Frontend",
    },
    {
        imageUrl: dotnet,
        name: "dotnet",
        type: "Framework",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: crystal,
        name: "crystal",
        type: "ReportTool",
    },
    {
        imageUrl: illustrator,
        name: "illustrator",
        type: "DesignTool",
    }
];

export const experiences = [
    {
        title: "Game Developer",
        company_name: "Bluechip Technologies Asia",
        icon:bluechip,
        iconBg: "#accbe1",
        date: "Dec 2020 - Jun 2021",
        points: [
            "Acquired comprehensive knowledge in both 3D and 2D game development methodologies.",
            "Effectively utilized scripting for game development, and incorporated animations seamlessly into projects",
            "Developing responsive design and ensuring cross-browser compatibility.",
            "Demonstrated proficiency in version control systems such as Git and Git LFS for effective collaboration and project management.",
        ],
    },
    {
        title: "Game Developer",
        company_name: "Freelancer",
        icon: free,
        iconBg: "#fbc3bc",
        date: "Jun 2021 - Mar 2022",
        points: [
            "Worked on diverse freelance projects, providing software development and game development services.",
            "Delivered high-quality solutions tailored to client specifications within tight deadlines.",
            "Managed client communications and project timelines effectively.",
            
        ],
    },
    {
        title: "Web Developer",
        company_name: "hSenid Business Solutions",
        icon: hsenid,
        iconBg: "#b7e4c7",
        date: "Mar 2022 - Jan 2023",
        points: [
            "Developed and implemented projects to adapt the system for specific country requirements, ensuring compliance and relevance to local needs. ",
            "Created customized user interfaces using .NET MVC for specific functionalities.",
            "Collaborated with cross-functional teams to enhance product features.",
            "Shared knowledge with team members regarding localization projects.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "hSenid Business Solutions",
        icon: hsenid,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Led the team to successfully implement custom features tailored for localization projects",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Created design solutions for newly introduced features, ensuring development did not affect existing features",
            "Used Azure DevOps for effective version control, and ensuring seamless code management and integration",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: reddy,
        theme: 'btn-back-red',
        name: 'Reddy’s Adventure',
        description: ' Developed a 2D platformer game where the player collects coins and embarks on an adventure. ',
        link: 'https://github.com/Dhananjana94/Reddy-s-Adventure',
    },
    {
        iconUrl: sign,
        theme: 'btn-back-green',
        name: 'Sign Language Translator',
        description: 'Developed a sign language converter that translates sign language into natural language (English) and vice versa. ',
        link: 'https://github.com/Dhananjana94/reseach_language_translator',
    },
    {
        iconUrl: susara,
        theme: 'btn-back-blue',
        name: 'Susara e - commerce website',
        description: 'e-commerce  Website for Online Shopping (Music Instrument) and also with virtual learning environment.',
        link: 'https://github.com/Dhananjana94/susara',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-pink',
        name: 'Chat simulator',
        description: 'this application give real world experience for player to understand how to dealing with custom service.',
        link: 'https://github.com/Dhananjana94/Chat_simulator',
    },
   
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];