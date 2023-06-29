import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Modal from "../Modal";
import { BrowserRouter } from "react-router-dom";

const MockModal = ({ functionCall }) => {
  return (
    <BrowserRouter>
      <Modal closeModal={functionCall} />
    </BrowserRouter>
  );
};

describe("Modal", () => {
  it("should render a modal element", () => {
    render(<MockModal functionCall={() => {}} />);

    const divElement = screen.getByTestId(/modal/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render a capstone project anchor link", () => {
    render(<MockModal functionCall={() => {}} />);

    const btnElement = screen.getByRole("button", { name: /x-icon/i });
    expect(btnElement).toBeInTheDocument();
  });

  it("should render logo image and link with redirect to university website", () => {
    render(<MockModal functionCall={() => {}} />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    const linkElement = screen.getByTestId(/img-link/i);
    expect(linkElement).toHaveAttribute("href", "https://ontariotechu.ca/");
  });

  it("should render a button with href to capstone project", () => {
    render(<MockModal functionCall={() => {}} />);

    const linkElement = screen.getByTestId(/capstone/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/#capstone");
  });

  it("should render a modal background underlay", () => {
    render(<MockModal functionCall={() => {}} />);
    const divElement = screen.getByTestId(/bkgd-underlay/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should a title, subtitle, and three paragraph text", () => {
    render(<MockModal functionCall={() => {}} />);
    const titleElements = screen.getAllByRole("heading");
    const firstParaElement = screen.getByText(/B. Eng,/i);
    const secondParaElement = screen.getByText(/Location:/i);
    const thirdParaElement = screen.getByText(/Graduated:/i);
    expect(titleElements).toHaveLength(2);
    expect(firstParaElement).toBeInTheDocument();
    expect(secondParaElement).toBeInTheDocument();
    expect(thirdParaElement).toBeInTheDocument();
  });
});

describe("Modal click events", () => {
  const mock = jest.fn();
  it("should call closeModal when x-icon is clicked", async () => {
    render(<MockModal functionCall={mock} />);

    const btnElement = screen.getByRole("button", { name: /x-icon/i });
    await user.click(btnElement);

    expect(mock).toHaveBeenCalled();
  });

  it("should call closeModal when background is clicked", async () => {
    render(<MockModal functionCall={mock} />);
    const divElement = screen.getByTestId(/bkgd-underlay/i);
    await user.click(divElement);

    expect(mock).toHaveBeenCalled();
  });

  it("should call closeModal when capstone anchor link is pressed", async () => {
    render(<MockModal functionCall={mock} />);

    const btnElement = screen.getByRole("button", { name: /x-icon/i });
    await user.click(btnElement);

    expect(mock).toHaveBeenCalled();
  });
});
