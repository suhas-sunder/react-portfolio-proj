import React from "react";
import Styles from "./Header.module.css";
import Button from "../UI/Button";
import ProfilePic from "../../assets/profile_pic.jpg";

function Header() {
  return (
    <div className={Styles.header}>
      <img
        alt="head-shot of Suhas Sunder"
        src={ProfilePic}
        className={Styles["profile-img"]}
      />
      <div className={Styles.profile}>
        <h1>
          Hi, I'm Suhas <span className={Styles.highlight}>|</span> Front-end
          Developer
        </h1>
        <h3>I have a passion for learning, creating, and problem-solving.</h3>
        <p>
          About me. Here is some interesting information about me. Here is some
          interesting information about me. Here is some interesting information
          about me. Here is some interesting information about me.{" "}
          <span className={Styles.highlight}>View bio to learn more...</span>
        </p>
        <ul className={Styles.links}>
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
    </div>
  );
}

export default Header;
