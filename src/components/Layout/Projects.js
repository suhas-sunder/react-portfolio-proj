import React from "react";
import Styles from "./Projects.module.css";
import ImageCard from "../UI/ImageCard";
import TechStack from "./TechStack";
import CapstoneUrl from "../../assets/capstone-proj-screenshot.jpg";
import EMEUrl from "../../assets/eme-website-screenshot.jpg";
import PortfolioUrl from "../../assets/portfolio-screenshot.jpg"
import ATSUrl from "../../assets/ats-website-screenshot.jpg"

function Projects() {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Projects</h2>
      <div className={Styles.project}>
        <div className={Styles.details}>
          <h3 className={Styles["project-title"]}>All Track System</h3>
          <p className={Styles["project-description"]}>
            Details about what I did for this project. Details about what I did
            for this project. Details about what I did for this project. Details
            about what I did for this project. Details about what I did for this
            project. Details about what I did for this project. Details about
            what I did for this project. Details about what I did for this
            project. Details about what I did for this project.
          </p>
          <TechStack />
        </div>
        <ImageCard url={ATSUrl} />
      </div>
      <div className={Styles["project-reverse"]}>
        <div className={Styles.details}>
          <h3 className={Styles["project-title"]}>EME Group Inc.</h3>
          <p className={Styles["project-description"]}>
            Details about what I did for this project. Details about what I did
            for this project. Details about what I did for this project. Details
            about what I did for this project. Details about what I did for this
            project. Details about what I did for this project. Details about
            what I did for this project. Details about what I did for this
            project. Details about what I did for this project.
          </p>
          <TechStack />
        </div>
        <ImageCard url={EMEUrl} />
      </div>
      <div className={Styles.project}>
        <div className={Styles.details}>
          <h3 className={Styles["project-title"]}>React Portfolio</h3>
          <p className={Styles["project-description"]}>
            Details about what I did for this project. Details about what I did
            for this project. Details about what I did for this project. Details
            about what I did for this project. Details about what I did for this
            project. Details about what I did for this project. Details about
            what I did for this project. Details about what I did for this
            project. Details about what I did for this project.
          </p>
          <TechStack />
        </div>
        <ImageCard url={PortfolioUrl} />
      </div>
      <div className={Styles["project-reverse"]}>
        <div className={Styles.details}>
          <h3 className={Styles["project-title"]}>Capstone Project</h3>
          <p className={Styles["project-description"]}>
            Details about what I did for this project. Details about what I did
            for this project. Details about what I did for this project. Details
            about what I did for this project. Details about what I did for this
            project. Details about what I did for this project. Details about
            what I did for this project. Details about what I did for this
            project. Details about what I did for this project.
          </p>
          <TechStack />
        </div>
        <ImageCard url={CapstoneUrl} />
      </div>
    </div>
  );
}

export default Projects;
