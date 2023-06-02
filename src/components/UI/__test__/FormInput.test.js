import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormInput from "../FormInput";

describe("Button", () => {
  // Test text area
  it("should display textarea if included in props", () => {
    render(<FormInput name="message" />);
    const inputTextElement = screen.getByTestId(/textarea/i);
    expect(inputTextElement).toBeInTheDocument();
  });

  it("should not display textarea if not included in props", () => {
    render(<FormInput />);
    const inputTextElement = screen.queryByTestId(/textarea/i);
    expect(inputTextElement).not.toBeInTheDocument();
  });

  it("should have invalid class for textarea when touched", async () => {
    render(<FormInput touched={true} name="message" />);
    const inputTextElement = screen.getByTestId(/textarea/i);
    expect(inputTextElement.classList.contains("message")).toBe(true);
  });

  it("should have valid class for textarea when touched", async () => {
    render(<FormInput name="message" />);
    const inputTextElement = screen.getByTestId(/textarea/i);
    expect(inputTextElement.classList.contains("message")).toBe(true);
  });

  it("should display input field by default regardless of name prop", () => {
    render(<FormInput />);
    const inputElement = screen.getByTestId(/input/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should not display input if text area is displayed", () => {
    render(<FormInput name="message" />);
    const inputElement = screen.queryByTestId(/input/i);
    expect(inputElement).not.toBeInTheDocument();
  });

  // Test input field
  it("should have invalid class for input when touched", async () => {
    render(<FormInput touched={true} />);
    const inputElement = screen.getByTestId(/input/i);
    expect(inputElement.classList.contains("invalid-input")).toBe(true);
  });

  it("should have valid class for input when touched", async () => {
    render(<FormInput />);
    const inputElement = screen.getByTestId(/input/i);
    expect(inputElement.classList.contains("input")).toBe(true);
  });

  // Test error message
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
