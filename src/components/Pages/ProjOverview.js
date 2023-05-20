import React from "react";
import NavBar from "../UI/NavBar";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";
import ProjData from "../../data/ProjData";
import Styles from "./ProjOverview.module.css";
import TechStack from "../Layout/TechStack";

function ProjOverview({ projName }) {
  // Filter data relevant to the active project url link clicked
  let projDetails = ProjData.filter((data) => data.title === projName);

  const { description, title, techStack, imageURL, features, problems } =
    projDetails[0];

  return (
    <>
      <NavBar />
      <div className={Styles.header}>
        <div className={Styles["header-container"]}>
          <h1>{title}</h1>
          <img src={imageURL} alt={`${title} project screenshot`} />
          <p>{description}</p>
          <h3>Tech Stack</h3>
          <ul>
            {techStack.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3>Links</h3>
          <p>Sorry, a link will be available soon. The client is waiting for their mobile app to be published before going live. <span>Meanwhile, here are some screenshots for review...</span></p>
          <p>GitHub repository not available as per client request.</p>
        </div>
      </div>
      <div>
        <h2>Project Purpose & Deliverables</h2>
        <p>
          Project Navigation btns with links Next/Prev Make this a banner like
          the skills list section w/ a button for github and live link if
          available
        </p>
      </div>
      <div>
        <h2>Problems & Thought Process</h2>
        <p>
          Project Navigation btns with links Next/Prev Make this a banner like
          the skills list section w/ a button for github and live link if
          available
        </p>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default ProjOverview;
