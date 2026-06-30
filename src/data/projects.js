import { images } from '../assets/images'

export const projects = [
    {
        name: "CDR Dashboard",
        description: "I designed both the Frontend analytics dashboard for Call Data Records(CDR) using ReactJs",
        image: images.dashboard,
        tags: ["web_dev"],
        github: "https://github.com/denen37/cdr_admin",
        link: "https://cdr-admin-pied.vercel.app/dashboard",
        skills: ['React.Js', 'Tailwind', 'Shadcn']
    },
    {
        name: "CDR API",
        description: "I designed both the database and API for Call Data Records(CDR) using Django and MongoDb",
        image: images.dashboard,
        tags: ["web_dev"],
        github: "https://github.com/denen37/cdrapi",
        link: "https://cdrapi.onrender.com/",
        skills: ['Python', 'Django', 'MongoDb']
    },
    {
        name: "Personal Portfolio",
        description: "I designed my personal porfolio to showcase my skills and experience using ReactJs",
        image: images.portfolio,
        tags: ["web_dev"],
        github: "https://github.com/denen37/awardenenportfolio",
        link: "https://awardenenportfolio.vercel.app/",
        skills: ['React.Js', 'Tailwind']
    },
    {
        name: "Acepick",
        description: "Acepick is a platform that bridges the gap between clients and professionals. I developed the backend architecture, APIs, and database systems that power user management, job assignments, payments, and real-time platform operations.",
        image: images.project_acepick,
        tags: ["web_dev"],
        github: "https://github.com/denen37/acepick",
        link: "#",
        skills: ['Typescript', 'Node.ts', 'MySQL', 'sequelize']
    },{
        name: "Tastetorial",
        description: "Tastetorial is an online learning platform designed for sharing knowledge through video content. I developed core backend services, including user authentication, content management, creator features, and database architecture.",
        image: images.project_tastetorial,
        tags: ["web_dev"],
        github: "https://github.com/tastetorial/backend",
        link: "#",
        skills: ['Typescript', 'Node.ts', 'MySQL', 'sequelize', 'API integration', 'Azure']
    },{
        name: "Evergrad",
        description: "EveryGrad is a student-focused platform that helps learners access academic opportunities and resources. I contributed to the backend architecture, database design, and deployment processes while leading a team of developers to deliver key platform features.",
        image: null,
        tags: ["web_dev"],
        github: "#",
        link: "#",
        skills: ['Python', 'Django', 'MySQL', 'AWS']
    },{
        name: "Scara Robot Prototype",
        description: "Designed and developed a SCARA robot prototype for automation and robotic manipulation tasks. The project involved mechanical design, kinematic modeling, simulation, and control system implementation to achieve accurate and efficient movement.",
        image: images.project_scara,
        tags: ["robotics", "machine_design"],
        github: "https://github.com/denen37",
        link: "#",
        skills: ['Onshape modelling', 'Machine design', 'Arduino']
    } 
]