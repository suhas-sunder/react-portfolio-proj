import Styles from "./styles/FormInput.module.css";

export default function FormInputs(props) {
  const { label, errorMessage, touched, ...formProps } = props;

  // Check if form should have input or text area
  const addTextArea = props.name !== "message";

  // Store input element as constant for better readability
  const input = (
    <input
      className={`${Styles.input} ${touched && Styles["invalid-input"]}`}
      {...formProps}
    />
  );

  // Store text area as constant for better readability
  const textArea = (
    <textarea
      className={`${Styles.message} ${touched && Styles["invalid-input"]}`}
      {...formProps}
    />
  );

  return (
    <div className={Styles["form-section"]}>
      <label htmlFor={props.id} className="text-white">
        {label}
        {props.required && <span className="text-highlight-yellow"> *</span>}
      </label>
      {addTextArea ? input : textArea}
      {touched && (
        <span data-testid="error" className={Styles.error}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
