import Styles from "./styles/Footer.module.css";
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
      className="flex flex-col bg-dark-blueish-gray text-white items-center  px-4"
    >
      <LogoButtonGroup />
      <p className={Styles.text}>
        &copy; 2023 <span className={Styles.highlight}>|</span> Designed & coded
        by
        <span>
          {" "}
          <Link
            data-testid="link"
            to="/"
            className={Styles.highlight}
            onClick={handleScroll}
          >
            Suhas Sunder
          </Link>
        </span>
        .
      </p>
    </footer>
  );
}

export default Footer;
