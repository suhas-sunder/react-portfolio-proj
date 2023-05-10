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
  return (
    <div className={Styles.container}>
      <div className={Styles["inner-container"]}>
        <h2 className={Styles.title}>Technical skills</h2>
        <ul className={Styles.skills}>
          <li className={Styles.skill}>
            <FontAwesomeIcon icon={htmlIcon} className={Styles["skill-icon"]} />
            <span className={Styles["skill-name"]}>HTML5</span>
          </li>
          <li className={Styles.skill}>
            <FontAwesomeIcon icon={cssIcon} className={Styles["skill-icon"]} />
            <span className={Styles["skill-name"]}>CSS3</span>
          </li>
          <li className={Styles.skill}>
            <FontAwesomeIcon icon={jsIcon} className={Styles["skill-icon"]} />
            <span className={Styles["skill-name"]}>JavaScript</span>
          </li>
          <li className={Styles.skill}>
            <FontAwesomeIcon icon={gitIcon} className={Styles["skill-icon"]} />
            <span className={Styles["skill-name"]}>Git</span>
          </li>
          <li className={Styles.skill}>
            <FontAwesomeIcon
              icon={githubIcon}
              className={Styles["skill-icon"]}
            />
            <span className={Styles["skill-name"]}>GitHub</span>
          </li>
          <li className={Styles.skill}>
            <FontAwesomeIcon icon={sassIcon} className={Styles["skill-icon"]} />
            <span className={Styles["skill-name"]}>SASS</span>
          </li>
          <li className={Styles.skill}>
            <FontAwesomeIcon
              icon={reactIcon}
              className={Styles["skill-icon"]}
            />
            <span className={Styles["skill-name"]}>React</span>
          </li>
          <li className={Styles.skill}>
            <FontAwesomeIcon
              icon={responsiveIcon}
              className={Styles["skill-icon"]}
            />
            <span className={Styles["skill-name"]}>Responsive Design</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
