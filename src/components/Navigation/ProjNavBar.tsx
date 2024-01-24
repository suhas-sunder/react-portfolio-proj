import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import projData from "../../data/ProjData";
import { faArrowAltCircleRight as arrowRight } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleLeft as arrowLeft } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

function ProjNavBar({ Styles, projName }) {
  const [prevProjName, setPrevProjName] = useState<string>("");
  const [nextProjName, setNextProjName] = useState<string>("");

  useEffect(() => {
    const handleArrowLeft = () => {
      let index = 0;
      for (const value of Object.values(projData)) {
        if (
          value.title.toLowerCase() === projName.toLowerCase() &&
          index - 1 >= 0
        ) {
          setPrevProjName(projData[index - 1].title);
          break;
        } else if (index === 0) {
          setPrevProjName("");
        }

        index++;
      }
    };

    const handleArrowRight = () => {
      let index = 0;
      for (const value of Object.values(projData)) {
        if (
          value.title.toLowerCase() === projName.toLowerCase() &&
          index + 1 < projData.length
        ) {
          setNextProjName(projData[index + 1].title);
          break;
        } else if (index === projData.length - 1) {
          setNextProjName("");
        }
        index++;
      }
    };

    handleArrowLeft();
    handleArrowRight();
  }, [nextProjName, prevProjName, projName]);

  return (
    <div className={`pt-3 bg-dark-blueish-gray`}>
      <div className=" flex justify-between max-w-[1600px] mx-auto">
        {prevProjName && (
          <Link
            to={`/projects/${prevProjName.split(" ").join("").toLowerCase()}`}
            className="flex w-full justify-center items-center gap-3 text-sm text-white hover:text-highlight-yellow pl-5 py-4 sm:text-2xl sm:gap-5 sm:pl-0"
          >
            <span>
              <FontAwesomeIcon
                icon={arrowLeft}
                className={Styles["arrow-icon"]}
              />
            </span>
            <span>{prevProjName}</span>
          </Link>
        )}
        {!prevProjName && <div className={Styles["nav-left"]}></div>}
        {nextProjName && (
          <Link
            to={`/projects/${nextProjName.split(" ").join("").toLowerCase()}`}
            className="flex w-full justify-center items-center gap-3 text-sm text-white hover:text-highlight-yellow pr-5 py-4 sm:text-2xl sm:gap-5 sm:pr-0"
          >
            <span>{nextProjName}</span>
            <span>
              <FontAwesomeIcon
                icon={arrowRight}
                className={Styles["arrow-icon"]}
              />
            </span>
          </Link>
        )}
        {!nextProjName && <div className={Styles["nav-right"]}></div>}
      </div>
    </div>
  );
}

export default ProjNavBar;
