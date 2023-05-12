import { React, useState } from "react";
import Button from "./Button";
import Styles from "./MobileNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS as logoIcon } from "@fortawesome/free-solid-svg-icons";
import { faBars as burgerIcon } from "@fortawesome/free-solid-svg-icons";
import { faX as xIcon } from "@fortawesome/free-solid-svg-icons";

function NavBar({ resumeImg }) {
  const [toggle, setToggle] = useState(true);

  const handleMobileMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={Styles["mobile-nav"]}>
        <FontAwesomeIcon icon={logoIcon} className={Styles.logo} />
        {toggle && (
          <FontAwesomeIcon
            id="burger"
            icon={burgerIcon}
            className={Styles.burger}
            onClick={handleMobileMenu}
          />
        )}
        {!toggle && (
          <FontAwesomeIcon
            id="burger"
            icon={xIcon}
            className={Styles.burger}
            onClick={handleMobileMenu}
          />
        )}
      </div>
      {!toggle && (
        <ul className={Styles["nav-list"]}>
          <li>
            <a href="#header" className={Styles["nav-link"]}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={Styles["nav-link"]}>
              About
            </a>
          </li>
          <li>
            <a href="#about" className={Styles["nav-link"]}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={Styles["nav-link"]}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={Styles["nav-link"]}>
              Contact
            </a>
          </li>
          <li className={Styles["nav-btn"]}>
            <Button
              text="resume"
              logo="download"
              type="downloadBtn"
              url={resumeImg}
              target="_blank"
            />
          </li>
        </ul>
      )}
    </>
  );
}

export default NavBar;
