import { Link } from "react-router-dom";
import LogoButtonGroup from "../Navigation/LogoButtonGroup";

function Footer() {
  // Scroll to top of page on redirect
  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="flex flex-col bg-dark-blueish-gray text-white items-center px-4 pt-2"
    >
      <LogoButtonGroup showToolTip={false} />
      <div className="flex justify-center items-center gap-2 pt-10 pb-6 ">
        <span className="whitespace-nowrap">&copy; 2023 </span>
        <span className=" whitespace-nowrap text-highlight-yellow">|</span>
        <span className="hidden sm:inline whitespace-nowrap">
          Designed & coded by
        </span>
        <span className="whitespace-nowrap">
          <Link
            data-testid="link"
            to="/"
            className="text-highlight-yellow cursor-pointer"
            onClick={handleScroll}
          >
            Suhas Sunder
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
