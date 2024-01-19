import Styles from "./styles/TechStack.module.css";

function TechStack({ skillsList }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-6 text-sm overflow-auto max-h-[16em] md:overflow-visible">
      {skillsList.map((skill, index) => (
        <li key={index} className={Styles["tech-name"]}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default TechStack;
