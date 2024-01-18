import Styles from "./styles/ImageCard.module.css";
import Button from "../Navigation/ButtonLink";

function ImageCard({ imageURL, projLink, projName, projURL }) {
  return (
    <div className={Styles["img-card"]}>
      <img
        src={imageURL}
        alt={`${projName} project screenshot`}
        className={Styles.img}
      />
      <div className={Styles["btn-background"]}>
        <Button
          id="view-live"
          text="View Live"
          type="project-link"
          logo="download"
          url={projURL}
          target={"blank"}
        />
        <Button
          id="project-overview"
          text="view details"
          type="project-link"
          logo="arrow"
          url={projLink}
        />
      </div>
    </div>
  );
}

export default ImageCard;
