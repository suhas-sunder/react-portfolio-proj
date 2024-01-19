import Styles from "./styles/Projects.module.css";
import ImageCard from "../UI/ImageCard";
import TechStack from "./TechStack";
import ProjData from "../../data/ProjData";

function Projects() {
  return (
    <div id="projects" className="flex flex-col max-w-[1200px] mx-auto px-6 gap-60 mb-52">
      <h2 className={` text-6xl mt-16 uppercase`}>Projects</h2>
      {ProjData.map((data, index) => (
        <div
          data-testid={`proj-section_${data.projId}`}
          id={data.projId}
          key={data.id}
          className={`${
            index % 2 === 0
              ? "lg:flex-row-reverse flex-col-reverse"
              : "lg:flex-row flex-col-reverse"
          } ${index === 0 && "-mt-6"} flex gap-16 mx-8 lg:mx-0`}
        >
          <div className={Styles.details}>
            <p className={Styles["project-description"]}>{data.description}</p>
            <TechStack skillsList={data.techStack} />
          </div>

          <ImageCard data={data} index={index} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
