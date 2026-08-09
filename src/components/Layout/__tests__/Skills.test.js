import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "../Skills";

describe("renders skill elements", () => {
  it("should render a title", () => {
    render(<Skills />);
    const headingElement = screen.getByRole("heading", {
      name: /technical skills/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("should render 25 skill items", () => {
    render(<Skills />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements.length).toBe(25);
  });

  it("should render a list of 25 icons", () => {
    render(<Skills />);
    const iconElements = screen.getAllByTestId(/skill-icon/i);
    expect(iconElements.length).toBe(25);
  });

  it("should render a list of 25 skill names", () => {
    render(<Skills />);
    const spanElements = screen.getAllByTestId(/skill-name/i);
    expect(spanElements.length).toBe(25);
  });

  it("should reflect the current resume skills and technologies", () => {
    render(<Skills />);

    [
      "Python",
      "Responsive Web Development",
      "Flask",
      "RESTful APIs",
      "MySQL",
      "Prisma ORM",
      "pgAdmin",
      "Cloudflare CDN",
      "Cloudflare R2",
    ].forEach((skill) => {
      expect(screen.getByTestId(`skill-name-${skill}`)).toBeInTheDocument();
    });
  });
});
