import CapstoneUrl from "../assets/capstone-proj-screenshot.jpg";
import EMEUrl from "../assets/eme-website-screenshot.jpg";
import PortfolioUrl from "../assets/portfolio-screenshot.jpg";
import ATSUrl from "../assets/ats-website-screenshot.jpg";

const ProjData = [
  {
    id: 1,
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
      "Mobile-first Approach",
    ],
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
    id: 2,
    projId: "emeproj",
    title: "EME Group Inc.",
    description:
      "The EME Group Inc. website provides clients with a clear understanding of the end-to-end consulting journey, detailed information about services offered, and a showcase of client projects categorized by industry. Additionally, the website features a comprehensive careers page that outlines available positions and their respective requirements. For seamless communication, the contact page offers visitors a convenient contact form and an interactive map.",
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
    imageURL: EMEUrl,
    projURL: "https://www.emegroup.ca/",
    projCSS: "project-reverse",
    projLink: "/projects/EMEGroupInc",
    features: [
      "Created user-friendly websites with mobile-responsive design using HTML, CSS, JavaScript, SASS, GitHub, and Google Maps API, optimizing the user experience for various devices and screens.",
      "Spearheaded a website redesign in 2022, with custom design changes, enhanced functionality, and implementation of a contact form and interactive map, resulting in improved client satisfaction.",
      "Launched a successful website for client’s initial online presence, resulting in a 35% increase in customer inquiries and engagement.",
    ],
    problems: "",
  },
  {
    id: 3,
    projId: "portfolio",
    title: "React Portfolio",
    description:
      "My personal portfolio website highlights my professional skills, accomplishments, and other relevant details to impress potential employers. With easy access to my current resume, detailed project overviews, links for seamless navigation, and a contact form, this portfolio presents a comprehensive overview of my work. Explore my portfolio to gain insights into my expertise and get in touch for exciting opportunities.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "GitHub",
      "Fetch API",
      "Responsive Design",
      "Netlify Hosting",
    ],
    imageURL: PortfolioUrl,
    projURL: "http://suhassunder.com/",
    projGitHubURL: "https://github.com/suhas-sunder/react-portfolio-proj",
    projCSS: "project",
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
    id: 4,
    projId: "capstone",
    title: "Capstone SPArcDS",
    description:
      "SPArcDS is a prototype Arc Fault detection system designed to enhance home safety. When an Arc Fault is detected, SPArcDS promptly notifies the user through the SPArcDS mobile app and sends an SMS notification to all registered phone numbers. All notifications and relevant data are securely logged to a database for future reference. The mobile app enables users to wirelessly register new devices and conveniently view the activity log, which provides detailed status updates for all registered SPArcDS devices.",
    techStack: [
      "Mobile App Development",
      "Arduino Programming",
      "Google Sheets Database",
      "GitHub",
      "Meeting Minutes",
      "Waterfall Management",
    ],
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
