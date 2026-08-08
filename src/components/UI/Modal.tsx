import Styles from "./styles/Modal.module.css";
import uniLogoImg from "../../assets/ontariotechu-img.jpg";
import Button from "../Navigation/NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark as closeIcon } from "@fortawesome/free-solid-svg-icons";
import EducationData from "../../data/EducationData";

function Modal({ closeModal }) {
  return (
    <>
      <div
        data-testid="modal"
        className={Styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="education-modal-title"
      >
        <button
          aria-label="close btn or x-icon btn"
          className={Styles["close-btn"]}
          onClick={() => closeModal()}
        >
          <FontAwesomeIcon icon={closeIcon} />
        </button>
        <h2 id="education-modal-title" className={Styles.title}>
          Education
        </h2>
        <a
          data-testid="img-link"
          aria-label="Ontario Tech University website"
          href="https://ontariotechu.ca/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={uniLogoImg}
            alt="Ontario Tech University Logo"
            className={Styles.img}
          />
        </a>
        <div className={Styles["education-list"]}>
          {EducationData.map((education) => (
            <section
              key={education.id}
              className={Styles["education-item"]}
              aria-labelledby={education.id}
            >
              <h3 id={education.id} className={Styles["degree-title"]}>
                {education.degree}
              </h3>

              <p className={Styles.institution}>{education.institution}</p>

              <div className={Styles["education-meta"]}>
                <span>{education.location}</span>
                <span>Graduated: {education.graduation}</span>
              </div>

              <ul className={Styles.highlights}>
                {education.highlights.map((highlight) => (
                  <li
                    key={`${education.id}-${highlight}`}
                    className={Styles.highlight}
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className={Styles["button-bkgd"]}>
          <Button
            id="capstone"
            text="Capstone Project"
            type="project-link"
            logo={"arrow"}
            url="/#capstone"
            isHashLink={true}
            onClick={() => closeModal()}
          />
        </div>
      </div>
      <div
        data-testid="bkgd-underlay"
        className={Styles.background}
        onClick={() => closeModal()}
      ></div>
    </>
  );
}

export default Modal;
