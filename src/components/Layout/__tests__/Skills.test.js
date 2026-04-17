import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "../Skills";

describe("renders skill elements", () => {
  it("should render a title", () => {
    render(<Skills />);
    const headingElement = screen.getByRole("heading", { name: /technical skills/i });
    expect(headingElement).toBeInTheDocument();
  });

  it("should render 19 skill items", () => {
    render(<Skills />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements.length).toBe(19);
  });

  it("should render a list of 19 icons", () => {
    render(<Skills />);
    const iconElements = screen.getAllByTestId(/skill-icon/i);
    expect(iconElements.length).toBe(19);
  });

  it("should render a list of 19 skill names", () => {
    render(<Skills />);
    const spanElements = screen.getAllByTestId(/skill-name/i);
    expect(spanElements.length).toBe(19);
  });
});