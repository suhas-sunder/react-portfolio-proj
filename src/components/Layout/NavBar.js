import React from "react";
import Button from "../UI/Button";
import Styles from "./NavBar.module.css";

function NavBar() {
  let btnText = "resume";
  let btnType = "button";
  let btnLogo = "download"
  let url = "https://www.freecodecamp.org/news/content/images/2021/09/react---fontawesome-icon-1.jpg";

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
      <Button text={btnText} logo={btnLogo} type={btnType} url={url} />
    </nav>
  );
}

export default NavBar;
