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
    "/projects/AllTrackSystem",
    "/#contact",
    "https://drive.google.com/file/d/1FMej8K-ZoM7OjsTorZ8w6sEI2d9UByxB/view?usp=drive_link"
]

describe("Default Navigation Bar", () => {
  it("Should render a nav element", () => {
    render(<MockNavBar />);
    const navElement = screen.getByRole(/navigation/i);
    expect(navElement).toBeInTheDocument();
  });

  it("Should render atleast one link", () => {
    render(<MockNavBar />);
    const navElement = screen.getAllByTestId(/btn-link-/i);
    expect(navElement.length).toBeGreaterThan(0);
  });

  it("Should render 5 visible links", () => {
    render(<MockNavBar />);
    const navElement = screen.getAllByTestId(/btn-link-nav/i);
    expect(navElement).toHaveLength(5);
  });

  it("Should render links with appropriate url", () => {
    render(<MockNavBar />);
    const navElement = screen.getAllByTestId(/btn-link-nav/i);
    navElement.map((element, index) => expect(element).toHaveAttribute("href", btnURL[index]));
  });
});
