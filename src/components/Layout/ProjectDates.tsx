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
  return (
    <div
      className={`${
        index % 2 !== 0
          ? "-right-6 sm:right-3 rotate-[35deg]"
          : "-left-6 sm:left-3 -rotate-[35deg]"
      } flex flex-col border-4 border-white absolute bg-dark-blueish-gray rounded-full -top-12 sm:-top-20 text-white h-20 w-20 justify-center items-center tracking-widest sm:p-4 text-[0.6rem] sm:text-sm gap-1`}
    >
      <span className="">{year}</span>
      {endYear && (
        <>
          <span>
            {projId === "atsproj" || projId === "emeproj" ? "&" : "to"}
          </span>
          <span>{endYear}</span>
        </>
      )}
    </div>
  );
}
