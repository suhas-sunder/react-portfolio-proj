interface PropType {
  year: string;
  endYear?: string;
  projId: string;
  index: number;
}

export default function ProjectDates({
  year,
  endYear,
  projId,
  index,
}: PropType) {
  const separator =
    projId === "atsproj" || projId === "emeproj" ? "&" : "to";

  return (
    <div
      className={`absolute top-4 ${
        index % 2 !== 0 ? "right-4" : "left-4"
      } inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 shadow-sm backdrop-blur`}
      aria-label={
        endYear ? `Project date: ${year} ${separator} ${endYear}` : `Project date: ${year}`
      }
    >
      <span>{year}</span>

      {endYear && (
        <>
          <span className="text-slate-400">{separator}</span>
          <span>{endYear}</span>
        </>
      )}
    </div>
  );
}