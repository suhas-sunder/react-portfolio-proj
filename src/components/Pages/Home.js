import React from "react";
import NavBar from "../UI/NavBar";
import Skills from "../Layout/Skills";
import Projects from "../Layout/Projects";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";
import Styles from "./Home.module.css";
import Button from "../UI/Button";
import ProfilePic from "../../assets/profile-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode as code } from "@fortawesome/free-solid-svg-icons";

function Home({ routePage }) {
  return (
    <>
      <NavBar routePage={routePage} />
      <div id="about" className={Styles.header}>
        <img
          alt="head-shot of Suhas Sunder"
          src={ProfilePic}
          className={Styles["profile-img"]}
        />
        <div className={Styles.profile}>
          <h1 className={Styles.title}>
            Suhas Sunder{" "}
            <FontAwesomeIcon className={Styles.highlight} icon={code} />{" "}
            Front-end Developer
          </h1>
          <h3 className={Styles["sub-title"]}>
            A creative soul driven by a passion for learning and
            problem-solving.
          </h3>
          <p className={Styles.description}>
            I'm a curiosity-driven web developer with an unwavering passion for
            learning, creating, and problem-solving. My meticulous nature
            ensures that I sweat the details, paying careful attention to every
            client and project need. When programming, my goal is to always
            deliver clean, semantic, and accessible code that enhances user
            experiences. I thrive on collaborative opportunities, eagerly
            engaging in teamwork to bring projects to life.
            <span className={Styles.highlight}>
              {" "}
              View my bio to learn more...
            </span>
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
              <Button
                text=""
                logo="certificates"
                type="logoLink"
                url="https://www.linkedin.com/in/s-sunder/details/certifications/"
                target="_blank"
              />
            </li>
          </ul>
        </div>
      </div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
