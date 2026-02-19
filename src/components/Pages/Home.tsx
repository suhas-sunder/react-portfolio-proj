import Skills from "../Layout/Skills";
import Projects from "../Layout/Projects";
import Contact from "../Form/Contact";
import ProfilePic from "../../assets/profile-pic.png";
import Modal from "../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode as code } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import LogoButtonGroup from "../Navigation/LogoButtonGroup";
import handleScrollOffset from "../utility/handleScrollOffset";

interface PropType {
  showModal: boolean;
  handleModal: () => void;
}

function Home({ handleModal, showModal }: PropType) {
  return (
    <>
      {showModal && <Modal closeModal={handleModal} />}
      <header
        id="about"
        className="box-content flex flex-col justify-center items-center text-white bg-dark-blueish-gray xl:min-h-[100dvh] pt-[10em] px-[2em] pb-[12em] xl:pb-[10dvh] gap-5 xl:gap-[10em] xl:flex-row xl:pt-0 "
      >
        <img
          alt="Headshot of Suhas Sunder"
          src={ProfilePic}
          className="block rounded-full bg-cover p-4 border-[6px] border-highlight-yellow mb-[2em] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
          height={300}
          width={300}
        />

        <div className="flex flex-col gap-8 max-w-[690px] text-base lg:text-lg text-center sm:text-left tracking-wider leading-loose lg:leading-loose">
          <h1 className="text-2xl sm:text-3xl lg:text-[2.15rem] text-center">
            Suhas Sunder{" "}
            <FontAwesomeIcon className="text-highlight-yellow" icon={code} />{" "}
            Software Engineer
          </h1>

          <p className="block">
            Full-stack software engineer focused on building production web apps
            in startup environments.{" "}
            <span className="sm:inline hidden">
              I work across user-facing features and API integrations,
            </span>{" "}
            <span className="sm:inline hidden">
              <HashLink
                to="/#skills"
                className="text-highlight-yellow cursor-pointer"
                scroll={(el) => handleScrollOffset(el)}
              >
                using modern web technologies
              </HashLink>
            </span>{" "}
            to ship reliable, maintainable software.
          </p>

          <p>
            <span>
              <HashLink
                to="/#projects"
                className="text-highlight-yellow cursor-pointer"
                scroll={(el) => handleScrollOffset(el)}
              >
                Selected projects
              </HashLink>
            </span>
            <span className="hidden sm:inline">
              , both personal and professional,
            </span>{" "}
            that highlight what I’ve built and shipped.
          </p>

          <p>
            Outside of coding, I stay active with archery and the gym, and spend
            time on creative side projects.
          </p>

          <LogoButtonGroup showToolTip={true} />
        </div>
      </header>

      <main>
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </main>
    </>
  );
}

export default Home;
