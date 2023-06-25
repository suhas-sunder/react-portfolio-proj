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

describe("Mobile Nav bar defaults", () => {
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

  it("Should only render 1 link (logo button) when burger menu is closed", () => {
    render(<MockNavBar />);
    const navLinks = screen.getAllByTestId(/btn-link/i);
    expect(navLinks).toHaveLength(1);
  });
});

describe("Mobile Nav Bar click events", () => {
  it("Should have burger closed icon visible when menu is open and open icon should be hidden", () => {
    render(<MockNavBar />);
    const navElement = screen.getByTestId(/burgerBtn-open/i);
    fireEvent.click(navElement);
    const navElementTwo = screen.queryByTestId(/burgerBtn-close/i);
    expect(navElement).not.toBeInTheDocument();
    expect(navElementTwo).toBeInTheDocument();
  });

  it("Should render 6 links when burger menu is open", () => {
    render(<MockNavBar />);
    const navElement = screen.getByTestId(/burgerBtn-open/i);
    fireEvent.click(navElement);
    const navLinks = screen.getAllByTestId(/btn-link/i);
    expect(navLinks).toHaveLength(5);
  });

  it("Should render links with appropriate url once burger menu is open", () => {
    render(<MockNavBar />);
    const navElement = screen.getByTestId(/burgerBtn-open/i);
    fireEvent.click(navElement);
    const navLinks = screen.getAllByTestId(/btn-link/i);
    navLinks.map((element, index) =>
      expect(element).toHaveAttribute("href", btnURL[index])
    );
  });

  it("Should only render 1 link (logo button) when burger menu is toggled open then close, meaning menu is closed", () => {
    render(<MockNavBar />);
    const navElement = screen.getByTestId(/burgerBtn-open/i);
    fireEvent.click(navElement);
    const navElementTwo = screen.getByTestId(/burgerBtn-close/i);
    fireEvent.click(navElementTwo);
    const navLinks = screen.getAllByTestId(/btn-link/i);
    expect(navLinks).toHaveLength(1);
  });

  it("Should render transparent overlay background when mobile menu is open", () => {
    render(<MockNavBar />);
    const navElement = screen.getByTestId(/burgerBtn-open/i);
    fireEvent.click(navElement);
    const navElementTwo = screen.getByTestId(/mobile-nav-bkgd/i);
    expect(navElementTwo).toBeInTheDocument();
  });

  it("Should hide mobile nav transparent background when it is clicked", () => {
    render(<MockNavBar />);
    const navElement = screen.getByTestId(/burgerBtn-open/i);
    fireEvent.click(navElement);
    const navElementTwo = screen.getByTestId(/mobile-nav-bkgd/i);
    fireEvent.click(navElementTwo);
    expect(navElementTwo).not.toBeInTheDocument();
  });

  it("Should close mobile nav menu when background when it is clicked, displaying only one link meaning menu is closed", () => {
    render(<MockNavBar />);
    const navElement = screen.getByTestId(/burgerBtn-open/i);
    fireEvent.click(navElement);
    const navElementTwo = screen.getByTestId(/mobile-nav-bkgd/i);
    fireEvent.click(navElementTwo);
    const navLinks = screen.getAllByTestId(/btn-link/i);
    expect(navLinks).toHaveLength(1);
  });
});
