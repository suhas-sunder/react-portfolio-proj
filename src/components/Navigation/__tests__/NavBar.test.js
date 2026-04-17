import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";
import { BrowserRouter } from "react-router-dom";

const MockNavBar = () => {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
};

const btnURL = [
  "/",
  "/#skills",
  "/#experience",
  "/#projects",
  "/#contact",
  "https://drive.google.com/file/d/1z6dohrhC-abm8A4o263mVjtBYkoRyOlJ/view?usp=sharing",
];

describe("nav elements render", () => {
  it("Should render a nav element", () => {
    render(<MockNavBar />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  it("Should render at least one link", () => {
    render(<MockNavBar />);
    const navElement = screen.getAllByRole("link");
    expect(navElement.length).toBeGreaterThan(0);
  });

  it("Should render 6 visible links", () => {
    render(<MockNavBar />);
    const navElement = screen.getAllByTestId(/btn-link-nav/i);
    expect(navElement).toHaveLength(6);
  });

  it("Should render links with appropriate url", () => {
    render(<MockNavBar />);
    const navElement = screen.getAllByTestId(/btn-link-nav/i);
    navElement.forEach((element, index) =>
      expect(element).toHaveAttribute("href", btnURL[index]),
    );
  });
});
