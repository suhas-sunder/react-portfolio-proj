import { useMemo } from "react";
import ProjData from "../../data/ProjData";

interface ExperienceItemType {
  companyName: string;
  location: string;
  roleTitle: string;
  dateRange: string;
  highlights: string[];
}

interface ProjectType {
  id?: string;
  title?: string;
  description?: string;
  imageURL?: string;
  techStack?: string[];
  year?: string;
  endYear?: string;
  projURL?: string;
  projGitHubURL?: string;
}

const EXPERIENCE_ITEMS: ExperienceItemType[] = [
  {
    companyName: "Dobson Partners (8906386 Canada Limited)",
    location: "Toronto, ON",
    roleTitle: "Software Engineer (Full-Stack)",
    dateRange: "Nov 2023 – Jun 2025",
    highlights: [
      "Developed a full-stack web application using React, TypeScript, Tailwind CSS, Node.js, and Express to support real estate workflows for landlords, tenants, and realtors.",
      "Built and contributed to a separate business management portal using Node.js, Express, Handlebars, and Tailwind CSS for client management, appointment scheduling, and messaging.",
      "Implemented back-end services using Prisma ORM and PostgreSQL to support relational data access across core application features, reduce duplicated query logic, and improve consistency across the codebase.",
      "Integrated RESTful APIs for media management and payment processing, enabling file uploads, media storage, and transactional workflows within the application.",
      "Worked in an agile development environment with engineering, design, and business stakeholders to clarify requirements, troubleshoot issues, and keep implementation aligned with product needs.",
    ],
  },
  {
    companyName: "ATS Group Inc.",
    location: "Toronto, ON",
    roleTitle: "Freelance Web Application Developer",
    dateRange: "Jan 2023 – Aug 2023",
    highlights: [
      "Collaborated with design and back-end teams to refactor a full-stack web application, integrate RESTful APIs, and improve front-end structure using React, TypeScript, and Tailwind CSS.",
      "Designed and developed a responsive, mobile-first client-facing website while working with management and the client to define requirements and reflect the company’s professional standards across devices.",
      "Established front-end structure using BEM methodology, improving consistency and maintainability across HTML, CSS, JavaScript, and SASS codebases.",
      "Implemented automated testing using Jest and React Testing Library to catch regressions in user-facing components, and identified and fixed accessibility issues using Google Search Console.",
    ],
  },
  {
    companyName: "EME Group Inc.",
    location: "Toronto, ON",
    roleTitle: "Freelance Web Developer",
    dateRange: "Nov 2022 – Dec 2022",
    highlights: [
      "Built and launched a mobile-responsive website establishing the client’s initial online presence, integrating HTML, CSS, JavaScript, SASS, and the Google Maps API, contributing to a 200%+ increase in inbound inquiries and engagement.",
      "Managed domain configuration, hosting, and ongoing site maintenance, ensuring continuous availability and reliable operation for over three years.",
    ],
  },
  {
    companyName: "ATS Group Inc.",
    location: "Toronto, ON",
    roleTitle: "Software Consulting Intern",
    dateRange: "Apr 2021 – Apr 2022",
    highlights: [
      "Conducted research and technical analysis to guide planning and execution of a large-scale software application, identifying technical risks early and informing key decisions that contributed to a successful product launch.",
      "Created mockups and animated interface concepts in Adobe Animate, along with interactive HTML, CSS, and JavaScript web demos, to communicate product ideas and support early-stage planning.",
      "Collaborated with entrepreneurs, software developers, and project planners to define requirements and shape execution strategies for software initiatives.",
      "Engineered and presented software design solutions to executive and technical stakeholders, helping align technical direction with business goals during project planning.",
    ],
  },
];

const MAX_VISIBLE_TECH_TAGS = 6;

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function ensureArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? value : [];
}

function getProjectLinks(project: ProjectType) {
  const liveDemoUrl = normalizeString(project?.projURL);
  const githubUrl = normalizeString(project?.projGitHubURL);

  return {
    liveDemoUrl,
    githubUrl,
    hasLiveDemo: Boolean(liveDemoUrl),
    hasGithub: Boolean(githubUrl),
  };
}

function formatYearRange(startYear: unknown, endYear: unknown) {
  const start = normalizeString(startYear);
  const end = normalizeString(endYear);

  if (!start && !end) return "";
  if (start && end && start !== end) return `${start} – ${end}`;
  return start || end;
}

