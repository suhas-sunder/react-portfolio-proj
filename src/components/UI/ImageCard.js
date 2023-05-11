import React from "react";
import Styles from "./ImageCard.module.css";
import Button from "./Button";
import Screenshot from "../../assets/eme-website-screenshot.jpg";

function ImageCard() {
  return (
    <div className={Styles["img-card"]}>
    <img src={Screenshot} alt="website" className={Styles.img} />
      <div className={Styles["btn-background"]}>
        <Button
          text="project overview"
          type="project-link"
          logo="arrow"
          url={"www.google.com"}
        />
      </div>
    </div>
  );
}

export default ImageCard;
