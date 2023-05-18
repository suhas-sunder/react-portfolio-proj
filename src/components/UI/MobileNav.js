import { React, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Button from "./Button";
import Styles from "./MobileNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS as logoIcon } from "@fortawesome/free-solid-svg-icons";
import { faBars as burgerIcon } from "@fortawesome/free-solid-svg-icons";
import { faX as xIcon } from "@fortawesome/free-solid-svg-icons";

function NavBar({ resumeImg, handleScroll }) {
  const [toggle, setToggle] = useState(true);

  // Handle burger menu toggle and page scroll behaviour 
  const handleBurgerMenu = (shouldToggle, shouldScroll) => {
    shouldToggle ? setToggle(!toggle) : setToggle(true);
    shouldScroll && handleScroll();
  };

  return (
    <>
      <div className={Styles["mobile-nav"]}>
        <Link
          to="/"
          className={Styles["home-link"]}
          onClick={() => handleBurgerMenu(false, true)}
        >
          <FontAwesomeIcon icon={logoIcon} className={Styles.logo} />
        </Link>
        {toggle && (
          <FontAwesomeIcon
            icon={burgerIcon}
            className={Styles.burger}
            onClick={() => handleBurgerMenu(true, false)}
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
          {/* <li>
            <a
              href="#about"
              className={Styles["nav-link"]}
              onClick={handleBurgerMenu}
            >
              About
            </a>
          </li> */}
          <li>
            <HashLink
              to="/#skills"
              className={Styles["nav-link"]}
              onClick={handleBurgerMenu}
            >
              Skills
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#projects"
              className={Styles["nav-link"]}
              onClick={handleBurgerMenu}
            >
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#contact"
              className={Styles["nav-link"]}
              onClick={handleBurgerMenu}
            >
              Contact
            </HashLink>
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
