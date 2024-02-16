import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";
import { MemoryRouter } from "react-router-dom";

interface PropType {
  showModal: boolean;
  handleModal: () => void;
}

const mockHome = (props: PropType) => {
  render(
    <MemoryRouter>
      <Home {...props} />
    </MemoryRouter>
  );
};

const handleModal = jest.fn();

const projectLinks = [
  "DobsonPartners",
  "FreeTypingCamp",
  "ReactPortfolio",
  "AllTrackSystem",
  "EMEGroupInc.",
  "CapstoneSpArcDs",
];

describe("renders all page elements", () => {
  beforeEach(() => {
    mockHome({ showModal: false, handleModal });
  });

  it("should render a header title text", () => {
    const headerElement = screen.getByText(/Suhas Sunder Software Developer/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("should render 7 images on the page: headshot & project images", () => {
    const imgElements = screen.getAllByRole("img");
    expect(imgElements).toHaveLength(7);
  });

  it("should render a profile image", () => {
    const imageElement = screen.getByAltText(/head-shot of Suhas Sunder/i);
    expect(imageElement).toBeInTheDocument();
  });

  it("should render list of 19 skills", () => {
    const skillElements = screen.getAllByTestId(/skill-icon-/i);
    expect(skillElements).toHaveLength(19);
  });

  it("should render a summary of 6 projects", () => {
    const projElements = screen.getAllByTestId(/proj-section/i);
    expect(projElements).toHaveLength(6);
  });

  it("should render a contact form with 4 input elements", () => {
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
  });
});

describe("renders links/buttons with proper redirect/action", () => {
  beforeEach(() => {
    mockHome({ showModal: false, handleModal });
  });

  it("should render a link to linkedin profile", () => {
    const modalBtnElement = screen.getByTestId(/linkedin/i);
    expect(modalBtnElement).toBeInTheDocument();
    expect(modalBtnElement).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/s-sunder/"
    );
  });

  it("should render a link to github profile", () => {
    const modalBtnElement = screen.getByTestId(/githublogoicon/i);
    expect(modalBtnElement).toBeInTheDocument();
    expect(modalBtnElement).toHaveAttribute(
      "href",
      "https://github.com/suhas-sunder"
    );
  });

  it("should render a link to certifications", () => {
    const modalBtnElement = screen.getByTestId(/certificates/i);
    expect(modalBtnElement).toBeInTheDocument();
    expect(modalBtnElement).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/s-sunder/details/certifications/"
    );
  });

  it("should render a link to educational institute", () => {
    const modalBtnElement = screen.getByTestId(/education/i);
    expect(modalBtnElement).toBeInTheDocument();
    expect(modalBtnElement).toHaveAttribute("href", "https://ontariotechu.ca/");
  });

  it("should render a hashlink to email form", () => {
    const modalBtnElement = screen.getByTestId(/email/i);
    expect(modalBtnElement).toBeInTheDocument();
    expect(modalBtnElement).toHaveAttribute("href", "/#contact");
  });

  it("should include 6 project overview buttons with appropriate links", () => {
    let projectElements = screen.getAllByRole("link", {
      name: /view details/i,
    });
    expect(projectElements).toHaveLength(projectLinks.length);
    projectElements.forEach((element, index) =>
      expect(element).toHaveAttribute(
        "href",
        `/projects/${projectLinks[index].toLowerCase()}`
      )
    );
  });

  it("should render a submit button for contact form", () => {
    const formElement = screen.getByRole("button", { name: /submit/i });
    expect(formElement).toBeInTheDocument();
  });
});

describe("renders appropriate elements when modal is active", () => {
  beforeEach(() => {
    mockHome({ showModal: true, handleModal });
  });

  it("should render a modal when modal state is true", () => {
    let modalElement = screen.getByText(/Graduated: Apr 2019/i);
    expect(modalElement).toBeInTheDocument();
  });
});
