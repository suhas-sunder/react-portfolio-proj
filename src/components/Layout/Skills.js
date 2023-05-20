import React from "react";
import Styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillsData from "../../data/SkillsData";

function About() {
  return (
    <div id="skills" className={Styles.container}>
      <div className={Styles["inner-container"]}>
        <h2 className={Styles.title}>Technical skills</h2>
        <ul className={Styles["skills-list"]}>
          {SkillsData.map((data, index) => (
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
