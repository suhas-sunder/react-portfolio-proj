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

function ProjOverview({ projName, handleModal, showModal }) {
  // Filter data relevant to the active project url link clicked
  let projDetails = ProjData.filter((data) => data.title === projName);

  const {
    description,
    title,
    techStack,
    imageURL,
    features,
    problems,
    projURL,
    projGitHubURL,
  } = projDetails[0];

  return (
    <>
      {showModal && <Modal closeModal={handleModal} />}
      <NavBar />
      <div className={Styles.header}>
        <div className={Styles["header-container"]}>
          <h1 className={Styles.title}>{title}</h1>
          <p className={Styles.description}>{description}</p>
          <a
            className={Styles["img-link"]}
            href="https://ontariotechu.ca/index.php"
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
            />
          </div>
          <TechStack skillsList={techStack} />
        </div>
      </div>
      <div className={Styles["proj-details"]}>
        <h2>Project Purpose & Deliverables</h2>
        <p>
          Project Navigation btns with links Next/Prev Make this a banner like
          the skills list section w/ a button for github and live link if
          available
        </p>
      </div>
      <div className={Styles["proj-details"]}>
        <h2>Challenges & Thought Process</h2>
        <p>
          Project Navigation btns with links Next/Prev Make this a banner like
          the skills list section w/ a button for github and live link if
          available
        </p>
      </div>
      <Contact />
      <Footer handleModal={handleModal} />
    </>
  );
}

export default ProjOverview;
