import React from "react";
import Styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 as htmlIcon } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt as cssIcon } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs as jsIcon } from "@fortawesome/free-brands-svg-icons";
import { faSquareGit as gitIcon } from "@fortawesome/free-brands-svg-icons";
import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons";
import { faSass as sassIcon } from "@fortawesome/free-brands-svg-icons";
import { faReact as reactIcon } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen as responsiveIcon } from "@fortawesome/free-solid-svg-icons";

function About() {
  // Technical skills data for skills section
  const skillsData = [
    {
      icon: htmlIcon,
      skill: "HTML5",
    },
    {
      icon: cssIcon,
      skill: "CSS3",
    },
    {
      icon: jsIcon,
      skill: "JavaScript",
    },
    {
      icon: gitIcon,
      skill: "Git",
    },
    {
      icon: githubIcon,
      skill: "GitHub",
    },
    {
      icon: sassIcon,
      skill: "SASS",
    },
    {
      icon: reactIcon,
      skill: "React",
    },
    {
      icon: responsiveIcon,
      skill: "Responsive Design",
    },
  ];

  return (
    <div id="skills" className={Styles.container}>
      <div className={Styles["inner-container"]}>
        <h2 className={Styles.title}>Technical skills</h2>
        <ul className={Styles["skills-list"]}>
          {skillsData.map((data, index) => (
            <li key={index} className={Styles.skill}>
              <FontAwesomeIcon
                icon={data.icon}
                className={Styles["skill-icon"]}
              />
              <span className={Styles["skill-name"]}>{data.skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
