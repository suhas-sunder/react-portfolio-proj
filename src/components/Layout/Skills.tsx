import Styles from "./styles/Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillsData from "../../data/SkillsData";

function Skills() {
  return (
    <div id="skills" className={Styles.container}>
      <div className={Styles["inner-container"]}>
        <h2 className={Styles.title}>Technical skills</h2>
        <ul className={Styles["skills-list"]}>
          {SkillsData.map((data, index) => (
            <li key={index} className={Styles.skill}>
              <FontAwesomeIcon
                data-testid={"skill-icon-" + data.icon}
                icon={data.icon}
                className={Styles["skill-icon"]}
              />
              <span
                data-testid={"skill-name-" + data.skill}
                className={Styles["skill-name"]}
              >
                {data.skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
