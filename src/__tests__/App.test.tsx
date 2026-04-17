import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

const mockApp = () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
};

beforeEach(() => {
  mockApp();
});

const testHref = (elements, link) => {
  elements.forEach((element) => expect(element).toHaveAttribute("href", link));
};

describe("renders all page elements", () => {
  it("should render a footer element", () => {
    const footerElement = screen.getByText(/Designed & coded by/i);
    expect(footerElement).toBeInTheDocument();
  });

  it("should render Suhas Sunder text in the document", () => {
    const footerTextElements = screen.getAllByText(/suhas sunder/i);
    expect(footerTextElements.length).toBeGreaterThan(0);
  });

  it("should render a footer source link", () => {
    const sourceLink = screen.getByRole("link", { name: /view source/i });
    expect(sourceLink).toBeInTheDocument();
    expect(sourceLink).toHaveAttribute(
      "href",
      "https://github.com/suhas-sunder/react-portfolio-proj",
    );
  });

  it("should render two email buttons in the document with proper links", () => {
    const modalBtnElements = screen.getAllByTestId(/email/i);
    expect(modalBtnElements).toHaveLength(2);
    testHref(modalBtnElements, "/#contact");
  });
});
