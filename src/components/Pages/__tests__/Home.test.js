import { getAllByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";

const MockHome = ({ showModal }) => {
  return (
    <BrowserRouter>
      <Home showModal={showModal} />
    </BrowserRouter>
  );
};

const testHref = (elements, link) => {
  elements.forEach((element) => expect(element).toHaveAttribute("href", link));
};

describe("renders all page elements", () => {
  it("should render a header title text", () => {
    render(<MockHome showModal={false} />);
    const headerElement = screen.getByText(/Suhas Sunder Software Developer/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("should render a profile image", () => {
    render(<MockHome showModal={false} />);
    const imageElement = screen.getByAltText(/head-shot of Suhas Sunder/i);
    expect(imageElement).toBeInTheDocument();
  });

  it("should render list of 8 skills", () => {
    render(<MockHome showModal={false} />);
    const skillElements = screen.getAllByTestId(/skill-icon-/i);
    expect(skillElements).toHaveLength(8);
  });

  it("should render a summary of 4 projects", () => {
    render(<MockHome showModal={false} />);
    const projElements = screen.getAllByTestId(/proj-section/i);
    expect(projElements).toHaveLength(4);
  });

  it("should render a contact form with 4 input elements", () => {
    render(<MockHome showModal={false} />);
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
  });

  it("should render a footer element", () => {
    render(<MockHome showModal={false} />);
    const footerElement = screen.getByText(/2023 | Designed & coded by/i);
    expect(footerElement).toBeInTheDocument();
  });
});

describe("renders links/buttons with proper redirect/action", () => {
  it("should render two linkedin buttons in the document with proper links", () => {
    render(<MockHome showModal={false} />);
    const modalBtnElements = screen.getAllByTestId(/btn-link-linkedin/i);
    expect(modalBtnElements).toHaveLength(2);
    testHref(modalBtnElements, "https://www.linkedin.com/in/s-sunder/");
  });

  it("should render two github buttons in the document with proper links", () => {
    render(<MockHome showModal={false} />);
    const modalBtnElements = screen.getAllByTestId(/btn-link-github/i);
    expect(modalBtnElements).toHaveLength(2);
    testHref(modalBtnElements, "https://github.com/suhas-sunder");
  });

  it("should render two modal buttons in the document", () => {
    render(<MockHome showModal={false} />);
    const modalBtnElements = screen.getAllByTestId(/btn-link-education/i);
    expect(modalBtnElements).toHaveLength(2);
  });

  it("should render certificate linkedin buttons in the document with proper links", () => {
    render(<MockHome showModal={false} />);
    const modalBtnElements = screen.getAllByTestId(/btn-link-certificate/i);
    expect(modalBtnElements).toHaveLength(2);
    testHref(
      modalBtnElements,
      "https://www.linkedin.com/in/s-sunder/details/certifications/"
    );
  });

  it("should render two email buttons in the document with proper links", () => {
    render(<MockHome showModal={false} />);
    const modalBtnElements = screen.getAllByTestId(/btn-link-email/i);
    expect(modalBtnElements).toHaveLength(2);
    testHref(modalBtnElements, "/#contact");
  });

  it("should render a modal when modal state is true", () => {
    render(<MockHome showModal={true} />);
    let modalElement = screen.getByText(/Graduated: Apr 2019/i);
    expect(modalElement).toBeInTheDocument();
  });

  it("should include 4 project overview buttons", () => {
    render(<MockHome showModal={false} />);
    let projectElements = screen.getAllByText(/project overview/i);
    expect(projectElements).toHaveLength(4);
  });

  it("should render a submit button for contact form", () => {
    render(<MockHome showModal={false} />);
    const formElement = screen.getByRole("button", { name: /submit/i });
    expect(formElement).toBeInTheDocument();
  });

  it("should render an appropriate email link on contact form", () => {
    render(<MockHome showModal={false} />);
    const formElement = screen.getByRole("link", { name: /suhas@live.ca/i });
    expect(formElement).toBeInTheDocument();
    expect(formElement).toHaveAttribute("href", "mailto:suhas@live.ca");
  });

  it("should render an appropriate footer home link", () => {
    render(<MockHome showModal={false} />);
    const footerElement = screen.getByRole("link", { name: /suhas sunder/i });
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveAttribute("href", "/");
  });
});
