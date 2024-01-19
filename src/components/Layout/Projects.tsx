import Styles from "./styles/Projects.module.css";
import ImageCard from "../UI/ImageCard";
import TechStack from "./TechStack";
import ProjData from "../../data/ProjData";
import ProjectDates from "./ProjectDates";

function Projects() {
  return (
    <div id="projects" className={`${Styles.container}`}>
      <h2 className={` text-6xl mt-16 mb-28 uppercase`}>Projects</h2>
      {ProjData.map((data, index) => (
        <div
          data-testid={`proj-section_${data.projId}`}
          id={data.projId}
          key={data.id}
          className={`${Styles[data.projCSS]}`}
        >
          <div className={Styles.details}>
            <p className={Styles["project-description"]}>{data.description}</p>
            <TechStack skillsList={data.techStack} />
          </div>
          <div className="flex relative">
            <ProjectDates year={data.year} endYear={data.endYear} index={index} />
            <ImageCard
              imageURL={data.imageURL}
              projLink={data.projLink}
              projName={data.title}
              projURL={data.projURL}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
