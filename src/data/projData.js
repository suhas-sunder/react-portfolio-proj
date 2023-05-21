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
      "The All Track System (ATS) official website offers detailed information about the ATS facilities management software built for Landlords and Contractors. Discover the powerful functionalities offered by the ATS software and mobile app, including a visual showcase of all features, as well as, important information regarding the onboarding process for clients. ",
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
    features: "These are the project features.",
    problems:
      "These are the problems that I faced with this project and how I handled them.",
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
    features: "",
    problems: "",
  },
  {
    id: 3,
    projId: "portfolio",
    title: "React Portfolio",
    description:
      "My personal portfolio website showcases my professional skills, accomplishments, and other relevant details to impress potential employers. With easy access to my current resume, detailed project overviews, links for seamless navigation, and a contact form, this portfolio presents a comprehensive overview of my work. Explore my portfolio to gain insights into my expertise and get in touch for exciting opportunities.",
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
    projURL: "https://www.emegroup.ca/",
    projGitHubURL: "http://suhassunder.com/",
    projCSS: "project",
    projLink: "/projects/Portfolio",
    features: "",
    problems: "",
  },
  {
    id: 4,
    projId: "capstone",
    title: "Capstone SPArcDS",
    description:
      "SPArcDS is a prototype Arc Fault detection system designed to enhance home safety. When an Arc Fault is detected, SPArcDS promptly notifies the user through the SPArcDS mobile app and sends an SMS notification to all registered phone numbers. All notifications and relevant data are securely logged to a database for future reference. The mobile app enables users to wirelessly register new devices and conveniently view the activity log, which provides detailed status updates for all registered SPArcDS devices.",
    techStack: [
      "Godot Game Engine",
      "Mobile App Development",
      "GitHub",
      "Arduino Programming",
      "Meeting Minutes",
      "Waterfall Management",
    ],
    imageURL: CapstoneUrl,
    projCSS: "project-reverse",
    projLink: "/projects/Capstone",
    projProposal: "",
    features: "",
    problems: "",
  },
];

export default ProjData;
