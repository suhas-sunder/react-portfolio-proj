import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp as arrow } from "@fortawesome/free-solid-svg-icons";

interface ToolTipProps {
  children: ReactNode;
  toolTipMsg: string;
}

function ToolTip({ children, toolTipMsg }: ToolTipProps) {
  return (
    <div className="group relative flex justify-center">
      <FontAwesomeIcon
        icon={arrow}
        className="absolute -bottom-[2.9rem] hidden text-3xl text-sky-300 opacity-0 group-hover:xl:flex group-hover:xl:opacity-100 group-hover:xl:transition-opacity"
      />

      <div className="absolute -bottom-20 hidden whitespace-nowrap rounded-lg bg-sky-300 px-4 py-2 text-sm font-bold text-slate-950 opacity-0 group-hover:xl:flex group-hover:xl:opacity-100 group-hover:xl:transition-opacity xl:px-5 xl:py-3 xl:text-base">
        {toolTipMsg}
      </div>

      {children}
    </div>
  );
}

export default ToolTip;