import { useMemo } from "react";
import ProjData from "../../data/ProjData";

interface ExperienceRoleType {
  title: string;
  dateRange: string;
}

interface ExperienceItemType {
  companyName: string;
  location: string;
  roles: ExperienceRoleType[];
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
    roles: [
      {
        title: "Full-Stack Software Developer",
        dateRange: "Nov 2023 – Mar 2024 | Oct 2024 – Jun 2025",
      },
    ],
    highlights: [
      "Built and delivered full-stack platform features for landlords, tenants, and realtors using React, TypeScript, Remix, Node.js, and Express, covering document management, messaging, identity verification, media uploads, and transaction workflows.",
      "Tested, troubleshot, and refined features in a production environment based on issues and feedback from early-access users, management, marketing, and real estate industry investors.",
      "Designed Prisma ORM data models and PostgreSQL schemas for users, documents, messages, and verification records, supporting consistent data storage and reliable CRUD operations.",
      "Developed workflows connecting React interfaces to backend services through RESTful APIs, enabling multi-step verification, document management, messaging, authentication, Cloudinary media uploads, and Stripe payment processing.",
      "Translated UI/UX wireframes and evolving requirements from management, marketing, investors, and early-access users into reusable React and Tailwind CSS components for client-facing interfaces.",
      "Managed assigned development work through OpenProject by completing tickets, documenting work delivered for each milestone, and participating in weekly meetings with developers, management, and marketing to review progress, resolve issues, and prioritize product improvements.",
    ],
  },
  {
    companyName: "ATS Group Inc.",
    location: "Toronto, ON",
    roles: [
      {
        title: "Full-Stack Web Application Developer (Freelance)",
        dateRange: "Jan 2023 – Aug 2023",
      },
      {
        title: "Software Consulting Intern",
        dateRange: "Apr 2021 – Apr 2022",
      },
    ],
    highlights: [
      "Raised post-release client feedback scores from 3/5 to 5/5 by identifying major usability pain points with management and clients, then delivering targeted UI/UX improvements across facilities maintenance workflows.",
      "Refactored features in a full-stack facilities maintenance platform using React, TypeScript, Tailwind CSS, and RESTful APIs, improving usability across employee records, maintenance history, charting, and data visualization workflows.",
      "Designed, developed, and deployed a mobile-first client-facing website for All Track System using HTML, CSS, JavaScript, and Sass, owning implementation end-to-end and deploying through AWS CloudFront and Amazon S3.",
      "Improved front-end quality by implementing automated tests with Jest and React Testing Library and resolving user-facing usability issues identified through Google Search Console.",
      "Built HTML, CSS, and JavaScript prototypes to test facilities management workflows and communicate product concepts to technical and non-technical stakeholders.",
      "Helped define core platform features including GPS tracking, Google Maps API integration, proof-of-work submissions, repair status updates, and role-based access controls.",
      "Led demos, technical presentations, and team meetings to align executives, developers, planners, and clients on product direction.",
    ],
  },
  {
    companyName: "EME Group Inc.",
    location: "Toronto, ON",
    roles: [
      {
        title: "Web Developer (Freelance)",
        dateRange: "Nov 2022 – Dec 2022",
      },
    ],
    highlights: [
      "Drove a 200%+ increase in inbound inquiries by building and launching EME Group’s first client-facing website in over 20 years.",
      "Developed a mobile-responsive website using HTML, CSS, JavaScript, Sass, and the Google Maps API, improving the company’s online visibility and making location/contact information easier for clients to access.",
      "Continue to manage domain configuration, hosting, and site maintenance, supporting reliable website availability since its launch.",
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
  const roles = ensureArray<ExperienceRoleType>(experience?.roles).filter(
    Boolean,
  );
  const highlights = ensureArray<string>(experience?.highlights).filter(
    Boolean,
  );

  return (
    <li className="min-w-0 border-b border-slate-200 py-4 last:border-b-0 sm:py-5">
      <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="break-words text-base font-semibold text-slate-900">
          {experience.companyName}
        </h3>

        <div className="shrink-0 text-sm text-slate-600 sm:text-right">
          {experience.location}
        </div>
      </div>

      {roles.length > 0 ? (
        <ul className="mt-2 grid min-w-0 gap-1.5">
          {roles.map((role) => (
            <li
              key={`${experience.companyName}-${role.title}-${role.dateRange}`}
              className="grid min-w-0 gap-0.5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
            >
              <span className="min-w-0 break-words text-sm font-medium text-slate-700">
                {role.title}
              </span>
              <span className="text-sm font-semibold text-sky-700 sm:whitespace-nowrap sm:text-right">
                {role.dateRange}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

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
      <div className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
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

            <ol className="mt-4 min-w-0">
              {EXPERIENCE_ITEMS.map((experience) => (
                <ExperienceItem
                  key={experience.companyName}
                  experience={experience}
                />
              ))}
            </ol>
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
