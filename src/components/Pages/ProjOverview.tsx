import projData from "../../data/ProjData";
import Styles from "./styles/ProjOverview.module.css";
import NavLinks from "../Navigation/NavLinks";
import ProjNavBar from "../Navigation/ProjNavBar";

function ProjOverview({ projName }) {
  // Filter data relevant to the active project url link clicked
  let projDetails = projData.filter((data) => data.title === projName);
  const { title, imageURL, features, projURL, projGitHubURL } = projDetails[0];

  return (
    <>
      <header className="flex flex-col bg-dark-blueish-gray pt-24 pb-16">
        <ProjNavBar Styles={Styles} projName={projName} />
        <div className={Styles["header-container"]}>
          <h1 className="text-2xl sm:text-[2.5rem] py-3 sm:py-6">{title}</h1>
          <div className={Styles["img-link"]}>
            <img
              src={imageURL}
              alt={`${title} project screenshot`}
              className={Styles.img}
            />
          </div>
          <div className="flex w-full justify-center items-center gap-5 sm:gap-16 mt-4">
            <NavLinks
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
              <NavLinks
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
      <main className="flex flex-col gap-5 my-16">
        <div className="flex flex-col max-w-[1000px] mx-auto gap-8">
          <h2 id="proj-overview" className="flex text-4xl">
            Project Overview
          </h2>
          <ul className={Styles["highlights-list"]}>
            {features.map((feature, index) => (
              <li key={index} className={Styles.highlights}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col max-w-[1000px] mx-auto gap-8">
          <h2 id="proj-challenges" className="flex text-4xl">
            Project Challenges
          </h2>
          <ul className={Styles["highlights-list"]}>
            {features.map((feature, index) => (
              <li key={index} className={Styles.highlights}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <ProjNavBar Styles={Styles} projName={projName} />
    </>
  );
}

export default ProjOverview;
