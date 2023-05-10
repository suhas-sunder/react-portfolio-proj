import React from "react";
import Styles from './TechStack.module.css'

function TechStack() {
  return (
    <ul className={Styles["tech-stack"]}>
      <li className={Styles["tech-name"]}>HTML5</li>
      <li className={Styles["tech-name"]}>CSS3</li>
      <li className={Styles["tech-name"]}>JavaScript</li>
      <li className={Styles["tech-name"]}>SASS</li>
      <li className={Styles["tech-name"]}>GitHub</li>
      <li className={Styles["tech-name"]}>AWS S3</li>
      <li className={Styles["tech-name"]}>BEM Methodology</li>
      <li className={Styles["tech-name"]}>Responsive Design</li>
      <li className={Styles["tech-name"]}>Mobile-first Approach</li>
    </ul>
  );
}

export default TechStack;
