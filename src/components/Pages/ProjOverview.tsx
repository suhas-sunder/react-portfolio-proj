import Footer from "../Layout/Footer";
import projData from "../../data/ProjData";
import Styles from "./styles/ProjOverview.module.css";
import Button from "../Navigation/NavLinks";
import ProjNavBar from "../Navigation/ProjNavBar";

function ProjOverview({ projName }) {
  // Filter data relevant to the active project url link clicked
  let projDetails = projData.filter((data) => data.title === projName);
  const { title, imageURL, features, projURL, projGitHubURL } = projDetails[0];


  return (
    <>
      <header className={Styles.header}>
        <ProjNavBar
          Styles={Styles}
          projName={projName}
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
          <div className="flex w-full justify-center items-center gap-16">
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
        projName={projName}
      />
      <Footer />
    </>
  );
}

export default ProjOverview;
