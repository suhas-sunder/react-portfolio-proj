import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown as downloadIcon } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin as linkedinIcon } from "@fortawesome/free-brands-svg-icons";
import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as emailIcon } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo as infoIcon } from "@fortawesome/free-solid-svg-icons";
import Styles from "./Button.module.css";

function Button({ text, logo, type, url, target }) {
  // List of all font-awesome logos
  const logos = {
    download: downloadIcon,
    linkedin: linkedinIcon,
    github: githubIcon,
    email: emailIcon,
    info: infoIcon,
  };

  // Text inside button or link
  let content = (
    <>
      {text && <span className={Styles.text}>{text}</span>}
      {type !== "link" && (
        <FontAwesomeIcon icon={logos[logo]} className={Styles.icon} />
      )}
    </>
  );
console.log(type)
  // Button for links
  let linkElement = (
    <a href={url} className={Styles[type]} target={target}>
      {content}
    </a>
  );

  // Download button
  let btnElement = (
    <button href={url} className={Styles[type]}>
      {content}
    </button>
  );

  return type === "button" ? btnElement : linkElement;
}

export default Button;
