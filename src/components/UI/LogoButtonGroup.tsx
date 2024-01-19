import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin as linkedInIcon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as emailIcon } from "@fortawesome/free-solid-svg-icons";
import { faAward as certificateIcon } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap as gradIcon } from "@fortawesome/free-solid-svg-icons";

const btnData = [
  {
    id: "linkedin",
    logo: linkedInIcon,
    type: "logoLink",
    url: "https://www.linkedin.com/in/s-sunder/",
    target: "_blank",
  },
  {
    id: "github",
    logo: githubIcon,
    type: "logoLink",
    url: "https://github.com/suhas-sunder",
    target: "_blank",
  },
  {
    id: "education",
    logo: gradIcon,
    type: "logoLink",
    url: "https://ontariotechu.ca/",
    target: "_blank",
  },
  {
    id: "certificates",
    logo: certificateIcon,
    type: "logoLink",
    url: "https://www.linkedin.com/in/s-sunder/details/certifications/",
    target: "_blank",
  },
  {
    id: "email",
    logo: emailIcon,
    type: "logoLink",
    url: "/#contact",
    isHashLink: true,
  },
];

function LogoButtonGroup() {
  return (
    <ul className="grid lg:grid-cols-5 lg:gap-[2em] mt-10 sm:gap-x-24 gap-x-10 gap-y-14 grid-cols-2 sm:grid-cols-3 items-center w-full max-w-[700px]">
      {btnData.map((data) => (
        <li key={uuidv4()} className="m-auto">
          <Link
            to={data.url}
            className="flex justify-center items-center text-dark-blueish-gray w-16 h-12 text-3xl bg-highlight-yellow rounded-lg  hover:text-highlight-yellow hover:bg-dark-blueish-gray border-2 border-highlight-yellow"
          >
            <FontAwesomeIcon icon={data.logo} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LogoButtonGroup;
