import React from "react";
import Styles from "./Header.module.css";
import Button from "../UI/Button";

function Header() {
  return (
    <div className={Styles.header}>
      <img alt="head-shot of Suhas Sunder" src="" />
      <div>
        <h1>
          Hi, I'm Suhas <span className={Styles.highlight}>|</span> Front-end
          Developer
        </h1>
        <h3>I have a passion for learning, creating, and problem-solving.</h3>
        <p>
          About me. Here is some interesting information about me. Here is some interesting information about me. Here is some
          interesting information about me. Here is some interesting information
          about me. <span className={Styles.highlight}>Learn more about me...</span>
        </p>
        
      </div>
      <ul>
        <li>
          <Button
            text=""
            logo="linkedin"
            type="logoLink"
            url="https://www.linkedin.com/in/s-sunder/"
            target="_blank"
          />
        </li>
        <li>
          <Button
            text=""
            logo="github"
            type="logoLink"
            url="https://github.com/suhas-sunder"
            target="_blank"
          />
        </li>
        <li>
          <Button text="" logo="email" type="logoLink" url="#footer" />
        </li>
        <li>
          <Button text="" logo="certificates" type="logoLink" url="#footer" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