function ProjectCard({ project }: { project: ProjectType }) {
  const title = normalizeString(project?.title);
  const description = normalizeString(project?.description);
  const imageUrl = normalizeString(project?.imageURL);

  const techTags = ensureArray<unknown>(project?.techStack)
    .map((tag) => normalizeString(tag))
    .filter(Boolean);

  const visibleTags = techTags.slice(0, MAX_VISIBLE_TECH_TAGS);
  const hiddenTagCount = Math.max(0, techTags.length - visibleTags.length);

  const yearLabel = formatYearRange(project?.year, project?.endYear);

  const { liveDemoUrl, githubUrl, hasLiveDemo, hasGithub } =
    getProjectLinks(project);

  return (
    <article className="flex min-w-0 max-w-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-400/70 hover:shadow-xl hover:shadow-slate-950/20">
      <div className="relative min-w-0 border-b border-slate-700 bg-slate-800">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${title} preview`}
            className="aspect-[16/9] w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex aspect-[16/9] w-full items-center justify-center bg-slate-800 px-4 text-center text-sm font-semibold text-slate-300">
            Project preview
          </div>
        )}

        {yearLabel ? (
          <div className="absolute top-3 right-3 max-w-[calc(100%-1.5rem)] rounded-full border border-slate-600 bg-slate-950/90 px-3 py-1 text-xs font-semibold text-slate-100 shadow-sm backdrop-blur">
            {yearLabel}
          </div>
        ) : null}

        <div className="pointer-events-none absolute inset-0 bg-slate-950/10" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-4">
        <h3 className="break-words text-base font-semibold leading-snug text-white sm:text-lg">
          {title}
        </h3>

        {description ? (
          <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-slate-300">
            {description}
          </p>
        ) : null}

        {visibleTags.length > 0 ? (
          <ul className="mt-3 flex min-w-0 flex-wrap gap-2">
            {visibleTags.map((tag) => (
              <li
                key={`${title}-${tag}`}
                className="max-w-full truncate rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-[0.72rem] font-semibold text-sky-200"
                title={tag}
              >
                {tag}
              </li>
            ))}

            {hiddenTagCount > 0 ? (
              <li className="rounded-full border border-slate-600 bg-slate-800 px-2.5 py-1 text-[0.72rem] font-semibold text-slate-300">
                +{hiddenTagCount}
              </li>
            ) : null}
          </ul>
        ) : null}

        {(hasLiveDemo || hasGithub) && (
          <div className="mt-auto flex min-w-0 flex-wrap gap-2.5 pt-4">
            {hasLiveDemo ? (
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex max-w-full cursor-pointer items-center justify-center rounded-lg border border-sky-500 bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-400 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                aria-label={`Open live demo for ${title}`}
              >
                Live Demo
              </a>
            ) : null}

            {hasGithub ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex max-w-full cursor-pointer items-center justify-center rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:bg-slate-950 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                aria-label={`Open GitHub repo for ${title}`}
              >
                GitHub
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}

function ExperienceItem({ experience }: { experience: ExperienceItemType }) {
  const highlights = ensureArray<string>(experience?.highlights).filter(
    Boolean,
  );

  return (
    <li className="min-w-0 border-b border-slate-200 py-4 last:border-b-0 sm:py-5">
      <div className="flex min-w-0 flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-1">
            <h3 className="break-words text-base font-semibold text-slate-900">
              {experience.companyName}
            </h3>

            <span className="hidden text-slate-400 sm:inline">•</span>

            <span className="break-words text-sm font-medium text-slate-700">
              {experience.roleTitle}
            </span>
          </div>

          <div className="mt-0.5 text-sm text-slate-600">
            {experience.location}
          </div>
        </div>

        <div className="text-sm font-semibold text-sky-700 sm:whitespace-nowrap sm:text-right">
          {experience.dateRange}
        </div>
      </div>

      {highlights.length > 0 ? (
        <ul className="mt-2.5 grid min-w-0 gap-1.5 text-sm leading-relaxed text-slate-700">
          {highlights.map((line) => (
            <li
              key={`${experience.companyName}-${line}`}
              className="flex min-w-0 gap-2"
            >
              <span className="mt-[0.45rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
              <span className="min-w-0 break-words">{line}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function Work() {
  const projects = useMemo(
    () => ensureArray<ProjectType>(ProjData).filter(Boolean),
    [],
  );

  return (
    <section
      id="work"
      className="w-full overflow-x-hidden bg-white text-slate-900"
      aria-label="Experience and Projects"
    >
      <div className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto w-full max-w-7xl min-w-0">
          <div id="experience">
            <div className="mb-4 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Professional background
              </p>

              <h2 className="text-sky-700 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Experience
              </h2>

              <p className="mt-2 text-base leading-7 text-slate-700">
                Relevant software engineering, freelance development, and
                technical project work across full-stack applications, client
                portals, responsive websites, and planning-stage software
                initiatives.
              </p>
            </div>

            <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <ol className="min-w-0 px-4 sm:px-5">
                {EXPERIENCE_ITEMS.map((experience) => (
                  <ExperienceItem
                    key={`${experience.companyName}-${experience.dateRange}`}
                    experience={experience}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-10"
      >
        <div className="mx-auto w-full max-w-7xl min-w-0">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">
              Selected work
            </p>

            <h2 className="text-sky-300 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Projects
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-300">
              Project examples showing practical implementation work, technical
              decision-making, and the tools used to build production-minded web
              applications.
            </p>
          </div>

          <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project?.id || project?.title}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}