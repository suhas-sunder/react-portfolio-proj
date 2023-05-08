import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown as downloadIcon } from "@fortawesome/free-solid-svg-icons";
import Styles from "./Button.module.css";

function Button({ text, type, url }) {
  // List of all font-awesome logos
  const logo = {
    download: downloadIcon,
  };

  // Text inside button or link
  let content = (
    <>
      {text && <span className={Styles.text}>{text}</span>}
      {logo && <FontAwesomeIcon icon={logo[type]} className={Styles.icon} />}
    </>
  );

  // Button for links 
  let linkElement = (
    <a href={url} className={Styles.button}>
      {content}
    </a>
  );
  
  // Download button
  let btnElement = (
    <button href={url} className={Styles.button}>
      {content}
    </button>
  );

  return type === "download" ? btnElement : linkElement;
}

export default Button;
