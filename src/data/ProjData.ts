import CapstoneUrl from "../assets/capstone-proj-screenshot.jpg";
import EMEUrl from "../assets/eme-website-screenshot.jpg";
import PortfolioUrl from "../assets/portfolio-screenshot.jpg";
import ATSUrl from "../assets/ats-website-screenshot.jpg";
import { v4 as uuidv4 } from "uuid"

const ProjData = [
  {
    id: uuidv4(),
    projId: "atsproj",
    title: "Dobson Partners",
    description:
      "",
    techStack: [
      "Remix",
      "TypeScript",
      "Tailwind CSS",
      "Vitest",
      "GitLab",
      "Prisma",
      "PostgreSQL",
      "Postman API",
      "Figma"
    ],
    year: "2023",
    endYear: "2024",
    imageURL: ATSUrl,
    projURL: "https://freetypingcamp.com/",
    projCSS: "project",
    projLink: "/projects/AllTrackSystem",
    features: [
      "Developed a responsive website using mobile – first design, implementing best practices for SEO and accessibility, and optimizing load speeds for an excellent user experience. ",
      "Implemented BEM methodology and utilized SASS to write maintainable, efficient, and well-structured HTML, CSS, and JavaScript code.",
      "Managed the codebase with GitHub for version control and collaborated with the client throughout the coding process to create custom designs and fluid CSS animations that exceeded their expectations.",
    ],
    challenges:
      "These are the challenges that I faced with this project and how I handled them.",
  },
  {
    id: uuidv4(),
    projId: "atsproj",
    title: "Free Typing Camp",
    description:
      "",
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
    projLink: "/projects/AllTrackSystem",
    features: [
      "Developed a responsive website using mobile – first design, implementing best practices for SEO and accessibility, and optimizing load speeds for an excellent user experience. ",
      "Implemented BEM methodology and utilized SASS to write maintainable, efficient, and well-structured HTML, CSS, and JavaScript code.",
      "Managed the codebase with GitHub for version control and collaborated with the client throughout the coding process to create custom designs and fluid CSS animations that exceeded their expectations.",
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
    year: "2023",
    imageURL: ATSUrl,
    projURL: "https://alltracksystem.com/",
    projCSS: "project",
    projLink: "/projects/AllTrackSystem",
    features: [
      "Developed a responsive website using mobile – first design, implementing best practices for SEO and accessibility, and optimizing load speeds for an excellent user experience. ",
      "Implemented BEM methodology and utilized SASS to write maintainable, efficient, and well-structured HTML, CSS, and JavaScript code.",
      "Managed the codebase with GitHub for version control and collaborated with the client throughout the coding process to create custom designs and fluid CSS animations that exceeded their expectations.",
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
    projLink: "/projects/Portfolio",
    features: [
      "Built a mobile-responsive website using React to showcase professional portfolio.",
      "Developed comprehensive project overviews, seamless navigation, and a contact form.",
      "Provided easy access to current resume and relevant details for potential employers.",
      "Highlighted professional skills, accomplishments, and expertise.",
    ],
    problems: "",
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
    year: "2022",
    imageURL: EMEUrl,
    projURL: "https://www.emegroup.ca/",
    projLink: "/projects/EMEGroupInc",
    projCSS: "project",
    features: [
      "Created user-friendly websites with mobile-responsive design using HTML, CSS, JavaScript, SASS, GitHub, and Google Maps API, optimizing the user experience for various devices and screens.",
      "Spearheaded a website redesign in 2022, with custom design changes, enhanced functionality, and implementation of a contact form and interactive map, resulting in improved client satisfaction.",
      "Launched a successful website for client’s initial online presence, resulting in a 35% increase in customer inquiries and engagement.",
    ],
    problems: "",
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
      "https://drive.google.com/drive/folders/1AED_R-qRjy0SQBUPIFM95U8ib7Yal2pR?usp=sharing",
    projCSS: "project-reverse",
    projLink: "/projects/Capstone",
    projProposal: "",
    features: [
      "Programmed an Arduino-based Arc Fault detection system that updates a database and sends real-time safety notifications to a mobile app, which successfully demonstrated the concept of our project idea.",
      "Managed a team of three students utilizing GitHub for efficient collaboration and version control.",
    ],
    problems: "",
  },
];

export default ProjData;
