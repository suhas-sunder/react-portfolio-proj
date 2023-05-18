import CapstoneUrl from "../assets/capstone-proj-screenshot.jpg";
import EMEUrl from "../assets/eme-website-screenshot.jpg";
import PortfolioUrl from "../assets/portfolio-screenshot.jpg";
import ATSUrl from "../assets/ats-website-screenshot.jpg";

const ProjData = [
  {
    id: 1,
    title: "All Track System",
    description:
      "All Track System (ATS) is a revolutionary facility management software transforming the operations of landlords and contractors. This project website offers comprehensive details about ATS and its innovative features, providing a deep understanding of its capabilities. Discover the powerful functionalities offered by the ATS software and mobile app, as well as important information regarding the onboarding process for landlords and contractors. ",
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
    projCSS: "project",
    projLink: "/projects/AllTrackSystem",
    features: "",
    projProposal: "",
    problems: "",
  },
  {
    id: 2,
    title: "EME Group Inc.",
    description:
      "The EME Group Inc. website showcases the consulting process, Electrical and Mechanical services, and notable client projects of the company. This website provides clients with a clear understanding of the end-to-end consulting journey, detailed information about services offered, and a showcase of client projects categorized by industry. Additionally, the website features a comprehensive careers page that outlines available positions and their respective requirements. For seamless communication, the contact page offers visitors easy access to pertinent contact information, a convenient contact form, and an interactive map.",
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
    projCSS: "project-reverse",
    projLink: "/projects/EMEGroupInc",
    features: "",
    projProposal: "",
    problems: "",
  },
  {
    id: 3,
    title: "React Portfolio",
    description:
      "My personal portfolio website, built using React, showcases my professional skills, accomplishments, and other relevant details to impress potential employers. With easy access to my current resume, detailed project overviews, and a contact form on every page, this portfolio presents a comprehensive overview of my work. Explore my portfolio to gain insights into my expertise and get in touch for exciting opportunities.",
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
    projCSS: "project",
    projLink: "/projects/Portfolio",
    features: "",
    projProposal: "",
    problems: "",
  },
  {
    id: 4,
    title: "Capstone SPArcDS",
    description:
      "SPArcDS is a prototype Arc Fault detection system designed to enhance home safety. When an Arc Fault is detected, SPArcDS promptly notifies the user through the SPArcDS mobile app and sends an SMS notification to their phone as an additional safety measure. All notifications and relevant data are securely logged to a database for future reference. The mobile app enables users to wirelessly register new devices and conveniently view the activity log, which provides detailed status updates for all registered SPArcDS devices.",
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
