import React from "react";
import Button from "./Button";
import Styles from "./NavBar.module.css";
import resumeImg from "../../assets/google_logo.jpg";
import MobileNav from "../UI/MobileNav";

function NavBar({ routePage }) {
  return (
    <nav className={Styles.nav}>
      <div className={Styles["nav-items"]}>
        <ul className={Styles["nav-list"]}>
          <li>
            <a
              href="#header"
              className={Styles["nav-link"]}
              onClick={() => routePage("home")}
            >
              Home
            </a>
          </li>
          <li>
            <div
              className={Styles["nav-link"]}
              onClick={() => routePage("home")}
            >
              About
            </div>
          </li>
          <li>
            <a href="#skills" className={Styles["nav-link"]}>
              Skills
            </a>
          </li>
          <li>
            <div
              className={Styles["nav-link"]}
              onClick={() => routePage("project")}
            >
              Projects
            </div>
          </li>
          <li>
            <a href="#contact" className={Styles["nav-link"]}>
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
      </div>
      <MobileNav id="mobile-nav" resumeImg={resumeImg} />
    </nav>
  );
}

export default NavBar;
