import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import ImageCard from "../ImageCard";
import { BrowserRouter } from "react-router-dom";

const MockImageCard = (projLink, projURL) => {
  return (
    <BrowserRouter>
      <ImageCard projLink={projLink} projURL={projURL} />
    </BrowserRouter>
  );
};

describe("Renders Image Card elements", () => {
  it("should render an image", () => {
    render(<MockImageCard />);
    const imgElement = screen.getByRole("img");

    expect(imgElement).toBeInTheDocument();
  });

  it("should render a link to view project", () => {
    render(<MockImageCard projURL="https://alltracksystem.com/" />);
    const linkElement = screen.getByLabelText(/view project live/i);

    expect(linkElement).toBeInTheDocument();
    // expect(linkElement).toHaveAttribute("href", "/projects/Capstone");
  });

  it("should render a button that links to appropriate url", () => {
    render(<MockImageCard projLink="https://alltracksystem.com/" />);

    const btnElement = screen.getByTestId(/project-overview/i);
    expect(btnElement).toBeInTheDocument();
    // expect(btnElement).toHaveAttribute("href", "https://alltracksystem.com/");
  });
});
