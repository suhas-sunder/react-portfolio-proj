import EducationData from "../../data/EducationData";

export default function Education() {
  return (
    <section
      id="education"
      className="w-full bg-white px-4 py-14 text-slate-900 sm:px-6 sm:py-16 lg:px-10"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Academic background
        </p>

        <h2
          id="education-heading"
          className="mt-2 text-2xl font-semibold tracking-tight text-sky-700 sm:text-3xl"
        >
          Education
        </h2>

        <div className="mt-6">
          {EducationData.map((education) => (
            <article
              key={education.id}
              className="border-t border-slate-200 py-6 first:border-t-0 first:pt-0 last:pb-0"
              aria-labelledby={`${education.id}-title`}
            >
              <div className="grid min-w-0 gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-8">
                <div className="min-w-0">
                  <h3
                    id={`${education.id}-title`}
                    className="break-words text-lg font-semibold leading-snug text-slate-900 sm:text-xl"
                  >
                    {education.degree}
                  </h3>

                  <p className="mt-1 font-semibold text-sky-700">
                    {education.institution}
                  </p>

                  <p className="mt-0.5 text-sm text-slate-600">
                    {education.location}
                  </p>
                </div>

                <p className="text-sm font-semibold text-sky-700 md:whitespace-nowrap md:text-right">
                  Graduated: {education.graduation}
                </p>
              </div>

              <ul className="mt-4 grid min-w-0 gap-2 text-sm leading-relaxed text-slate-700">
                {education.highlights.map((highlight) => (
                  <li
                    key={`${education.id}-${highlight}`}
                    className="flex min-w-0 gap-2"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500"
                    />
                    <span className="min-w-0 break-words">{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
