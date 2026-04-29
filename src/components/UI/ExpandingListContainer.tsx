import { ReactNode, useState } from "react";
import { faAnglesDown as arrowsDown } from "@fortawesome/free-solid-svg-icons";
import { faAnglesUp as arrowsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ExpandingListContainerProps {
  children: ReactNode;
  customBtnStyle?: string;
  maxHeight: string;
  buttonLabel?: string;
}

function ExpandingListContainer({
  children,
  customBtnStyle = "",
  maxHeight,
  buttonLabel = "skills",
}: ExpandingListContainerProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <div
        className={`${
          isExpanded ? "max-h-[9999px]" : maxHeight
        } mx-auto w-full min-w-0 overflow-hidden transition-[max-height] duration-300 ease-in-out`}
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => setIsExpanded((currentState) => !currentState)}
        aria-expanded={isExpanded}
        className={`${customBtnStyle} flex w-full cursor-pointer items-center justify-center gap-3 rounded-b-2xl`}
      >
        <span>{isExpanded ? "Hide" : "Show all"} {buttonLabel}</span>

        <FontAwesomeIcon
          data-testid={
            isExpanded ? "expand-skills-up" : "expand-skills-down"
          }
          icon={isExpanded ? arrowsUp : arrowsDown}
          className="text-xs"
        />
      </button>
    </>
  );
}

export default ExpandingListContainer;