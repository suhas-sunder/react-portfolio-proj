import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare as arrowUpIcon } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight as arrowIcon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ImageCard({ imageURL, projLink, projName, projURL }) {
  return (
    <div className="flex flex-col justify-evenly items-center bg-dark-blueish-gray text-white rounded-lg">
      
      <h3 className="text-2xl leading-4">{projName}</h3>
      <img
        width={400}
        height={225}
        src={imageURL}
        alt={`${projName} project screenshot`}
        className="flex max-w-[400px] mx-8 rounded-lg"
      />
      <div className="flex justify-evenly w-full items-center ">
        <Link
          to={projURL}
          className="flex justify-center items-center gap-3 px-4 py-3 bg-highlight-yellow text-dark-blueish-gray rounded-md font-semibold uppercase tracking-wider text-sm border-2 border-highlight-yellow hover:bg-dark-blueish-gray hover:text-highlight-yellow"
        >
          <span>View Live</span>
          <span>
            <FontAwesomeIcon icon={arrowUpIcon} className="flex" />
          </span>
        </Link>
        <Link
          to={projLink}
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
