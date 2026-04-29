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
      className="relative w-full overflow-x-hidden bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 sm:py-12 lg:px-10"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto flex w-full max-w-5xl min-w-0 flex-col gap-5">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            Technical profile
          </p>

          <h2
            id="skills-heading"
            className="text-sky-700 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Technical skills
          </h2>

          <p className="mt-2 text-base leading-7 text-slate-700">
            Tools and technologies I have used across frontend development,
            backend services, database workflows, API integrations, testing, and
            version control.
          </p>
        </div>

        <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <ExpandingListContainer
            customBtnStyle="border-t border-slate-200 bg-slate-100 py-3 text-sm font-semibold text-sky-700 transition hover:bg-slate-200 hover:text-sky-900"
            maxHeight="max-h-[21.5rem] sm:max-h-[23.5rem] md:max-h-[21.5rem] lg:max-h-[18rem]"
          >
            <ul className="grid w-full min-w-0 grid-cols-2 gap-3 p-3 sm:grid-cols-3 sm:gap-4 sm:p-5 lg:grid-cols-4 xl:grid-cols-5">
              {skillsData.map((data) => (
                <li
                  key={data.skill}
                  className="flex min-h-24 min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm"
                >
                  <FontAwesomeIcon
                    data-testid={`skill-icon-${data.skill}`}
                    icon={data.icon}
                    className="text-[1.7rem] text-sky-700 sm:text-[1.9rem]"
                  />

                  <span
                    data-testid={`skill-name-${data.skill}`}
                    className="block max-w-full truncate text-xs font-semibold text-slate-800 sm:text-sm"
                    title={data.skill}
                  >
                    {data.skill}
                  </span>
                </li>
              ))}
            </ul>
          </ExpandingListContainer>
        </div>
      </div>
    </section>
  );
}