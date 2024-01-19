import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare as arrowUpIcon } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight as arrowIcon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProjectDates from "../Layout/ProjectDates";

function ImageCard({ data, index }) {
  return (
    <div className="flex flex-col relative justify-evenly items-center bg-dark-blueish-gray text-white rounded-lg min-h-[24em] mx-auto">
      <ProjectDates year={data.year} endYear={data.endYear} index={index} />
      <h3 className={`${index % 2 === 0 ? "justify-end pr-14" : "justify-start pl-14"} flex w-full text-2xl leading-[1rem]`}>{data.title}</h3>
      <img
        width={350}
        height={196}
        src={data.imageURL}
        alt={`${data.projName} project screenshot`}
        className="flex lg:max-w-[350px]  mx-7 rounded-lg"
      />
      <div className="flex justify-evenly w-full items-center ">
        <Link
          to={data.projURL}
          className="flex justify-center items-center gap-3 px-4 py-3 bg-highlight-yellow text-dark-blueish-gray rounded-md font-semibold uppercase tracking-wider text-sm border-2 border-highlight-yellow hover:bg-dark-blueish-gray hover:text-highlight-yellow"
        >
          <span>View Live</span>
          <span>
            <FontAwesomeIcon icon={arrowUpIcon} className="flex" />
          </span>
        </Link>
        <Link
          to={data.projLink}
          className="flex justify-center items-center gap-3 px-4 py-3 bg-highlight-yellow text-dark-blueish-gray rounded-md  font-semibold uppercase tracking-wider text-sm border-2 border-highlight-yellow hover:bg-dark-blueish-gray hover:text-highlight-yellow"
        >
          <span>View Details</span>
          <span>
            <FontAwesomeIcon icon={arrowIcon} className="flex" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ImageCard;
