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
      className="relative w-full bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-10"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
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

          <p className="mt-3 text-base leading-7 text-slate-700">
            Tools and technologies I have used across frontend development,
            backend services, database workflows, API integrations, testing, and
            version control.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
          <ExpandingListContainer
            customBtnStyle="flex w-full cursor-pointer justify-center border-t border-slate-200 bg-slate-100 py-4 text-sm font-semibold text-sky-700 transition hover:bg-slate-200 hover:text-sky-900"
            maxHeight="max-h-72 md:max-h-80 lg:max-h-[22rem]"
          >
            <ul className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 sm:p-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {skillsData.map((data) => (
                <li
                  key={data.skill}
                  className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                >
                  <FontAwesomeIcon
                    data-testid={`skill-icon-${data.skill}`}
                    icon={data.icon}
                    className="text-[2rem] text-sky-700"
                  />

                  <span
                    data-testid={`skill-name-${data.skill}`}
                    className="text-sm font-semibold text-slate-800"
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
