import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormInputs from "../../Form/FormInputs";

describe("renders form elements", () => {
  it("should render an input field when name is not message", () => {
    render(<FormInputs name="name" label="name" id="name" />);
    const inputElement = screen.getByLabelText(/name/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe("INPUT");
  });

  it("should render a textarea when name is message", () => {
    render(<FormInputs name="message" label="message" id="message" />);
    const inputTextElement = screen.getByLabelText(/message/i);
    expect(inputTextElement).toBeInTheDocument();
    expect(inputTextElement.tagName).toBe("TEXTAREA");
  });

  it("should render a name input field", () => {
    render(<FormInputs name="name" label="name" id="name" />);
    const inputElement = screen.getByLabelText(/name/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render an email input field", () => {
    render(<FormInputs name="email" label="email" id="email" />);
    const inputElement = screen.getByLabelText(/email/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render a phone input field", () => {
    render(<FormInputs name="phone" label="phone" id="phone" />);
    const inputElement = screen.getByLabelText(/phone/i);
    expect(inputElement).toBeInTheDocument();
  });
});

describe("form fields that should not render for other props", () => {
  it("should not render a message textarea when rendering a name input", () => {
    render(<FormInputs name="name" label="name" id="name" />);
    const inputTextElement = screen.queryByLabelText(/message/i);
    expect(inputTextElement).not.toBeInTheDocument();
  });

  it("should not render a name input when rendering a message textarea", () => {
    render(<FormInputs name="message" label="message" id="message" />);
    const inputElement = screen.queryByLabelText(/name/i);
    expect(inputElement).not.toBeInTheDocument();
  });

  it("should not render an email input when rendering a message textarea", () => {
    render(<FormInputs name="message" label="message" id="message" />);
    const inputElement = screen.queryByLabelText(/email/i);
    expect(inputElement).not.toBeInTheDocument();
  });

  it("should not render a phone input when rendering a message textarea", () => {
    render(<FormInputs name="message" label="message" id="message" />);
    const inputElement = screen.queryByLabelText(/phone/i);
    expect(inputElement).not.toBeInTheDocument();
  });
});

describe("form input touched state", () => {
  it("should show an error for textarea when touched", () => {
    render(
      <FormInputs
        touched={true}
        name="message"
        label="message"
        id="message"
        errorMessage="Message is required"
      />,
    );
    const errorElement = screen.getByTestId("error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(/message is required/i);
  });

  it("should not show an error for textarea when not touched", () => {
    render(
      <FormInputs
        touched={false}
        name="message"
        label="message"
        id="message"
        errorMessage="Message is required"
      />,
    );
    const errorElement = screen.queryByTestId("error");
    expect(errorElement).not.toBeInTheDocument();
  });

  it("should show an error for input when touched", () => {
    render(
      <FormInputs
        touched={true}
        name="email"
        label="email"
        id="email"
        errorMessage="Email is required"
      />,
    );
    const errorElement = screen.getByTestId("error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(/email is required/i);
  });

  it("should not show an error for input when not touched", () => {
    render(
      <FormInputs
        touched={false}
        name="email"
        label="email"
        id="email"
        errorMessage="Email is required"
      />,
    );
    const errorElement = screen.queryByTestId("error");
    expect(errorElement).not.toBeInTheDocument();
  });
});
