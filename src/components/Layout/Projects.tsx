import { useMemo } from "react";
import ProjData from "../../data/ProjData";

const EXPERIENCE_ITEMS = [
  {
    companyName: "Dobson Partners",
    location: "Toronto, ON",
    roleTitle: "Full-Stack Software Engineer",
    dateRange: "Oct 2023 – Jun 2025",
    highlights: [
      "Built and shipped a full-stack web app (React, TypeScript, Tailwind, Node, Express) supporting real estate workflows.",
      "Integrated Cloudinary + Stripe and delivered Prisma-backed services for PostgreSQL data access.",
    ],
  },
  {
    companyName: "ATS Group Inc.",
    location: "Toronto, ON",
    roleTitle: "Freelance Web Application Developer",
    dateRange: "Jan 2023 – Aug 2023",
    highlights: [
      "Refactored a web app and improved front-end architecture (React, TypeScript, Tailwind) while integrating REST APIs.",
      "Implemented automated testing with Jest + React Testing Library.",
    ],
  },
  {
    companyName: "EME Group Inc.",
    location: "Toronto, ON",
    roleTitle: "Freelance Web Developer",
    dateRange: "Nov 2022 – Dec 2022",
    highlights: [
      "Launched a mobile-responsive site and integrated the Google Maps API, contributing to increased inbound inquiries.",
      "Handled hosting, domain configuration, and ongoing site maintenance.",
    ],
  },
  {
    companyName: "ATS Group Inc.",
    location: "Toronto, ON",
    roleTitle: "Software Consulting Intern",
    dateRange: "Apr 2021 – Apr 2022",
    highlights: [
      "Supported planning and delivery for a large-scale software initiative through research, technical analysis, and stakeholder presentations.",
    ],
  },
];

const MAX_VISIBLE_TECH_TAGS = 6;

function normalizeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function getProjectLinks(project) {
  const liveDemoUrl = normalizeString(project?.projURL);
  const githubUrl = normalizeString(project?.projGitHubURL);

  return {
    liveDemoUrl,
    githubUrl,
    hasLiveDemo: Boolean(liveDemoUrl),
    hasGithub: Boolean(githubUrl),
  };
}

function formatYearRange(startYear, endYear) {
  const start = normalizeString(startYear);
  const end = normalizeString(endYear);

  if (!start && !end) return "";
  if (start && end && start !== end) return `${start} – ${end}`;
  return start || end;
}

