import Styles from "./styles/TechStack.module.css";

function TechStack({ skillsList }) {
  return (
    <ul className="grid grid-cols-5 gap-5 text-sm">
      {skillsList.map((skill, index) => (
        <li key={index} className={Styles["tech-name"]}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default TechStack;
