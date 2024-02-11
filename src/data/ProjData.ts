import CapstoneUrl from "../assets/capstone-proj-screenshot.jpg";
import EMEUrl from "../assets/eme-website-screenshot.jpg";
import PortfolioUrl from "../assets/portfolio-screenshot.jpg";
import ATSUrl from "../assets/ats-website-screenshot.jpg";
import { v4 as uuidv4 } from "uuid"

const ProjData = [
  {
    id: uuidv4(),
    projId: "true10proj",
    title: "Dobson Partners",
    description:
      "This full-stack web application by Dobson Partners offers valuable Real Estate services for Landlords, Tenants, and Realtors.",
    techStack: [
      "Remix",
      "TypeScript",
      "Tailwind CSS",
      "Vitest",
      "GitLab",
      "Prisma ORM",
      "PostgreSQL",
      "Postman API",
      "Figma"
    ],
    year: "2023",
    endYear: "2024",
    imageURL: ATSUrl,
    projURL: "https://true10.ca",
    projCSS: "project",
    projLink: "/projects/dobsonpartners",
    features: [
      "Built a full-stack web application from the ground up using Remix, TypeScript, and Tailwind CSS, aligning closely with Figma wireframes to offer valuable Real Estate services for Landlords, Tenants, and Realtors.",
      "Maintained open communication, provided progress updates via Slack and Zoom, ensured consistent commits to GitLab, and proactively addressed challenges to meet project deadlines.",
      "Implemented back-end functionality by writing server-side code and integrating Prisma ORM for safe and efficient read and write operations to a PostgreSQL database.",
      "Seamlessly integrated RESTful API endpoints from Cloudinary for media management and Stripe for user payments, performing API testing using Postman to improve functionality and reliability.",
      "Handled user authentication using Session Storage, social media authentication using the OAuth2 Framework, and wrote unit and integration tests for all components using Vitest to ensure robust security and reliable functionality.",
    ],
    challenges:
      "These are the challenges that I faced with this project and how I handled them.",
  },
  {
    id: uuidv4(),
    projId: "ftcproj",
    title: "Free Typing Camp",
    description:
      "Free Typing Camp is a full-stack web application that offers an accessible typing program for all users. Craft your ideal space & bring it to life by unlocking vibrant illustrations to customize the site according to your preferences. Accumulate points, monitor your progress, & gamify your learning experience with a wide array of unlockables by creating a free account.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node",
      "Express",
      "PostgreSQL",
      "GitHub",
      "Vitest",
      "Cloudflare",
      "Postman API",
      "Digital Ocean",
      "Photoshop",
      "Adobe Firefly",
      "Chat GPT 4",
      "Google Analytics",
    ],
    year: "2023",
    endYear: "2024",
    imageURL: ATSUrl,
    projURL: "https://freetypingcamp.com/",
    projCSS: "project-reverse",
    projLink: "/projects/freetypingcamp",
    projGitHubURL: "https://github.com/suhas-sunder/typing-test-app",
    features: [
      "Built an interactive, user-friendly full-stack web application using React, TypeScript, Tailwind CSS, PostgreSQL, Node, and Express, enabling users to improve typing skills through an interactive, gamified learning experience.",
      "Hosted the web application on Digital Ocean, tracked user engagement through Google Analytics, and optimized security, performance, and reliability using Cloudflare, including SSL implementation and R2 API for file storage.",
      "Implemented secure login/authentication with JSON Web Token, configured CORS and other essential back-end middleware, and conducted comprehensive unit and integration testing using Vitest for back-end security.",
      "Utilized Adobe Firefly AI and Chat GPT to programmatically generate image and JSON text content for the website.",
    ],
    challenges:
      "These are the challenges that I faced with this project and how I handled them.",
  },
  {
    id: uuidv4(),
    projId: "portfolio",
    title: "React Portfolio",
    description:
      "My personal portfolio website highlights my professional skills, accomplishments, and other relevant details, making it easy for potential employers to review. With easy access to my current resume, project details, links for seamless navigation, and a contact form, this portfolio presents a comprehensive overview of my work. Explore my portfolio to gain insights into my expertise and get in touch for exciting opportunities.",
    techStack: [
      "HTML5",
      "CSS3",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "GitHub",
      "Fetch API",
      "Responsive Design",
      "Netlify Hosting",
    ],
    year: "2023",
    endYear: "2024",
    imageURL: PortfolioUrl,
    projURL: "http://suhassunder.com/",
    projGitHubURL: "https://github.com/suhas-sunder/react-portfolio-proj",
    projCSS: "project-reverse",
    projLink: "/projects/reactportfolio",
    features: [
      "Tested, built, and maintained a mobile-responsive website using React, TypeScript, Tailwind CSS, Jest, and React Testing Library, to effectively highlight my personal and professional accomplishments as a software developer.",
    ],
    challenges:
      "These are the challenges that I faced with this project and how I handled them.",
  },
  {
    id: uuidv4(),
    projId: "atsproj",
    title: "All Track System",
    description:
      "The All Track System (ATS) official website offers detailed information about the ATS facilities management software built for Landlords and Contractors. Discover the powerful functionalities offered by the ATS software and mobile app, including a visual showcase of all features, as well as important information regarding the onboarding process for clients. ",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SASS",
      "GitHub",
      "AWS S3",
      "BEM Methodology",
      "Responsive Design",
      "Mobile-first",
    ],
    year: "2021",
    endYear: "2023",
    imageURL: ATSUrl,
    projURL: "https://alltracksystem.com/",
    projCSS: "project",
    projLink: "/projects/alltracksystem",
    features: [
      "Collaborated with designers and back-end team to refactor web application codebase, utilizing RESTful API endpoints, React, TypeScript, CSS modules and Tailwind CSS to create an improved UX, design, and functionality.",
      "Developed a responsive client-facing website using mobile-first design, ensuring code integrity and cooperative development through GitHub, delivering an excellent user experience.",
      "Applied BEM methodology to write maintainable HTML, CSS, JavaScript, and SASS code, crafting custom interactive designs that consistently exceeded client expectations.",
      "Conducted automated testing using Jest and React Testing Library, while implementing best practices for SEO, accessibility, and web safety to optimize performance, reliability, and search engine visibility.",
      "Crafted research-driven strategies to plan, present, and orchestrate large-scale software and app development, bolstering critical thinking skills and contributing to the successful launch of the startup.",
      "Engineered streamlined design solutions for intricate challenges, fostering engagement with partners, investors, and developers, which, in turn, contributed to the enhancement of my communication and teamwork proficiencies.",
    ],
    challenges:
      "These are the challenges that I faced with this project and how I handled them.",
  },
  {
    id: uuidv4(),
    projId: "emeproj",
    title: "EME Group Inc.",
    description:
      "The EME Group Inc. website provides clients with a clear understanding of the end-to-end consulting journey, detailed information about services offered, and a showcase of client projects categorized by industry. Additionally, the website features a comprehensive careers page that outlines available positions and their respective requirements. The contact page facilitates seamless communication through a contact form and an interactive map for easy navigation.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SASS",
      "GitHub",
      "A2 Hosting",
      "Google Maps API",
      "Responsive Design",
    ],
    year: "2021",
    endYear: "2022",
    imageURL: EMEUrl,
    projURL: "https://www.emegroup.ca/",
    projLink: "/projects/emegroupinc.",
    projCSS: "project",
    features: [
      "Created user-friendly websites with mobile-responsive design using HTML, CSS, JavaScript, SASS, GitHub, and Google Maps API, meeting all client requirements for an outstanding user experience.",
      "Launched a successful website for client’s initial online presence, expanding reach through effective SEO, accessibility, and content optimization, which resulted in over 35% increase in customer inquiries and engagement.",
      "Managed domain, hosting, and site maintenance, ensuring uninterrupted user access and UX for nearly three years.",
    ],
    challenges:
      "These are the challenges that I faced with this project and how I handled them.",
  },

  {
    id: uuidv4(),
    projId: "capstone",
    title: "Capstone SPArcDS",
    description:
      "SPArcDS is a prototype Arc Fault detection system designed to enhance home safety. When an Arc Fault is detected, SPArcDS promptly notifies the user through the SPArcDS mobile app and sends an SMS notification to all registered phone numbers. All notifications and relevant data are securely logged to a database for future reference. The SPArcDS mobile app enables users to wirelessly register new devices and view an activity log that provides detailed status updates for all registered SPArcDS devices.",
    techStack: [
      "Mobile App Development",
      "Arduino Programming",
      "GitHub",
      "MySQL",
      "Meeting Minutes",
      "Waterfall Management",
      "Corona SDK",
    ],
    year: "2019",
    imageURL: CapstoneUrl,
    projURL:
      "https://drive.google.com/file/d/1z6dohrhC-abm8A4o263mVjtBYkoRyOlJ/view?usp=sharing",
    projCSS: "project-reverse",
    projLink: "/projects/capstonesparcds",
    projProposal: "",
    features: [
      "Led a team of three students for capstone, utilizing GitHub for a collaborative and successful project outcome.",
      "Programmed an Arduino Arc Fault detection system and mobile app utilizing MySQL for real-time notifications.",
    ],
    challenges:
      "These are the challenges that I faced with this project and how I handled them.",
  },
];

export default ProjData;
