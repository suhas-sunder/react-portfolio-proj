import ExpandingListContainer from "../UI/ExpandingListContainer";

interface TechStackProps {
  skillsList: string[];
}

function TechStack({ skillsList }: TechStackProps) {
  return (
    <ExpandingListContainer
      customBtnStyle="flex cursor-pointer py-3 text-sm font-semibold text-sky-700 transition hover:text-sky-900 sm:hidden"
      maxHeight="max-h-44 sm:max-h-full"
    >
      <ul className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skillsList.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold text-slate-700 shadow-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </ExpandingListContainer>
  );
}

export default TechStack;