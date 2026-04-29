import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 as htmlIcon } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt as cssIcon } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs as jsIcon } from "@fortawesome/free-brands-svg-icons";
import { faSquareGit as gitIcon } from "@fortawesome/free-brands-svg-icons";
import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons";
import { faSass as sassIcon } from "@fortawesome/free-brands-svg-icons";
import { faReact as reactIcon } from "@fortawesome/free-brands-svg-icons";
import { faGitlab as gitlabIcon } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs as nodeIcon } from "@fortawesome/free-brands-svg-icons";
import { faDatabase as databaseIcon } from "@fortawesome/free-solid-svg-icons";
import ExpandingListContainer from "../UI/ExpandingListContainer";

export default function Skills() {
  const skillsData = [
    { icon: htmlIcon, skill: "HTML5" },
    { icon: cssIcon, skill: "CSS3" },
    { icon: cssIcon, skill: "Tailwind CSS" },
    { icon: sassIcon, skill: "SASS" },
    { icon: jsIcon, skill: "JavaScript" },
    { icon: jsIcon, skill: "TypeScript" },
    { icon: reactIcon, skill: "React" },
    { icon: reactIcon, skill: "Remix" },
    { icon: nodeIcon, skill: "Node" },
    { icon: nodeIcon, skill: "Express" },
    { icon: databaseIcon, skill: "PostgreSQL" },
    { icon: databaseIcon, skill: "Prisma" },
    { icon: reactIcon, skill: "Jest" },
    { icon: reactIcon, skill: "React Testing Library" },
    { icon: reactIcon, skill: "Vitest" },
    { icon: gitIcon, skill: "Git" },
    { icon: githubIcon, skill: "GitHub" },
    { icon: gitlabIcon, skill: "GitLab" },
    { icon: reactIcon, skill: "Postman API" },
  ];

  return (
    <section
      id="skills"
      className="relative flex w-full justify-center overflow-visible bg-slate-900 tracking-wider text-white"
      aria-labelledby="skills-heading"
    >
      <div className="relative flex w-full flex-col">
        <h2
          id="skills-heading"
          className="relative z-10 flex w-fit rounded-tr-lg bg-slate-900 px-6 pt-5 pb-4 text-lg font-semibold uppercase tracking-wide text-white sm:absolute sm:-top-[4.25rem] sm:left-0 sm:px-10 sm:pt-6 sm:pb-4 sm:text-3xl lg:px-12 lg:text-4xl"
        >
          Technical skills
        </h2>

        <ExpandingListContainer
          customBtnStyle="border-t border-slate-700 bg-slate-800 py-4 text-sm font-semibold text-sky-300 transition hover:bg-slate-700 hover:text-white"
          maxHeight="max-h-[12.7rem] sm:max-h-[14.4rem] md:max-h-[14.8rem] lg:max-h-[15.2rem]"
          buttonLabel="skills"
        >
          <ul className="grid grid-cols-2 gap-x-10 gap-y-10 px-6 pt-8 pb-6 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-12 md:grid-cols-5 md:gap-x-14 lg:gap-x-16">
            {skillsData.map((data) => (
              <li
                key={data.skill}
                className="flex min-w-0 flex-col items-center gap-4 text-center text-lg text-white"
              >
                <FontAwesomeIcon
                  data-testid={`skill-icon-${data.skill}`}
                  icon={data.icon}
                  className="flex text-[2.35rem] text-sky-300 sm:text-[2.65rem] lg:text-[2.8rem]"
                />

                <span
                  data-testid={`skill-name-${data.skill}`}
                  className="flex min-h-9 w-full max-w-[13rem] items-center justify-center rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-center text-xs font-semibold text-slate-100 sm:text-sm md:text-base"
                  title={data.skill}
                >
                  {data.skill}
                </span>
              </li>
            ))}
          </ul>
        </ExpandingListContainer>
      </div>
    </section>
  );
}
