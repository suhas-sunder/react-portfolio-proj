import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface PropType {
  data: {
    id: string;
    toolTipMsg: string;
    logo: IconDefinition;
    type: string;
    url: string;
    target?: string;
    isHashLink?: boolean;
  };
}

function LogoButtons({ data }: PropType) {
  return (
    <>
      {data.isHashLink ? (
        <HashLink
          to={data.url}
          className="flex justify-center items-center text-dark-blueish-gray w-16 h-12 text-3xl bg-highlight-yellow rounded-lg  hover:text-highlight-yellow hover:bg-dark-blueish-gray border-2 border-highlight-yellow"
        >
          <FontAwesomeIcon icon={data.logo} />
        </HashLink>
      ) : (
        <Link
          to={data.url}
          aria-label={data.id}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center text-dark-blueish-gray w-16 h-12 text-3xl bg-highlight-yellow rounded-lg  hover:text-highlight-yellow hover:bg-dark-blueish-gray border-2 border-highlight-yellow"
        >
          <FontAwesomeIcon icon={data.logo} />
        </Link>
      )}
    </>
  );
}

export default LogoButtons;
