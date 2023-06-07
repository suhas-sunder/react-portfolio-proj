import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "../Skills";

describe("Skills", () => {
  it("should render a title", () => {
    render(<Skills />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  it("should render 8 skill items", () => {
    render(<Skills />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements.length).toBe(8);
  });

  it("should render a list of 8 icons", () => {
    render(<Skills />);
    const iconElements = screen.getAllByTestId(/skill-icon/i);
    expect(iconElements.length).toBe(8);
  });

  it("should render a list of 8 skill names", () => {
    render(<Skills />);
    const spanElements = screen.getAllByTestId(/skill-name/i);
    expect(spanElements.length).toBe(8);
  });
});
