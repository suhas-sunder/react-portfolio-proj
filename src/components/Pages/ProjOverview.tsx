import Footer from "../Layout/Footer";
import projData from "../../data/ProjData";
import Styles from "./styles/ProjOverview.module.css";
import Modal from "../UI/Modal";
import Button from "../Navigation/NavLinks";
import { faArrowAltCircleRight as arrowRight } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleLeft as arrowLeft } from "@fortawesome/free-regular-svg-icons";
import ProjNavBar from "../UI/ProjNavBar";

function ProjOverview({ projName, handleModal, showModal }) {
  // Filter data relevant to the active project url link clicked
  let projDetails = projData.filter((data) => data.title === projName);

  // Gather data to determine project navigation
  const projNames = [...projData.map((data) => data.title)];
  const projLinks = [...projData.map((data) => data.projLink)];
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

  const { title, imageURL, features, projURL, projGitHubURL } = projDetails[0];

  return (
    <>
      {showModal && <Modal closeModal={handleModal} />}
      <header className={Styles.header}>
        <ProjNavBar
          Styles={Styles}
          prevProj={prevProj}
          prevProjLink={prevProjLink}
          arrowLeft={arrowLeft}
          nextProjLink={nextProjLink}
          nextProj={nextProj}
          arrowRight={arrowRight}
        />
        <div className={Styles["header-container"]}>
          <h1 className={Styles.title}>{title}</h1>
          <div className={Styles["img-link"]}>
            <img
              src={imageURL}
              alt={`${title} project screenshot`}
              className={Styles.img}
            />
          </div>
          <div className={Styles.buttons}>
            <Button
              text={
                projName === "Capstone SPArcDS"
                  ? "View Demo Video"
                  : "View Live"
              }
              logo="arrowUp"
              type="project-link"
              url={projURL}
              isHashLink={false}
              target="_blank"
            />
            {projGitHubURL && (
              <Button
                text="View GitHub"
                logo="github"
                type="project-link"
                url={projGitHubURL}
                isHashLink={false}
                target="_blank"
              />
            )}
            <Button
              text="Overview"
              logo=""
              type="project-link"
              url={"#proj-overview"}
              isHashLink={true}
            />

            <Button
              text="Challenges"
              logo=""
              type="project-link"
              url={"#proj-challenges"}
              isHashLink={true}
            />
          </div>
        </div>
      </header>
      <div className={Styles["proj-details"]}>
        <h2 id="proj-overview">Project Overview</h2>
        <ul className={Styles["highlights-list"]}>
          {features.map((feature, index) => (
            <li key={index} className={Styles.highlights}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className={Styles["proj-details"]}>
        <h2 id="proj-challenges">Project Challenges</h2>
        <ul className={Styles["highlights-list"]}>
          {features.map((feature, index) => (
            <li key={index} className={Styles.highlights}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <ProjNavBar
        Styles={Styles}
        prevProj={prevProj}
        prevProjLink={prevProjLink}
        arrowLeft={arrowLeft}
        nextProjLink={nextProjLink}
        nextProj={nextProj}
        arrowRight={arrowRight}
      />
      <Footer />
    </>
  );
}

export default ProjOverview;
