import Styles from "./styles/Projects.module.css";
import ImageCard from "../UI/ImageCard";
import TechStack from "./TechStack";
import ProjData from "../../data/ProjData";

function Projects() {
  return (
    <div id="projects" className={`${Styles.container}`}>
      <h2 className={` text-6xl mt-16 mb-28 uppercase`}>Projects</h2>
      {ProjData.map((data) => (
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
            <div
              className={`${
                data.projCSS === "project"
                  ? "-rotate-[45deg] -left-12"
                  : "rotate-[45deg] -right-12"
              } flex border-4 border-white absolute bg-dark-blueish-gray rounded-full -top-12 text-white p-2 h-20 w-20 justify-center items-center`}
            >
              <span className="text-base tracking-widest">{data.year}</span>
            </div>
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
