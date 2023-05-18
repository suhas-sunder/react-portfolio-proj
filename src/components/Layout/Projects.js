import React from "react";
import Styles from "./Projects.module.css";
import ImageCard from "../UI/ImageCard";
import TechStack from "./TechStack";
import CapstoneUrl from "../../assets/capstone-proj-screenshot.jpg";
import EMEUrl from "../../assets/eme-website-screenshot.jpg";
import PortfolioUrl from "../../assets/portfolio-screenshot.jpg";
import ATSUrl from "../../assets/ats-website-screenshot.jpg";

const projData = [
  {
    id: 1,
    title: "All Track System",
    description:
      "All Track System (ATS) is a facility management software that allows Landlords and Contractors to manage data, organize teams, and track all progress on management work in real time. This website makes it easy to understand the various features offered by the ATS software and mobile app, as well as, other important details such as the onboarding process for Landlords and Contractors.",
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
  },
  {
    id: 2,
    title: "EME Group Inc.",
    description:
      "The EME Group Inc. website makes it easy for clients to understand the consulting process from start to finish. The website also provides details about all Electrical and Mechanical services offered and showcases a variety of client projects organized by industry. A detailed summary of all available positions and job requirements are available for review on the careers page. The contact page provides visitors with pertinent contact information alongside a convenient contact form, and includes a live map for users to interact with.",
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
  },
  {
    id: 3,
    title: "React Portfolio",
    description:
      "A personal portfolio website built using React that highlights my professional skills, accomplishments, and other relevant details for potential employers to review. Additionally, this portfolio provides easy access to my current resume, a detailed overview for each project, and includes a contact form on every page.",
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
  },
  {
    id: 4,
    title: "Capstone Project",
    description:
      "SPArcDS is a prototype Arc Fault detection system that sends a notification to the SPArcDS mobile app when an Arc Fault has been detected in a home. As an added safety measure SPArcDS also sends an SMS notification to the user's phone. Users can register new devices to the mobile app wirelessly and can view an activity log that details the status of all registered SPAarcDS devices.",
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
  },
];

// Store project details to be displayed
const projects = projData.map((data) => {
  return (
    <div key={data.id} className={Styles[data.projCSS]}>
      <div className={Styles.details}>
        <h3 className={Styles["project-title"]}>{data.title}</h3>
        <p className={Styles["project-description"]}>{data.description}</p>
        <TechStack skillsList={data.techStack} />
      </div>
      <ImageCard url={data.imageURL} />
    </div>
  );
});

function Projects() {
  return (
    <div id="projects" className={Styles.container}>
      <h2 className={Styles.title}>Projects</h2>
      {projects}
    </div>
  );
}

export default Projects;
