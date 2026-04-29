import projData from "../../data/ProjData";
import Styles from "./styles/ProjOverview.module.css";
import NavLinks from "../Navigation/NavLinks";
import ProjNavBar from "../Navigation/ProjNavBar";

interface ProjectDetails {
  title: string;
  imageURL: string;
  features: string[];
  projURL?: string;
  projGitHubURL?: string;
  challenges: string[];
}

interface PropType {
  projName: string;
}

function ProjOverview({ projName }: PropType) {
  const projDetails = projData.find(
    (data) => data.title === projName
  ) as ProjectDetails | undefined;

  if (!projDetails) {
    return (
      <>
        <header className="bg-slate-50 pt-20 pb-12 text-slate-900">
          <ProjNavBar Styles={Styles} projName={projName} />
        </header>

        <main className="bg-white px-6 py-20 text-slate-900">
          <section className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Project not found
            </p>

            <h1 className="text-sky-700 mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Project details unavailable
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-700">
              The selected project could not be found. Please return to the
              projects section and choose another project.
            </p>
          </section>
        </main>
      </>
    );
  }

  const { title, imageURL, features, projURL, projGitHubURL, challenges } =
    projDetails;

  const projectLinkText =
    projName === "Capstone SPArcDS" ? "View Demo Video" : "View Live";

  return (
    <>
      <header className="bg-slate-50 pt-20 pb-16 text-slate-900">
        <ProjNavBar Styles={Styles} projName={projName} />

        <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pt-10 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Project details
            </p>

            <h1 className="text-sky-700 mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              A closer look at the project features, implementation details,
              and technical challenges.
            </p>
          </div>

          <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src={imageURL}
              alt={`${title} project screenshot`}
              className="h-auto w-full object-cover"
            />
          </div>

          {(projURL || projGitHubURL) && (
            <div className="flex w-full flex-wrap items-center justify-center gap-4">
              {projURL && (
                <NavLinks
                  text={projectLinkText}
                  logo="arrowUp"
                  type="project-link"
                  url={projURL}
                  isHashLink={false}
                  target="_blank"
                />
              )}

              {projGitHubURL && (
                <NavLinks
                  text="View GitHub"
                  logo="github"
                  type="project-link"
                  url={projGitHubURL}
                  isHashLink={false}
                  target="_blank"
                />
              )}
            </div>
          )}
        </section>
      </header>

      <main className="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          <section
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
            aria-labelledby="proj-overview"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Overview
            </p>

            <h2
              id="proj-overview"
              className="text-sky-700 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Project Overview
            </h2>

            {features.length > 0 ? (
              <ul className="mt-6 grid gap-4 text-base leading-7 text-slate-700 sm:text-lg">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-[0.65rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg">
                No project overview details are currently available.
              </p>
            )}
          </section>

          {challenges.length > 0 && (
            <section
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
              aria-labelledby="proj-challenges"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Technical notes
              </p>

              <h2
                id="proj-challenges"
                className="text-sky-700 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Project Challenges
              </h2>

              <div className="mt-6 grid gap-4 text-base leading-7 text-slate-700 sm:text-lg">
                {challenges.map((challenge) => (
                  <p key={challenge}>{challenge}</p>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <div className="bg-white pb-10">
        <ProjNavBar Styles={Styles} projName={projName} />
      </div>
    </>
  );
}

export default ProjOverview;