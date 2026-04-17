import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";

const MockFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

const expectedUrls = [
  "https://www.linkedin.com/in/s-sunder/",
  "https://github.com/suhas-sunder",
  "https://www.linkedin.com/in/s-sunder/details/education/",
  "https://www.linkedin.com/in/s-sunder/details/certifications/",
  "/#contact",
  "https://github.com/suhas-sunder/react-portfolio-proj",
];

describe("Footer", () => {
  it("renders footer with paragraph text", () => {
    render(<MockFooter />);
    expect(screen.getByText(/Designed & coded by/i)).toBeInTheDocument();
  });

  it("renders the Suhas Sunder text", () => {
    render(<MockFooter />);
    const textElement = screen.getByText(/suhas sunder/i);
    expect(textElement).toBeInTheDocument();
  });

  it("renders all expected footer links", () => {
    render(<MockFooter />);
    const linkElements = screen.getAllByRole("link");

    const hrefs = linkElements.map((link) => link.getAttribute("href"));

    expectedUrls.forEach((url) => {
      expect(hrefs).toContain(url);
    });
  });

  it("renders at least the expected number of links", () => {
    render(<MockFooter />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBeGreaterThanOrEqual(expectedUrls.length);
  });
});
