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
        className="box-content flex flex-col items-center justify-center gap-10 bg-slate-50 px-6 py-24 text-slate-900 sm:px-8 lg:py-28 xl:flex-row xl:gap-16 xl:px-12 xl:py-32"
      >
        <div className="relative flex shrink-0 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-sky-100 blur-2xl" />

          <img
            alt="Headshot of Suhas Sunder"
            src={ProfilePic}
            className="relative block h-[220px] w-[220px] rounded-full border border-slate-200 bg-white object-cover p-2 shadow-sm sm:h-[300px] sm:w-[300px]"
            height={300}
            width={300}
          />
        </div>

        <div className="flex max-w-[720px] flex-col gap-7 text-center text-base leading-8 sm:text-left lg:text-lg lg:leading-8">
          <div className="flex flex-col gap-4">
            <p className="mx-auto inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 sm:mx-0">
              Full-stack software developer
            </p>

            <h1 className="text-sky-700 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Suhas Sunder{" "}
              <FontAwesomeIcon className="text-sky-500" icon={code} />
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              I build practical web applications across frontend interfaces,
              backend services, API integrations, and relational data workflows.
            </p>
          </div>

          <div className="grid gap-4 text-slate-700">
            <p>
              Full-stack software developer with 3+ years of experience building
              and maintaining web applications in startup and project
              environments. My work focuses on reliable, maintainable software
              that supports real workflows.
            </p>

            <p>
              My{" "}
              <HashLink
                to="/#projects"
                className="cursor-pointer font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-900 hover:decoration-sky-600"
                scroll={(element) => handleScrollOffset(element)}
              >
                selected projects
              </HashLink>{" "}
              highlight professional and personal work across full-stack
              development, workflow tools, and technical problem solving.
            </p>

            <p>
              Outside of software development, I stay active with archery and
              the gym, and spend time on creative side projects.
            </p>
          </div>

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