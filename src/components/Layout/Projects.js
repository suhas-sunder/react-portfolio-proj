import React from "react";
import Styles from "./Projects.module.css";
import ImageCard from "../UI/ImageCard";
import TechStack from "./TechStack";
import ProjData from "../../data/ProjData";

function Projects() {
  return (
    <div id="projects" className={Styles.container}>
      <h2 className={Styles.title}>Projects</h2>
      {ProjData.map((data) => (
        <div
          data-testid={`proj-section_${data.projId}`}
          id={data.projId}
          key={data.id}
          className={Styles[data.projCSS]}
        >
          <div className={Styles.details}>
            <h3 className={Styles["project-title"]}>{data.title}</h3>
            <p className={Styles["project-description"]}>{data.description}</p>
            <TechStack skillsList={data.techStack} />
          </div>
          <ImageCard
            imageURL={data.imageURL}
            projLink={data.projLink}
            projName={data.title}
            projURL={data.projURL}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
