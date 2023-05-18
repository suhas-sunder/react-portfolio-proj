import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Button from "./Button";
import Styles from "./NavBar.module.css";
import resumeImg from "../../assets/google_logo.jpg";
import MobileNav from "../UI/MobileNav";

function NavBar({ routePage }) {
  // Scroll to top of page on redirect
  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    console.log("true");
  };

  return (
    <nav className={Styles.nav}>
      <div className={Styles["nav-items"]}>
        <ul className={Styles["nav-list"]}>
          <li>
            <Link to="/" className={Styles["nav-link"]} onClick={handleScroll}>
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              to="/about"
              className={Styles["nav-link"]}
              onClick={handleScroll}
            >
              About
            </Link>
          </li> */}
          <li>
            <HashLink
              to="/#skills"
              className={Styles["nav-link"]}
              onClick={handleScroll}
            >
              Skills
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#projects"
              className={Styles["nav-link"]}
              onClick={handleScroll}
            >
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#contact"
              className={Styles["nav-link"]}
              onClick={handleScroll}
            >
              Contact
            </HashLink>
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
      <MobileNav
        id="mobile-nav"
        resumeImg={resumeImg}
        handleScroll={handleScroll}
      />
    </nav>
  );
}

export default NavBar;
