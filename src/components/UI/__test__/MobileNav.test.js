import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import MobileNav from "../MobileNav";
import { BrowserRouter } from "react-router-dom";

const MockNavBar = () => {
  return (
    <BrowserRouter>
      <MobileNav />
    </BrowserRouter>
  );
};

const btnURL = [
  "/",
  "/#skills",
  "/projects/AllTrackSystem",
  "/#contact",
  "https://drive.google.com/file/d/1FMej8K-ZoM7OjsTorZ8w6sEI2d9UByxB/view?usp=drive_link",
];

describe("Default Navigation Bar", () => {
  it("Should render atleast one link", () => {
    render(<MockNavBar />);
    const navElement = screen.getAllByTestId(/btn-link-/i);
    expect(navElement.length).toBeGreaterThan(0);
  });

  it("Should render burger menu button icon in open state", () => {
    render(<MockNavBar />);
    const navElement = screen.getByTestId(/burgerBtn-open/i);
    expect(navElement).toBeInTheDocument();
  });

  it("Should have burger closed icon hidden", () => {
    render(<MockNavBar />);
    const navElement = screen.queryByTestId(/burgerBtn-close/i);
    expect(navElement).not.toBeInTheDocument();
  });

  it("Should render links with appropriate url once burger menu is open", () => {
    render(<MockNavBar />);
    const navElement = screen.getByTestId(/burgerBtn-open/i);
    fireEvent.click(navElement)
    const navLinks = screen.getAllByTestId(/btn-link/i);
    navLinks.map((element, index) =>
      expect(element).toHaveAttribute("href", btnURL[index])
    );
  });
});
