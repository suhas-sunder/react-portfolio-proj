import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";
import Modal from "../../UI/Modal";

const MockFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

const checkURL = [
  "https://www.linkedin.com/in/s-sunder/",
  "https://github.com/suhas-sunder",
  "/",
  "https://www.linkedin.com/in/s-sunder/details/certifications/",
  "/#contact",
  "/",
];

describe("Footer", () => {
  it("should render footer with paragraph text", () => {
    render(<MockFooter />);
    const textElement = screen.getByText(
      /© 2023 | Designed & coded by Suhas Sunder./i
    );
    expect(textElement).toBeInTheDocument();
  });

  it("should render an embedded text link with appropriate text", () => {
    render(<MockFooter />);
    const linkElement = screen.getByTestId("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent(/suhas sunder/i);
  });

  it("should render 6 links total with appropriate redirects", () => {
    render(<MockFooter />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(6);
    linkElements.map((linkElement, index) =>
      expect(linkElement).toHaveAttribute("href", checkURL.at(index))
    );
  });
});
