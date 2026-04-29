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
      className="relative w-full overflow-x-hidden bg-slate-900 text-white"
      aria-labelledby="skills-heading"
    >
      <div className="relative w-full">
        <div className="absolute left-0 top-0 z-10 -translate-y-full rounded-tr-lg border-t border-r border-slate-700 bg-slate-900 px-6 py-4 shadow-sm sm:px-10 sm:py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            Technical profile
          </p>

          <h2
            id="skills-heading"
            className="mt-1 text-xl font-semibold uppercase tracking-wide text-white sm:text-3xl"
          >
            Technical skills
          </h2>
        </div>

        <ExpandingListContainer
          customBtnStyle="border-t border-slate-700 bg-slate-800 py-4 text-sm font-semibold text-sky-300 transition hover:bg-slate-700 hover:text-white"
          maxHeight="max-h-64 md:max-h-72 lg:max-h-[16rem]"
          buttonLabel="skills"
        >
          <ul className="grid w-full min-w-0 grid-cols-2 gap-x-6 gap-y-10 px-4 pt-10 pb-8 sm:grid-cols-4 sm:gap-x-8 sm:px-8 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
            {skillsData.map((data) => (
              <li
                key={data.skill}
                className="flex min-w-0 flex-col items-center justify-start gap-4 text-center"
              >
                <FontAwesomeIcon
                  data-testid={`skill-icon-${data.skill}`}
                  icon={data.icon}
                  className="text-[2.35rem] text-sky-300 sm:text-[2.6rem]"
                />

                <span
                  data-testid={`skill-name-${data.skill}`}
                  className="flex min-h-10 w-full max-w-[11rem] items-center justify-center rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-center text-xs font-semibold text-slate-100 shadow-sm sm:text-sm"
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