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
      "Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project.",
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
      "Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project.",
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
    imageURL: EMEUrl,
    projCSS: "project-reverse",
  },
  {
    id: 3,
    title: "React Portfolio",
    description:
      "Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project.",
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
    imageURL: PortfolioUrl,
    projCSS: "project",
  },
  {
    id: 4,
    title: "Capstone Project",
    description:
      "Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project. Details about what I did for this project.",
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
        <TechStack stack={data.techStack} />
      </div>
      <ImageCard url={data.imageURL} />
    </div>
  );
});

function Projects() {
  return (
    <div id="projects" className={Styles.container}>
      <h2 className={Styles.title}>Projects</h2>
      <div className={Styles.project}>
        <div className={Styles.details}>
          <h3 className={Styles["project-title"]}>All Track System</h3>
          <p className={Styles["project-description"]}></p>
          <TechStack />
        </div>
        <ImageCard url={ATSUrl} />
      </div>
      {projects}
    </div>
  );
}

export default Projects;
