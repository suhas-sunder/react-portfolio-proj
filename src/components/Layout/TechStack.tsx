import ExpandingListContainer from "../UI/ExpandingListContainer";
import Styles from "./styles/TechStack.module.css";

function TechStack({ skillsList }) {
  return (
    <ExpandingListContainer customBtnStyle="flex sm:hidden text-dark-blueish-gray font-bold hover:text-slate-600 py-3" maxHeight="max-h-40 sm:max-h-full">
      <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-6 text-sm">
        {skillsList.map((skill, index) => (
          <li key={index} className={Styles["tech-name"]}>
            {skill}
          </li>
        ))}
      </ul>
    </ExpandingListContainer>
  );
}

export default TechStack;
