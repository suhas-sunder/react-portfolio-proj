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
    </MemoryRouter>,
  );
};

const handleModal = jest.fn();

describe("renders all page elements", () => {
  beforeEach(() => {
    mockHome({ showModal: false, handleModal });
  });

  it("should render a header title text", () => {
    const headerElement = screen.getByText(/Suhas Sunder/i);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent(/Software Developer/i);
  });

  it("should render a profile image", () => {
    const imageElement = screen.getByAltText(/headshot of suhas sunder/i);
    expect(imageElement).toBeInTheDocument();
  });

  it("should render project preview images", () => {
    const imgElements = screen.getAllByRole("img");
    expect(imgElements.length).toBeGreaterThanOrEqual(11);
  });

  it("should render list of 19 skills", () => {
    const skillElements = screen.getAllByTestId(/skill-icon-/i);
    expect(skillElements).toHaveLength(19);
  });

  it("should render a projects section", () => {
    const projectsHeading = screen.getByRole("heading", { name: /projects/i });
    expect(projectsHeading).toBeInTheDocument();
  });

  it("should render project cards from current project data", () => {
    expect(
      screen.getByRole("heading", { name: /smart home sensor planner/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /feature variability visualizer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /free typing camp/i }),
    ).toBeInTheDocument();
  });

  it("should render a contact form", () => {
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
      "https://www.linkedin.com/in/s-sunder/",
    );
  });

  it("should render a link to github profile", () => {
    const modalBtnElement = screen.getByTestId(/githublogoicon/i);
    expect(modalBtnElement).toBeInTheDocument();
    expect(modalBtnElement).toHaveAttribute(
      "href",
      "https://github.com/suhas-sunder",
    );
  });

  it("should render a link to certifications", () => {
    const modalBtnElement = screen.getByTestId(/certificates/i);
    expect(modalBtnElement).toBeInTheDocument();
    expect(modalBtnElement).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/s-sunder/details/certifications/",
    );
  });

  it("should render a link to education history", () => {
    const modalBtnElement = screen.getByTestId(/education/i);
    expect(modalBtnElement).toBeInTheDocument();
    expect(modalBtnElement).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/s-sunder/details/education/",
    );
  });

  it("should render a hashlink to email form", () => {
    const modalBtnElement = screen.getByTestId(/email/i);
    expect(modalBtnElement).toBeInTheDocument();
    expect(modalBtnElement).toHaveAttribute("href", "/#contact");
  });

  it("should render live demo links for current projects", () => {
    const liveDemoLinks = screen.getAllByRole("link", { name: /live demo/i });
    expect(liveDemoLinks.length).toBeGreaterThan(0);
  });

  it("should render github links for projects that include repos", () => {
    const githubLinks = screen.getAllByRole("link", { name: /github/i });
    expect(githubLinks.length).toBeGreaterThan(0);
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
    const modalElement = screen.getByText(/Graduated: Apr 2019/i);
    expect(modalElement).toBeInTheDocument();
  });
});
