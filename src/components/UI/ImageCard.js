import React from "react";
import Styles from "./ImageCard.module.css";
import Button from "./Button";

function ImageCard() {
  return (
    <div className={Styles.imageCard}>
      <img className={Styles.image} />
      <Button
        text="project overview"
        type="project-link"
        logo="arrow"
        url={"www.google.com"}
      />
    </div>
  );
}

export default ImageCard;
