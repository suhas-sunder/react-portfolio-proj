import React from "react";
import Styles from "./Projects.module.css";
import ImageCard from "../UI/ImageCard";
import TechStack from "./TechStack";

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
        <ImageCard />
      </div>
      <div className={Styles.project}>
        <ImageCard />
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
        <ImageCard />
      </div>
      <div className={Styles.project}>
        <ImageCard />
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
      </div>
    </div>
  );
}

export default Projects;
