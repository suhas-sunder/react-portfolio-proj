import React from "react";
import Styles from "./ImageCard.module.css";
import Button from "./Button";

function ImageCard({ url, projLink }) {
  return (
    <div className={Styles["img-card"]}>
      <img src={url} alt="website" className={Styles.img} />
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
