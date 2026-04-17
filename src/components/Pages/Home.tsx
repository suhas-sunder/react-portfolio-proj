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
        className="box-content flex flex-col items-center justify-center gap-5 bg-dark-blueish-gray px-[2em] pt-[10em] pb-[12em] text-white xl:min-h-[100dvh] xl:flex-row xl:gap-[10em] xl:pt-0 xl:pb-[10dvh]"
      >
        <img
          alt="Headshot of Suhas Sunder"
          src={ProfilePic}
          className="mb-[2em] block h-[200px] w-[200px] rounded-full border-[6px] border-highlight-yellow bg-cover p-4 sm:h-[300px] sm:w-[300px]"
          height={300}
          width={300}
        />

        <div className="flex max-w-[690px] flex-col gap-8 text-center text-base leading-loose tracking-wider sm:text-left lg:text-lg lg:leading-loose">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-[2.15rem]">
            Suhas Sunder{" "}
            <FontAwesomeIcon className="text-highlight-yellow" icon={code} />{" "}
            Software Developer
          </h1>

          <p className="block">
            Full-stack software developer with 3+ years of experience building
            and maintaining web applications in startup and project
            environments. I work across frontend development, backend services,
            API integrations, and relational data workflows to deliver reliable,
            maintainable software.
          </p>

          <p>
            <HashLink
              to="/#projects"
              className="text-highlight-yellow cursor-pointer"
              scroll={(element) => handleScrollOffset(element)}
            >
              Selected projects
            </HashLink>{" "}
            from my professional and personal work highlight the systems,
            features, and technical solutions I have built.
          </p>

          <p>
            Outside of software development, I stay active with archery and the
            gym, and spend time on creative side projects.
          </p>

          <LogoButtonGroup showToolTip={true} />
        </div>
      </header>

      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Home;
