import Skills from "../Layout/Skills";
import Projects from "../Layout/Projects";
import Education from "../Layout/Education";
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
        className="bg-slate-950 px-5 pt-12 pb-14 text-white sm:px-8 sm:pt-14 sm:pb-24 lg:px-12 lg:pt-16 lg:pb-28 xl:px-16 xl:pt-20"
      >
        <div className="mx-auto grid w-full max-w-[82rem] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(240px,0.34fr)_minmax(0,0.66fr)] lg:gap-14 xl:gap-20">
          <div className="flex w-full justify-center lg:pt-1">
            <div className="w-full max-w-[14rem] overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm sm:max-w-[16rem] lg:max-w-[19rem] xl:max-w-[20rem]">
              <img
                alt="Headshot of Suhas Sunder"
                src={ProfilePic}
                className="block aspect-[4/5] w-full object-cover object-center"
                height={400}
                width={400}
              />
            </div>
          </div>

          <div className="flex min-w-0 max-w-[48rem] flex-col text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300 sm:text-sm">
              Full-stack software developer
            </p>

            <h1 className="mt-3 text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-[2.4rem] lg:text-[2.35rem] xl:text-[2.55rem]">
              Suhas Sunder{" "}
              <FontAwesomeIcon
                className="mx-1 inline-block text-[0.85em] text-sky-300"
                icon={code}
              />{" "}
              Software Developer
            </h1>

            <div className="mt-6 grid max-w-[45rem] gap-3 text-base leading-7 text-slate-200 lg:text-[1.03rem] lg:leading-8">
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
                  className="cursor-pointer rounded-sm font-semibold text-sky-300 underline decoration-sky-500/60 underline-offset-4 transition hover:text-sky-200 hover:decoration-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  scroll={(element) => handleScrollOffset(element)}
                >
                  Selected projects
                </HashLink>{" "}
                from my professional and personal work highlight the systems,
                features, and technical solutions I have built.
              </p>

              <p className="text-slate-400">
                Outside of software development, I stay active with archery and
                the gym, and spend time on creative side projects.
              </p>
            </div>

            <div className="mt-7 border-t border-slate-800 pt-5">
              <LogoButtonGroup showToolTip={true} variant="hero" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default Home;
