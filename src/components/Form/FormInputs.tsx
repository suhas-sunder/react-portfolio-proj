import Styles from "./styles/FormInputs.module.css";

export default function FormInputs(props) {
  const { label, errorMessage, touched, ...formProps } = props;

  // Check if form should have input or text area
  const addTextArea = props.name !== "message";

  // Store input element as constant for better readability
  const input = (
    <input
      className={`${Styles.input} ${
        touched && Styles["invalid-input"]
      } text-sm sm:text-base pl-2 py-1`}
      {...formProps}
    />
  );

  // Store text area as constant for better readability
  const textArea = (
    <textarea
      className={`${Styles.message} ${
        touched && Styles["invalid-input"]
      } text-sm sm:text-base`}
      {...formProps}
    />
  );

  return (
    <div className="flex flex-col gap-4 mt-2 text-sm sm:text-base">
      <label htmlFor={props.id} className="text-white">
        {label}
        {props.required && <span className="text-highlight-yellow"> *</span>}
      </label>
      {addTextArea ? input : textArea}
      {touched && (
        <span data-testid="error" className="text-highlight-yellow">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
