import React from "react";
import Button from "../UI/Button";
import Styles from "./NavBar.module.css";
import resumeImg from "../../assets/google_logo.jpg";

function NavBar() {
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.navList}>
        <li>
          <a href="#header" className={Styles.navLink}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={Styles.navLink}>
            About
          </a>
        </li>
        <li>
          <a href="#about" className={Styles.navLink}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className={Styles.navLink}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={Styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
      <Button
        text="resume"
        logo="download"
        type="downloadBtn"
        url={resumeImg}
        target="_blank"
      />
    </nav>
  );
}

export default NavBar;
