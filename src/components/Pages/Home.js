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
      <header
        id="about"
        className="box-content flex flex-col justify-center items-center text-white bg-dark-blueish-gray lg:min-h-[100vh] pt-[10em] px-[1.5em] pb-[12em] lg:pb-[10vh] gap-5 lg:gap-[10em] lg:flex-row lg:pt-0"
      >
        <img
          alt="head-shot of Suhas Sunder"
          src={ProfilePic}
          className={`${Styles["profile-img"]} block rounded-full bg-cover border-[6px] border-highlight-yellow mb-[2em] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]`}
          height={300}
          width={300}
        />
        <div className="flex flex-col gap-8 max-w-[690px] leading-[2rem] text-base lg:text-lg text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center">
            Suhas Sunder{" "}
            <FontAwesomeIcon className="text-highlight-yellow" icon={code} />{" "}
            Software Developer
          </h1>
          <p>
            Professional Software Developer with a degree in{" "}
            <span
              onClick={handleModal}
              className="text-highlight-yellow cursor-pointer"
            >
              Electrical Engineering & Management.
            </span>{" "}
            My personal and work{" "}
            <span>
              <a
                href="#projects"
                className="text-highlight-yellow cursor-pointer"
              >
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
            Aside from programming, I play video games, exercise, and spend time
            with friends and family on fun activities such as archery,
            badminton, chess, and board games.
          </p>
          <ul className="grid lg:grid-cols-5 lg:gap-[4em] mt-10 gap-x-16 gap-y-12 grid-cols-3">
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
