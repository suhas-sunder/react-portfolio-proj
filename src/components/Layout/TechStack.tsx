import ExpandingListContainer from "../UI/ExpandingListContainer";

interface TechStackProps {
  skillsList: string[];
}

function TechStack({ skillsList }: TechStackProps) {
  return (
    <ExpandingListContainer
      customBtnStyle="flex w-full cursor-pointer justify-center py-3 text-sm font-semibold text-sky-300 transition hover:text-white sm:hidden"
      maxHeight="max-h-44 sm:max-h-full"
      buttonLabel="technologies"
    >
      <ul className="flex w-full min-w-0 max-w-full flex-wrap gap-2 overflow-hidden text-sm">
        {skillsList.map((skill) => (
          <li
            key={skill}
            className="min-w-0 max-w-full rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1.5 text-center text-[0.72rem] font-semibold text-sky-200 shadow-sm"
            title={skill}
          >
            <span className="block max-w-[9rem] truncate">{skill}</span>
          </li>
        ))}
      </ul>
    </ExpandingListContainer>
  );
}

export default TechStack;