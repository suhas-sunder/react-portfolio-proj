import React from "react";
import Styles from "./TechStack.module.css";

function TechStack({ skillsList }) {
  return (
    <ul className={Styles["tech-stack"]}>
      {skillsList.map((skill, index) => (
        <li key={index} className={Styles["tech-name"]}>{skill}</li>
      ))}
    </ul>
  );
}

export default TechStack;
