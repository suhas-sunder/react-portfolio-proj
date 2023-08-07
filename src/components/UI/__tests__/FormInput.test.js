import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormInput from "../FormInput";

describe("Renders form elements", () => {
  it("should display an input field by default regardless of name prop", () => {
    render(<FormInput />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should display textarea if included in props", () => {
    render(<FormInput name="message" label="message" id="message" />);
    const inputTextElement = screen.getByLabelText(/message/i);
    expect(inputTextElement).toBeInTheDocument();
  });

  it("should display name input field if text area is displayed", () => {
    render(<FormInput name="name" label="name" id="name" />);
    const inputElement = screen.getByLabelText(/name/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should display email input field if text area is displayed", () => {
    render(<FormInput name="email" label="email" id="email" />);
    const inputElement = screen.getByLabelText(/email/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should display phone input field if text area is displayed", () => {
    render(<FormInput name="phone" label="phone" id="phone" />);
    const inputElement = screen.getByLabelText(/phone/i);
    expect(inputElement).toBeInTheDocument();
  });
});

describe("Form fields that should not render if props don't exist", () => {
  it("should not display textarea if not included in props", () => {
    render(<FormInput />);
    const inputTextElement = screen.queryByLabelText(/message/i);
    expect(inputTextElement).not.toBeInTheDocument();
  });

  it("should not display name input field if text area is displayed", () => {
    render(<FormInput name="message" label="message" id="message" />);
    const inputElement = screen.queryByLabelText(/name/i);
    expect(inputElement).not.toBeInTheDocument();
  });

  it("should not display email input field if text area is displayed", () => {
    render(<FormInput name="message" label="message" id="message" />);
    const inputElement = screen.queryByLabelText(/email/i);
    expect(inputElement).not.toBeInTheDocument();
  });

  it("should not display phone input field if text area is displayed", () => {
    render(<FormInput name="message" label="message" id="message" />);
    const inputElement = screen.queryByLabelText(/phone/i);
    expect(inputElement).not.toBeInTheDocument();
  });
});

describe("Form input fields touched state", () => {
  it("should have invalid class for textarea when touched", async () => {
    render(
      <FormInput touched={true} name="message" label="message" id="message" />
    );
    const inputTextElement = screen.getByLabelText(/message/i);
    expect(inputTextElement.classList.contains("message")).toBe(true);
  });

  it("should have valid class for textarea when touched", async () => {
    render(<FormInput name="message" label="message" id="message" />);
    const inputTextElement = screen.getByLabelText(/message/i);
    expect(inputTextElement.classList.contains("message")).toBe(true);
  });

  it("should have invalid class for input when touched", async () => {
    render(<FormInput touched={true} name="email" label="email" id="email" />);
    const inputElement = screen.getByLabelText(/email/i);
    expect(inputElement.classList.contains("invalid-input")).toBe(true);
  });

  it("should have valid class for input when touched", async () => {
    render(<FormInput name="email" label="email" id="email" />);
    const inputElement = screen.getByLabelText(/email/i);
    expect(inputElement.classList.contains("input")).toBe(true);
  });
});

describe("Form error message", () => {
  it("should display error if input state is touched", () => {
    render(<FormInput touched={true} />);
    const errorElement = screen.getByTestId("error");
    expect(errorElement).toBeInTheDocument();
  });

  it("should not display error if input state is not touched", () => {
    render(<FormInput touched={false} />);
    const errorElement = screen.queryByTestId("error");
    expect(errorElement).not.toBeInTheDocument();
  });
});
