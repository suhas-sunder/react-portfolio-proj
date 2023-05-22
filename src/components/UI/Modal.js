import React from "react";
import Styles from "./Modal.module.css";
import uniLogoImg from "../../assets/ontariotechu-img.jpg";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark as closeIcon } from "@fortawesome/free-solid-svg-icons";

function Modal({ closeModal }) {
  return (
    <>
      <div className={Styles.modal}>
        <FontAwesomeIcon
          icon={closeIcon}
          className={Styles["close-btn"]}
          onClick={() => closeModal()}
        />
        <h2 className={Styles.title}>Education</h2>
        <a href="https://ontariotechu.ca/" rel="noreferrer" target="_blank">
          <img
            src={uniLogoImg}
            alt="Ontario Tech University Logo"
            className={Styles.img}
          />
        </a>
        <h3 className={Styles["sub-title"]}>Ontario Tech University </h3>
        <p className={Styles.details}>
          B. Eng, Electrical Engineering & Management (Honours)
        </p>
        <p className={Styles.details}>Location: Oshawa, ON</p>
        <p className={Styles.details}>Graduated: Apr 2019</p>
        <div className={Styles["button-bkgd"]}>
          <Button
            text="University Capstone Project"
            type="project-link"
            logo={"arrow"}
            url="/#capstone"
            isHashLink={true}
            onClick={() => closeModal()}
          />
        </div>
      </div>
      <div className={Styles.background} onClick={() => closeModal()}></div>
    </>
  );
}

export default Modal;
