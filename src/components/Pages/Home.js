import React from "react";
import NavBar from "../UI/NavBar";
import Skills from "../Layout/Skills";
import Projects from "../Layout/Projects";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";
import Styles from "./Home.module.css";
import Button from "../UI/Button";
import ProfilePic from "../../assets/profile-pic.png";
import HomeBtnData from "../../data/HomeBtnData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode as code } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <NavBar />
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
            {HomeBtnData.map((data, index) => (
              <li key={index}>
                <Button
                  logo={data.logo}
                  type={data.type}
                  url={data.url}
                  target={data.target}
                  isHashLink={data.isHashLink}
                />
              </li>
            ))}
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
