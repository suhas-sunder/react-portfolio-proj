import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageCard from "../ImageCard";
import { BrowserRouter } from "react-router-dom";

const mockData = {
  title: "Test Project",
  imageURL: "/test-image.webp",
  projName: "Test Project",
  projURL: "https://example.com/live",
  projLink: "/projects/test-project",
  year: "2024",
  endYear: "2025",
  projId: "test-project",
};

const renderImageCard = (data = mockData, index = 0) => {
  return render(
    <BrowserRouter>
      <ImageCard data={data} index={index} />
    </BrowserRouter>,
  );
};

describe("ImageCard", () => {
  it("should render an image", () => {
    renderImageCard();
    const imgElement = screen.getByRole("img", {
      name: /test project project screenshot/i,
    });

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "/test-image.webp");
  });

  it("should render a link to view the live project", () => {
    renderImageCard();
    const linkElement = screen.getByRole("link", { name: /view live/i });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://example.com/live");
  });

  it("should render a link to view project details", () => {
    renderImageCard();
    const btnElement = screen.getByRole("link", { name: /view details/i });

    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toHaveAttribute("href", "/projects/test-project");
  });
});
