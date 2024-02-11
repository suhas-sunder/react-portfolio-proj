import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp as arrow } from "@fortawesome/free-solid-svg-icons";

function ToolTip({ children, toolTipMsg }) {
  return (
    <div className="group flex relative justify-center">
      <FontAwesomeIcon
        icon={arrow}
        className="group-hover:xl:flex group-hover:xl:opacity-100 group-hover:xl:transition-opacity hidden opacity-0 absolute text-3xl text-highlight-yellow -bottom-[2.9rem]"
      />
      <div className="group-hover:xl:flex group-hover:xl:opacity-100 group-hover:xl:transition-opacity hidden opacity-0 absolute -bottom-20 whitespace-nowrap bg-highlight-yellow text-gray-800 font-bold text-sm xl:text-base xl:px-5 px-4 py-2 xl:py-3 rounded-lg">
        {toolTipMsg}
      </div>
      {children}
    </div>
  );
}

export default ToolTip;
