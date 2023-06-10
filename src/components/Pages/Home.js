import { React } from "react";
import NavBar from "../UI/NavBar";
import Skills from "../Layout/Skills";
import Projects from "../Layout/Projects";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";
import Styles from "./Home.module.css";
import Button from "../UI/Button";
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
            I'm a curious, self-taught programmer with experience in front-end
            development and a passion for learning, creating, and
            problem-solving. Armed with a{" "}
            <span onClick={handleModal} className={Styles["text-link"]}>
              Bachelor of Engineering and Management
            </span>
            , I approach every project with a meticulous mindset, ensuring
            attention to detail and delivering high-quality results that meet
            the unique needs of my clients. Collaborative opportunities energize
            me, and I thrive on working with teams to bring ideas to life.
          </p>
          <p className={Styles.description}>
            In addition to my passion for programming, I have a variety of
            interests such as archery, badminton, drawing, reading, exercise,
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
