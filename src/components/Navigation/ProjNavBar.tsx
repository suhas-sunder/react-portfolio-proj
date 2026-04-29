import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import projData from "../../data/ProjData";
import { faArrowAltCircleRight as arrowRight } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleLeft as arrowLeft } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

interface ProjectDataItem {
  title: string;
}

interface ProjNavBarProps {
  Styles: {
    [key: string]: string;
  };
  projName: string;
}

function ProjNavBar({ Styles, projName }: ProjNavBarProps) {
  const [prevProjName, setPrevProjName] = useState<string>("");
  const [nextProjName, setNextProjName] = useState<string>("");

  useEffect(() => {
    const activeProjectIndex = (projData as ProjectDataItem[]).findIndex(
      (project) => project.title.toLowerCase() === projName.toLowerCase()
    );

    if (activeProjectIndex === -1) {
      setPrevProjName("");
      setNextProjName("");
      return;
    }

    setPrevProjName(
      activeProjectIndex > 0 ? projData[activeProjectIndex - 1].title : ""
    );

    setNextProjName(
      activeProjectIndex + 1 < projData.length
        ? projData[activeProjectIndex + 1].title
        : ""
    );
  }, [projName]);

  return (
    <div className="border-y border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-[1600px] justify-between">
        {prevProjName ? (
          <Link
            to={`/projects/${prevProjName.split(" ").join("").toLowerCase()}`}
            className="flex w-full cursor-pointer items-center justify-center gap-3 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:bg-sky-400/10 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400/40 sm:gap-5 sm:px-8 sm:text-[1.15rem]"
          >
            <span>
              <FontAwesomeIcon
                icon={arrowLeft}
                className={Styles["arrow-icon"]}
              />
            </span>
            <span>{prevProjName}</span>
          </Link>
        ) : (
          <div className={Styles["nav-left"]}></div>
        )}

        {nextProjName ? (
          <Link
            to={`/projects/${nextProjName.split(" ").join("").toLowerCase()}`}
            className="flex w-full cursor-pointer items-center justify-center gap-3 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:bg-sky-400/10 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400/40 sm:gap-5 sm:px-8 sm:text-[1.15rem]"
          >
            <span>{nextProjName}</span>
            <span>
              <FontAwesomeIcon
                icon={arrowRight}
                className={Styles["arrow-icon"]}
              />
            </span>
          </Link>
        ) : (
          <div className={Styles["nav-right"]}></div>
        )}
      </div>
    </div>
  );
}

export default ProjNavBar;