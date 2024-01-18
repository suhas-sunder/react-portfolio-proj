import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ProjNavBar({
  Styles,
  prevProj,
  prevProjLink,
  arrowLeft,
  nextProjLink,
  nextProj,
  arrowRight,
}) {
  return (
    <div className={Styles.navigation}>
      {prevProj && (
        <Link to={prevProjLink} className={Styles["nav-left"]}>
          <span>
            <FontAwesomeIcon
              icon={arrowLeft}
              className={Styles["arrow-icon"]}
            />
          </span>
          <span className={Styles["nav-proj-name"]}>{prevProj}</span>
        </Link>
      )}
      {!prevProj && <div className={Styles["nav-left"]}></div>}
      {nextProj && (
        <Link to={nextProjLink} className={Styles["nav-right"]}>
          <span className={Styles["nav-proj-name"]}>{nextProj}</span>
          <span>
            <FontAwesomeIcon
              icon={arrowRight}
              className={Styles["arrow-icon"]}
            />
          </span>
        </Link>
      )}
      {!nextProj && <div className={Styles["nav-right"]}></div>}
    </div>
  );
}

export default ProjNavBar;
