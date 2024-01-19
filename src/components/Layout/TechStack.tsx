import Styles from "./styles/TechStack.module.css";

function TechStack({ skillsList }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-sm overflow-auto max-h-[16em] md:overflow-visible">
      {skillsList.map((skill, index) => (
        <li key={index} className={Styles["tech-name"]}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default TechStack;
