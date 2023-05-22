import React from "react";
import Styles from "./ImageCard.module.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare as link } from "@fortawesome/free-solid-svg-icons";

function ImageCard({ imageURL, projLink,  projName, projURL }) {
  return (
    <div className={Styles["img-card"]}>
      <a
        className={Styles["img-link"]}
        href={projURL}
        rel="noreferrer"
        target="_blank"
      >
        <div className={Styles.overlay}>
          <span className={Styles["link-text"]}>
            {projName === "Capstone SPArcDS" ? "View Demo Video" : "View Live"}
          </span>
          <FontAwesomeIcon icon={link} />
        </div>
        <img
          src={imageURL}
          alt={`${projName} project screenshot`}
          className={Styles.img}
        />
      </a>
      <div className={Styles["btn-background"]}>
        <Button
          text="project overview"
          type="project-link"
          logo="arrow"
          url={projLink}
        />
      </div>
    </div>
  );
}

export default ImageCard;
