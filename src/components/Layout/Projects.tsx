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

  const primaryLink = hasLiveDemo ? liveDemoUrl : hasGithub ? githubUrl : "";
  const isClickable = Boolean(primaryLink);

  const handleCardClick = () => {
    if (!isClickable) return;
    window.open(primaryLink, "_blank", "noreferrer");
  };

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!isClickable) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.open(primaryLink, "_blank", "noreferrer");
    }
  };

  return (
    <article
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? "link" : undefined}
      className={[
        "group grid min-w-0 grid-rows-[auto,1fr,auto] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition",
        isClickable
          ? "cursor-pointer hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500/30"
          : "cursor-default",
      ].join(" ")}
      aria-label={isClickable ? `Open ${title}` : undefined}
    >
      <div className="relative min-w-0 border-b border-slate-200 bg-slate-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${title} preview`}
            className="h-40 w-full object-cover sm:h-44"
            loading="lazy"
          />
        ) : (
          <div className="flex h-40 w-full items-center justify-center bg-slate-100 text-sm font-semibold text-slate-500 sm:h-44">
            Project preview
          </div>
        )}

        {yearLabel ? (
          <div className="absolute top-3 right-3 rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            {yearLabel}
          </div>
        ) : null}

        {isClickable ? (
          <div className="pointer-events-none absolute inset-0 bg-sky-950/10 opacity-0 transition group-hover:opacity-100" />
        ) : null}
      </div>

      <div className="min-w-0 p-4">
        <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
          {title}
        </h3>

        {description ? (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-700">
            {description}
          </p>
        ) : null}

        {visibleTags.length > 0 ? (
          <ul className="mt-3 flex min-w-0 flex-wrap gap-2">
            {visibleTags.map((tag) => (
              <li
                key={`${title}-${tag}`}
                className="max-w-full truncate rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-[0.72rem] font-semibold text-sky-800"
                title={tag}
              >
                {tag}
              </li>
            ))}

            {hiddenTagCount > 0 ? (
              <li className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.72rem] font-semibold text-slate-600">
                +{hiddenTagCount}
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>

      {hasLiveDemo || hasGithub ? (
        <div className="flex min-w-0 flex-wrap gap-3 px-4 pt-0 pb-4">
          {hasLiveDemo ? (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              onKeyDown={(event) => event.stopPropagation()}
              className="inline-flex max-w-full cursor-pointer items-center justify-center rounded-lg border border-sky-600 bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-700 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
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
              onClick={(event) => event.stopPropagation()}
              onKeyDown={(event) => event.stopPropagation()}
              className="inline-flex max-w-full cursor-pointer items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
              aria-label={`Open GitHub repo for ${title}`}
            >
              GitHub
            </a>
          ) : null}
        </div>
      ) : (
        <div className="px-4 pb-4" />
      )}
    </article>
  );
}

function ExperienceItem({ experience }: { experience: ExperienceItemType }) {
  const highlights = ensureArray<string>(experience?.highlights).filter(Boolean);

  return (
    <li className="min-w-0 border-b border-slate-200 py-5 last:border-b-0 sm:py-6">
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              {experience.companyName}
            </h3>

            <span className="hidden text-slate-400 sm:inline">•</span>

            <span className="text-sm font-medium text-slate-700 sm:text-base">
              {experience.roleTitle}
            </span>
          </div>

          <div className="mt-1 text-sm text-slate-600">
            {experience.location}
          </div>
        </div>

        <div className="whitespace-nowrap text-sm font-semibold text-sky-700 sm:text-right">
          {experience.dateRange}
        </div>
      </div>

      {highlights.length > 0 ? (
        <ul className="mt-3 grid min-w-0 gap-2 text-sm leading-relaxed text-slate-700 sm:text-[0.95rem]">
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
    []
  );

  return (
    <section
      id="work"
      className="w-full bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-10"
      aria-label="Experience and Projects"
    >
      <div className="mx-auto max-w-7xl min-w-0 overflow-x-hidden">
        <div id="experience" className="mb-12 sm:mb-16">
          <div className="mb-5 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Professional background
            </p>

            <h2 className="text-sky-700 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Experience
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-700">
              Relevant software engineering, freelance development, and
              technical project work across full-stack applications, client
              portals, responsive websites, and planning-stage software
              initiatives.
            </p>
          </div>

          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <ol className="min-w-0 px-4 sm:px-6">
              {EXPERIENCE_ITEMS.map((experience) => (
                <ExperienceItem
                  key={`${experience.companyName}-${experience.dateRange}`}
                  experience={experience}
                />
              ))}
            </ol>
          </div>
        </div>

        <div id="projects">
          <div className="mb-5 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Selected work
            </p>

            <h2 className="text-sky-700 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Projects
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-700">
              Project examples showing practical implementation work, technical
              decision-making, and the tools used to build production-minded web
              applications.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
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