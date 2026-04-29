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
        className="box-content bg-slate-50 px-6 pt-14 pb-12 text-slate-900 sm:px-8 sm:pt-16 sm:pb-14 xl:px-12"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-12 xl:px-12 xl:py-10">
          <div className="flex w-full justify-center">
            <div className="rounded-full border border-slate-200 bg-slate-100 p-3 shadow-sm">
              <img
                alt="Headshot of Suhas Sunder"
                src={ProfilePic}
                className="block h-[200px] w-[200px] rounded-full border border-white bg-white object-cover shadow-sm sm:h-[260px] sm:w-[260px]"
                height={260}
                width={260}
              />
            </div>
          </div>

          <div className="flex max-w-[760px] flex-col text-center sm:text-left">
            <p className="mx-auto inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800 sm:mx-0">
              Full-stack software developer
            </p>

            <h1 className="text-sky-800 mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.45rem] lg:leading-[1.08]">
              Suhas Sunder{" "}
              <FontAwesomeIcon className="text-sky-600" icon={code} />{" "}
              Software Developer
            </h1>

            <div className="mt-5 grid gap-3 text-base leading-7 text-slate-800 lg:text-[1.03rem] lg:leading-8">
              <p>
                Full-stack software developer with 3+ years of experience
                building and maintaining web applications in startup and project
                environments. I work across frontend development, backend
                services, API integrations, and relational data workflows to
                deliver reliable, maintainable software.
              </p>

              <p>
                <HashLink
                  to="/#projects"
                  className="cursor-pointer font-semibold text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-950 hover:decoration-sky-700"
                  scroll={(element) => handleScrollOffset(element)}
                >
                  Selected projects
                </HashLink>{" "}
                from my professional and personal work highlight the systems,
                features, and technical solutions I have built.
              </p>

              <p>
                Outside of software development, I stay active with archery and
                the gym, and spend time on creative side projects.
              </p>
            </div>

            <div className="mt-7">
              <LogoButtonGroup showToolTip={true} />
            </div>
          </div>
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