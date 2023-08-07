import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../Contact";

describe("renders contact form elements", () => {
  //   Display form
  it("should render a form", () => {
    render(<Contact />);
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
  });

  it("should render 4 input fields", () => {
    render(<Contact />);
    const inputElement = screen.getAllByRole("textbox");
    expect(inputElement.length).toBe(4);
  });

  it("should render a button for submission", () => {
    render(<Contact />);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
  });

  // focus and remove focus shows error and adds invalid class for input

  // focus and remove focus shows error and adds invalid class for textarea

  // Since form validation is handled by the "required" prop, validation is handled by the browser.
  // Since jest is a Node-based runner, it does not perform browser validation so this test fails since form gets submitted.
  // Solution is to setup my own validation and hide the default validation alert
  // it("should not submit the form when input fields are empty", () => {
  //   render(<Contact />);
  //   const textElement = screen.getByTestId("textarea");
  //   const buttonElement = screen.getByRole("button", { name: /submit/i });
  //   fireEvent.click(buttonElement);
  //   expect(buttonElement).toBeInTheDocument();
  // });

  // Clicking submit when required field is invalid focuses field with error

  // Name, phone and textarea are valid when text is written.

  // Email field is only valid when email constraints are met

  // When all fields are valid, form submits

  // If form fails to send, error message is shown

  // If form sends successfully show success message
  //   Hide button when submitted
});