function ProjectCard({ project }) {
  const title = normalizeString(project?.title);
  const description = normalizeString(project?.description);
  const imageUrl = normalizeString(project?.imageURL);

  const techTags = ensureArray(project?.techStack)
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

  return (
    <article
      onClick={handleCardClick}
      className={[
        "group rounded-2xl overflow-hidden",
        "border border-slate-300 bg-slate-900 shadow-sm",
        "transition",
        isClickable
          ? "cursor-pointer hover:border-slate-200"
          : "cursor-default",
        isClickable
          ? "focus-within:ring-2 focus-within:ring-highlight-yellow/25"
          : "",
        "grid grid-rows-[auto,1fr,auto]",
        "min-w-0",
      ].join(" ")}
      aria-label={isClickable ? `Open ${title}` : undefined}
    >
      <div className="relative min-w-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${title} preview`}
            className="h-40 sm:h-44 w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-40 sm:h-44 w-full bg-slate-800" />
        )}

        {yearLabel ? (
          <div className="absolute top-3 right-3 rounded-full bg-slate-950/85 text-slate-100 text-xs font-semibold px-3 py-1 border border-slate-700">
            {yearLabel}
          </div>
        ) : null}

        {isClickable ? (
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-slate-950/20" />
        ) : null}
      </div>

      <div className="p-4 min-w-0">
        <h3 className="text-base sm:text-lg font-semibold text-slate-100 leading-snug">
          {title}
        </h3>

        {description ? (
          <p className="mt-2 text-sm text-slate-300 leading-relaxed line-clamp-3">
            {description}
          </p>
        ) : null}

        {visibleTags.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2 min-w-0">
            {visibleTags.map((tag) => (
              <li
                key={`${title}-${tag}`}
                className={[
                  "text-[0.72rem] font-medium",
                  "px-2 py-1 rounded-full",
                  "bg-slate-950/30 text-slate-200",
                  "border border-slate-700/70",
                  // prevent long tags from blowing up width on mobile
                  "max-w-full truncate",
                ].join(" ")}
                title={tag}
              >
                {tag}
              </li>
            ))}

            {hiddenTagCount > 0 ? (
              <li className="text-[0.72rem] font-semibold px-2 py-1 rounded-full bg-slate-950/30 text-slate-300 border border-slate-700/70">
                +{hiddenTagCount}
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>

      {hasLiveDemo || hasGithub ? (
        <div className="px-4 pb-4 pt-0 flex flex-wrap gap-3 min-w-0">
          {hasLiveDemo ? (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={[
                "cursor-pointer inline-flex items-center justify-center",
                "rounded-lg px-4 py-2 text-sm font-semibold",
                "bg-highlight-yellow text-slate-900 border border-highlight-yellow",
                "hover:bg-slate-900 hover:text-highlight-yellow hover:border-highlight-yellow",
                "transition focus:outline-none focus:ring-2 focus:ring-highlight-yellow/25",
                // mobile: buttons shouldn't overflow
                "max-w-full",
              ].join(" ")}
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
              onClick={(e) => e.stopPropagation()}
              className={[
                "cursor-pointer inline-flex items-center justify-center",
                "rounded-lg px-4 py-2 text-sm font-semibold",
                "bg-slate-900 text-slate-100 border border-slate-700",
                "hover:border-highlight-yellow hover:text-highlight-yellow hover:bg-slate-950",
                "transition focus:outline-none focus:ring-2 focus:ring-highlight-yellow/25",
                "max-w-full",
              ].join(" ")}
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

function ExperienceItem({ experience }) {
  const highlights = ensureArray(experience?.highlights).filter(Boolean);

  return (
    <li className="py-5 sm:py-6 border-b border-slate-200/80 last:border-b-0 min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 min-w-0">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              {experience.companyName}
            </h3>
            <span className="text-slate-400">•</span>
            <span className="text-sm sm:text-base text-slate-700 font-medium">
              {experience.roleTitle}
            </span>
          </div>
          <div className="mt-1 text-sm text-slate-600">
            {experience.location}
          </div>
        </div>

        <div className="text-sm font-semibold text-slate-600 sm:text-right whitespace-nowrap">
          {experience.dateRange}
        </div>
      </div>

      {highlights.length > 0 ? (
        <ul className="mt-3 grid gap-2 text-sm sm:text-[0.95rem] text-slate-700 leading-relaxed min-w-0">
          {highlights.map((line) => (
            <li
              key={`${experience.companyName}-${line}`}
              className="flex gap-2 min-w-0"
            >
              <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
              <span className="min-w-0 break-words">{line}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function Work() {
  const projects = useMemo(() => ensureArray(ProjData).filter(Boolean), []);

  return (
    <section
      id="work"
      className="w-full bg-white text-slate-900"
      aria-label="Experience and Projects"
    >
      <div className="bg-slate-100 pb-8">
        {/* Key change: ensure no horizontal scroll + good mobile gutters */}
        <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-10 py-8 min-w-0 overflow-x-hidden">
          <div id="experience" className="mb-10 sm:mb-12">
            <div className="flex items-end justify-between gap-4 mb-4 sm:mb-5">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-slate-900">
                Experience
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm min-w-0">
              <ol className="px-4 sm:px-6 min-w-0">
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
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4 sm:mb-5">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-slate-900">
                Projects
              </h2>
            </div>

            {/* Mobile: 1 col, small tablets: 2 col, desktop: 3 col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 min-w-0">
              {projects.map((project) => (
                <ProjectCard
                  key={project?.id || project?.title}
                  project={project}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
