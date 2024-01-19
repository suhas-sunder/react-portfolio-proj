interface PropType {
  year: string;
  endYear?: string;
  index:number
}

export default function ProjectDates({ year, endYear, index}: PropType) {
  return (
    <div
      className={`${index % 2 !== 0 ? "lg:right-3 lg:rotate-[35deg]" : "lg:left-3 lg:-rotate-[35deg]"} flex flex-col border-4 border-white absolute bg-dark-blueish-gray rounded-full -top-20 text-white h-20 w-20 justify-center items-center tracking-widest p-4 text-sm gap-1`}
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
