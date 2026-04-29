import {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import Styles from "./styles/FormInputs.module.css";

interface FormInputsProps {
  id: string;
  label: string;
  errorMessage?: string;
  touched: boolean;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export default function FormInputs(props: FormInputsProps) {
  const { label, errorMessage, touched, ...formProps } = props;

  const addTextArea = props.name !== "message";

  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    ...formProps,
    onChange: props.onChange as ChangeEventHandler<HTMLInputElement>,
    onBlur: props.onBlur as FocusEventHandler<HTMLInputElement>,
  };

  const textAreaProps: TextareaHTMLAttributes<HTMLTextAreaElement> = {
    ...formProps,
    onChange: props.onChange as ChangeEventHandler<HTMLTextAreaElement>,
    onBlur: props.onBlur as FocusEventHandler<HTMLTextAreaElement>,
  };

  const input = (
    <input
      className={`${Styles.input} ${
        touched && Styles["invalid-input"]
      } rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30 sm:text-base`}
      {...inputProps}
    />
  );

  const textArea = (
    <textarea
      className={`${Styles.message} ${
        touched && Styles["invalid-input"]
      } min-h-28 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30 sm:text-base`}
      {...textAreaProps}
    />
  );

  return (
    <div className="mt-2 flex flex-col gap-3 text-sm sm:text-base px-6">
      <label htmlFor={props.id} className="font-semibold text-slate-100">
        {label}
        {props.required && <span className="text-sky-300"> *</span>}
      </label>

      {addTextArea ? input : textArea}

      {touched && (
        <span data-testid="error" className="text-sm font-semibold text-sky-300">
          {errorMessage}
        </span>
      )}
    </div>
  );
}