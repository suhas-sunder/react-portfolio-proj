import { React } from "react";
import Skills from "../Layout/Skills";
import Projects from "../Layout/Projects";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";
import Styles from "./Home.module.css";
import Button from "../Navigation/ButtonLink";
import HomeBtnData from "../../data/HomeBtnData";
import ProfilePic from "../../assets/profile-pic.png";
import Modal from "../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode as code } from "@fortawesome/free-solid-svg-icons";

function Home({ handleModal, showModal }) {
  return (
    <>
      {showModal && <Modal closeModal={handleModal} />}
      <header id="about" className={Styles.header}>
        <img
          alt="head-shot of Suhas Sunder"
          src={ProfilePic}
          className={Styles["profile-img"]}
        />
        <div className={Styles.profile}>
          <h1 className={Styles.title}>
            Suhas Sunder{" "}
            <FontAwesomeIcon className={Styles.highlight} icon={code} />{" "}
            Software Developer
          </h1>
          <p className={Styles.description}>
            Professional Software Developer with a degree in{" "}
            <span onClick={handleModal} className={Styles["text-link"]}>
              Electrical Engineering & Management.
            </span>{" "}
            My personal and work{" "}
            <span>
              <a href="#projects" className={Styles["text-link"]}>
                {" "}
                projects
              </a>
            </span>{" "}
            are an embodiment of my love for creating, collaborating, and
            problem-solving. I am happiest when I'm programming!
          </p>
          <p className={Styles.description}>
            I'm dedicated to continuous learning and have obtained
            certifications from FreeCodeCamp (Front End Developer Certification)
            and Harvard University (CS50 Introduction to Computer Science).
          </p>
          <p className={Styles.description}>
            Aside from programming, I play video games, exercise, and spend time with friends and family on fun activities
            such as archery, badminton, chess, and board games.
          </p>
          <ul className={Styles.links}>
            {HomeBtnData.map((data, index) => (
              <li key={index}>
                {data.onClick ? (
                  <Button {...data} onClick={handleModal} />
                ) : (
                  <Button {...data} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
      <Skills />
      <Projects />
      <Contact />
      <Footer handleModal={handleModal} />
    </>
  );
}

export default Home;
