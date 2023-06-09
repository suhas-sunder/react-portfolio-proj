import React from "react";
import NavBar from "../UI/NavBar";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";
import ProjData from "../../data/ProjData";
import Styles from "./ProjOverview.module.css";
import Modal from "../UI/Modal";
import TechStack from "../Layout/TechStack";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare as link } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight as arrowRight } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleLeft as arrowLeft } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function ProjOverview({ projName, handleModal, showModal }) {
  // Filter data relevant to the active project url link clicked
  let projDetails = ProjData.filter((data) => data.title === projName);

  // Gather data to determine project navigation
  const projNames = [...ProjData.map((data) => data.title)];
  const projLinks = [...ProjData.map((data) => data.projLink)];
  const projIndex = projNames.indexOf(projName);

  // Store the next project name and url for navigation
  const [nextProj, nextProjLink] =
    projIndex === projNames.length - 1
      ? ["", ""]
      : [projNames[projIndex + 1], projLinks[projIndex + 1]];

  // Store the previous project name and url for navigation
  const [prevProj, prevProjLink] =
    projIndex === 0
      ? ["", ""]
      : [projNames[projIndex - 1], projLinks[projIndex - 1]];

  const {
    description,
    title,
    techStack,
    imageURL,
    features,
    // purpose,
    projURL,
    projGitHubURL,
  } = projDetails[0];

  // Store proj nav buttons as constant for reusability
  const projNavigation = (
    <div className={Styles.navigation}>
      {prevProj && (
        <Link to={prevProjLink} className={Styles["nav-left"]}>
          <span>
            <FontAwesomeIcon
              icon={arrowLeft}
              className={Styles["arrow-icon"]}
            />
          </span>
          <span className={Styles["nav-proj-name"]}>{prevProj}</span> (PREV)
        </Link>
      )}
      {!prevProj && <div className={Styles["nav-left"]}></div>}
      {nextProj && (
        <Link to={nextProjLink} className={Styles["nav-right"]}>
          (NEXT)
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

  return (
    <>
      {showModal && <Modal closeModal={handleModal} />}
      <header className={Styles.header}>
        {projNavigation}
        <div className={Styles["header-container"]}>
          <h1 className={Styles.title}>{title}</h1>
          <a
            className={Styles["img-link"]}
            href={projURL}
            rel="noreferrer"
            target="_blank"
          >
            <div className={Styles.overlay}>
              <span className={Styles["link-text"]}>
                {projName === "Capstone SPArcDS"
                  ? "View Demo Video"
                  : "View Live"}
              </span>
              <FontAwesomeIcon icon={link} />
            </div>
            <img
              src={imageURL}
              alt={`${title} project screenshot`}
              className={Styles.img}
            />
          </a>
          <p className={Styles.description}>{description}</p>
          <div className={Styles.buttons}>
            {projGitHubURL && (
              <Button
                text="View GitHub"
                logo="github"
                type="project-link"
                url={projGitHubURL}
                isHashLink={true}
                target="_blank"
              />
            )}
            <Button
              text={
                projName === "Capstone SPArcDS"
                  ? "View Demo Video"
                  : "View Live"
              }
              logo="arrowUp"
              type="project-link"
              url={projURL}
              isHashLink={true}
              target="_blank"
            />
          </div>
          <TechStack skillsList={techStack} />
        </div>
      </header>
      <div className={Styles["proj-details"]}>
        <h2>Project Details</h2>
        <ul className={Styles["highlights-list"]}>
          {features.map((feature, index) => (
            <li key={index} className={Styles.highlights}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {projNavigation}
      <Contact />
      <Footer handleModal={handleModal} />
    </>
  );
}

export default ProjOverview;
