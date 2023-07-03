import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
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
    render(<MockImageCard />);
    const linkElement = screen.getByLabelText(/view project live/i);

    expect(linkElement).toBeInTheDocument();
  });

  it("should render a button that links to appropriate url", () => {
    render(<MockImageCard />);

    const btnElement = screen.getByTestId(/project-overview/i);
    expect(btnElement).toBeInTheDocument();
  });
});
