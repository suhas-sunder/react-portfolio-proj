import React from "react";
import Styles from "./Modal.module.css";
import uniLogoImg from "../../assets/ontariotechu-img.jpg";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark as closeIcon } from "@fortawesome/free-regular-svg-icons";

function Modal({ closeModal }) {
  return (
    <div className={Styles.background} onClick={() => closeModal()}>
      <div className={Styles.modal}>
        <FontAwesomeIcon icon={closeIcon} onClick={() => closeModal()}/>
        <h2>Education</h2>
        <img src={uniLogoImg} />
        <h3>Ontario Tech University </h3>
        <p>
          <span>B. Eng, Electrical Engineering and Management</span>
          <span>Graduated Apr 2019</span>
        </p>
        <div>
          <Button
            text="VIEW CAPSTONE PROJECT"
            type="logoLink"
            url="/#capstone"
            isHashLink={true}
            onClick={() => closeModal()}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
