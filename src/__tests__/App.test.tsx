import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

const mockApp = () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
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

  it("should render an appropriate footer link with redirect back to home page", () => {
    const footerElement = screen.getByRole("link", { name: /suhas sunder/i });
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveAttribute("href", "/");
  });

  it("should render two email buttons in the document with proper links", () => {
    const modalBtnElements = screen.getAllByTestId(/email/i);
    expect(modalBtnElements).toHaveLength(2);
    testHref(modalBtnElements, "/#contact");
  });
});
