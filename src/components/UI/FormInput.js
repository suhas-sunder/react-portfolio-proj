import React from "react";
import Styles from "./FormInput.module.css";

function ContactForm(props) {
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
      <label htmlFor={props.id}>
        {label}
        {props.required && <span className={Styles.highlight}> *</span>}
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

export default ContactForm;
