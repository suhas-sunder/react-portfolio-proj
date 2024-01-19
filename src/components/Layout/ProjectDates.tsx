interface PropType {
  year: string;
  endYear?: string;
  index: number;
}

export default function ProjectDates({ year, endYear, index }: PropType) {
  return (
    <div
      className={`${
        index % 2 === 0 && !endYear
          ? "-rotate-[45deg] -left-12"
          : "rotate-[45deg] -right-12"
      } ${endYear ? "flex-col p-4 gap-1 text-sm -top-16" : "text-base p-2"} ${
        endYear && index % 2 === 0 ? "-left-16 -rotate-[45deg]" : "-right-16"
      } flex border-4 border-white absolute bg-dark-blueish-gray rounded-full -top-12 text-white h-20 w-20 justify-center items-center tracking-widest`}
    >
      <span className="">{year}</span>
      {endYear && (
        <>
          <span>to</span>
          <span>{endYear}</span>
        </>
      )}
    </div>
  );
}
