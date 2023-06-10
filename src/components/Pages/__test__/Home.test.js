import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";
import App from "../../../App";
import { BrowserRouter } from "react-router-dom";

const MockHome = (showModal) => {
  return (
    <BrowserRouter>
      <Home showModal={showModal} />
    </BrowserRouter>
  );
};

const testHref = (elements, link) => {
  elements.forEach((element) => expect(element).toHaveAttribute("href", link));
};

describe("Header", () => {
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
});

describe("Links", () => {
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

  it("should display a modal", () => {
    render(<MockHome showModal={true} />);
    let modal = screen.getByText(/Graduated: Apr 2019/i);
    expect(modal).toBeInTheDocument();
  });
});
