import { useState } from "react";
import { faAnglesDown as arrowsDown } from "@fortawesome/free-solid-svg-icons";
import { faAnglesUp as arrowsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExpandingListContainer({ children, customBtnStyle, maxHeight }) {
  const [expandSkills, setExpandSkills] = useState<boolean>(false);
  return (
    <>
      <div
        className={`${
          !expandSkills
            ? maxHeight
            : "max-h-full"
        } transition-all delay-200 mx-auto overflow-hidden `}
      >
        {children}
      </div>
      <button
        onClick={() => setExpandSkills(!expandSkills)}
        className={`${customBtnStyle} gap-4 w-full justify-center items-center rounded-lg`}
      >
        <span>{expandSkills ? "Hide" : "Show all"} skills</span>
        <span>
          {expandSkills ? (
            <FontAwesomeIcon
              data-testid={"expand-skills-up"}
              icon={arrowsUp}
              className=""
            />
          ) : (
            <FontAwesomeIcon
              data-testid={"expand-skills-down"}
              icon={arrowsDown}
              className=""
            />
          )}
        </span>
      </button>
    </>
  );
}

export default ExpandingListContainer;
