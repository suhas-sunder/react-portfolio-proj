import { Link } from "react-router-dom";
import LogoButtonGroup from "../UI/LogoButtonGroup";

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
      <LogoButtonGroup />
      <div className="flex gap-2 pt-10 pb-6">
        <span>&copy; 2023 </span>
        <span className="text-highlight-yellow">|</span>
        <span>Designed & coded by</span>
        <span>
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
