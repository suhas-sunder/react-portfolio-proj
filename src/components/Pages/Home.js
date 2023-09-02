import { React } from "react";
import NavBar from "../UI/NavBar";
import Skills from "../Layout/Skills";
import Projects from "../Layout/Projects";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";
import Styles from "./Home.module.css";
import Button from "../UI/LinkButton";
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
              Electrical Engineering and Management
            </span>{" "}
            from Ontario Tech University, who loves collaborating, creating,
            learning, and problem-solving. For instance, during my capstone
            project, I managed a team of three students while programming an
            Arduino Arc Fault detection system and mobile application, enabling
            real-time notifications through an SQL database.
          </p>
          <p className={Styles.description}>
            I am dedicated to continuous learning and have obtained
            certifications from FreeCodeCamp (Front End Developer Certification)
            and Harvard University (CS50 Introduction to Computer Science).
            Furthermore, I have undertaken a multitude of programming courses
            and projects, significantly expanding my expertise across various
            facets of software development.
          </p>
          <p className={Styles.description}>
            In addition to my passion for programming, I have a variety of
            interests including archery, badminton, drawing, gaming, exercise,
            and getting quality sleep.
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
