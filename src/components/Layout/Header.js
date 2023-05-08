import React from "react";
import Styles from "./Header.module.css";
import Button from "../UI/Button";

function Header() {
  return (
    <div className={Styles.header}>
      <h1>Hi, I'm Suhas | Front-end Developer</h1>
      <h2>I love learning, building, & problem-solving. </h2>
      <p>About me. Here is some interesting information about me...</p>
      <div>Learn more about me...</div>
      <ul>
      <li>
          <Button text="" logo="linkedin" type="logoLink" url="https://www.linkedin.com/in/s-sunder/" target="_blank"/>
        </li>
        <li>
          <Button text="" logo="github" type="logoLink" url="https://github.com/suhas-sunder" target="_blank"/>
        </li>
        <li>
          <Button text="" logo="email" type="logoLink" url="#footer" />
        </li>
        <li>
          <Button text="" logo="info" type="logoLink" url="#footer" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
