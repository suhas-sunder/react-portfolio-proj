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
import handleScrollOffset from "../utility/handleScrollOffset";

function Home({ handleModal, showModal }) {
  return (
    <>
      {showModal && <Modal closeModal={handleModal} />}
      <header
        id="about"
        className="box-content flex flex-col justify-center items-center text-white bg-dark-blueish-gray lg:min-h-[100dvh] pt-[10em] px-[2em] pb-[12em] lg:pb-[10dvh] gap-5 lg:gap-[10em] lg:flex-row lg:pt-0"
      >
        <img
          alt="head-shot of Suhas Sunder wearing a suit"
          src={ProfilePic}
          className={`${Styles["profile-img"]} block rounded-full bg-cover border-[6px] border-highlight-yellow mb-[2em] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]`}
          height={300}
          width={300}
        />
        <div className="flex flex-col gap-8 max-w-[690px] text-base lg:text-lg text-center sm:text-left tracking-wider leading-loose lg:leading-loose">
          <h1 className="text-2xl sm:text-3xl lg:text-[2.15rem] text-center">
            Suhas Sunder{" "}
            <FontAwesomeIcon className="text-highlight-yellow" icon={code} />{" "}
            Software Developer
          </h1>
          <p className="block">
            Full-Stack Software Developer with a degree in Electrical
            Engineering and Management.{" "}
            <span className="sm:inline hidden">
              I have over two years of professional programming experience,
            </span>{" "}
            <span className="sm:inline hidden">
              <HashLink
                to="/#skills"
                className="text-highlight-yellow"
                scroll={(el) => handleScrollOffset(el)}
              >
                leveraging various technologies
              </HashLink>
            </span>{" "}
            to build websites and web applications.
          </p>
          <p>
            <span>
              <HashLink
                to="/#projects"
                className="text-highlight-yellow cursor-pointer"
                scroll={(el) => handleScrollOffset(el)}
              >
                My projects
              </HashLink>
            </span>
            <span className="hidden sm:inline">
              , both personal and professional,
            </span>{" "}
            are a testament to my passion for creating, collaborating, and
            problem-solving.
          </p>
          <p>
            Apart from coding, I like exercising and working on creative
            projects in my free time. I also enjoy spending quality time with
            friends and family, be it through archery, badminton, video games,
            board games, and more.
          </p>
          <LogoButtonGroup />
        </div>
      </header>
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
