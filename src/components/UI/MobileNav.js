import { React, useState } from "react";
import Button from "./Button";
import Styles from "./MobileNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser as logoIcon } from "@fortawesome/free-solid-svg-icons";
import { faBars as burgerIcon } from "@fortawesome/free-solid-svg-icons";
import { faX as xIcon } from "@fortawesome/free-solid-svg-icons";

function NavBar({ resumeImg }) {
  const [toggle, setToggle] = useState(true);

  // Close burger menu and toggle burger icon
  const handleBurgerMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={Styles["mobile-nav"]}>
        <a href="#header" className={Styles["home-link"]} onClick={() => setToggle(true)}>
          <FontAwesomeIcon icon={logoIcon} className={Styles.logo} />
        </a>
        {toggle && (
          <FontAwesomeIcon
            icon={burgerIcon}
            className={Styles.burger}
            onClick={handleBurgerMenu}
          />
        )}
        {!toggle && (
          <FontAwesomeIcon
            icon={xIcon}
            className={Styles.burger}
            onClick={handleBurgerMenu}
          />
        )}
      </div>
      {!toggle && (
        <ul id="burger-menu" className={Styles["nav-list"]}>
          <li>
            <a
              href="#about"
              className={Styles["nav-link"]}
              onClick={handleBurgerMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={Styles["nav-link"]}
              onClick={handleBurgerMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={Styles["nav-link"]}
              onClick={handleBurgerMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={Styles["nav-link"]}
              onClick={handleBurgerMenu}
            >
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
