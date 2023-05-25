import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown as downloadIcon } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin as linkedinIcon } from "@fortawesome/free-brands-svg-icons";
import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as emailIcon } from "@fortawesome/free-solid-svg-icons";
import { faAward as certificateIcon } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight as arrowIcon } from "@fortawesome/free-solid-svg-icons";
import { faS as logoIcon } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap as gradIcon } from "@fortawesome/free-solid-svg-icons";
import { faUpRightFromSquare as arrowUpIcon } from "@fortawesome/free-solid-svg-icons";
import Styles from "./Button.module.css";

function Button({ text, logo, type, url, target, isHashLink, onClick }) {
  // Object list of all font-awesome logos
  const logos = {
    download: downloadIcon,
    linkedin: linkedinIcon,
    github: githubIcon,
    email: emailIcon,
    certificates: certificateIcon,
    arrow: arrowIcon,
    homeLogo: logoIcon,
    education: gradIcon,
    arrowUp: arrowUpIcon,
  };

  // Text to be displayed on button
  const dispText = text && <span className={Styles.text}>{text}</span>;

  // Logo to be displayed on button
  const dispLogo = logo && (
    <FontAwesomeIcon icon={logos[logo]} className={Styles.icon} />
  );

  const handleClick = () => {
    // Scroll to top on new page load
    window.scroll({
      top: 0,
    });

    onClick && onClick();
  };

  const link = (
    <Link
      to={url}
      className={Styles[type]}
      target={target}
      onClick={handleClick}
    >
      {dispText}
      {dispLogo}
    </Link>
  );

  const anchorLink = (
    <HashLink
      to={url}
      className={Styles[type]}
      target={target}
      onClick={onClick}
      scroll={(el) => {
        // Offset y-coordinate by 200px up for all anchor links
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -140;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
      }}
    >
      {dispText}
      {dispLogo}
    </HashLink>
  );

  return isHashLink ? anchorLink : link;
}

export default Button;
