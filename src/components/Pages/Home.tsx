import Skills from "../Layout/Skills";
import Projects from "../Layout/Projects";
import Contact from "../Form/Contact";
import Footer from "../Layout/Footer";
import Styles from "./styles/Home.module.css";
import ProfilePic from "../../assets/profile-pic.png";
import Modal from "../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode as code } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import LogoButtonGroup from "../UI/LogoButtonGroup";

function Home({ handleModal, showModal }) {
  return (
    <>
      {showModal && <Modal closeModal={handleModal} />}
      <header
        id="about"
        className="box-content flex flex-col justify-center items-center text-white bg-dark-blueish-gray lg:min-h-[100vh] pt-[10em] px-[2em] pb-[12em] lg:pb-[10vh] gap-5 lg:gap-[10em] lg:flex-row lg:pt-0"
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
          <p className="block">
            Full-Stack Software Developer with a degree in{" "}
            <span className="inline cursor-pointer">
              <HashLink to="/#skills" className="text-highlight-yellow">
                Electrical Engineering & Management
              </HashLink>
            </span>{" "}
            <span className="sm:inline hidden">
              and over three years of professional programming experience{" "}
            </span>
            <span className="sm:inline hidden">
              <HashLink to="/#skills" className="text-highlight-yellow">
                utilizing various technologies
              </HashLink>
            </span>
            .
          </p>
          <p>
            My{" "}
            <span>
              <HashLink
                to="/#projects"
                className="text-highlight-yellow cursor-pointer"
              >
                {" "}
                projects
              </HashLink>
            </span>
            <span className="hidden sm:inline">
              , both persoal and work,
            </span>{" "}
            are an embodiment of my love for creating, collaborating, and
            problem-solving.{" "}
            <span className="hidden sm:inline">
              I am happiest when I'm coding!
            </span>
          </p>
          {/* <p className={Styles.description}>
            I'm dedicated to continuous learning and have obtained
            certifications from FreeCodeCamp (Front End Developer Certification)
            and Harvard University (CS50 Introduction to Computer Science).
          </p> */}
          <p className={Styles.description}>
            I also enjoy exercising, working on creative personal projects, and
            spending time with friends and family on fun activities such as
            archery, badminton, video games, and board games.
          </p>
          <LogoButtonGroup />
        </div>
      </header>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
