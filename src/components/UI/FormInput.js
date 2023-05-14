import React from "react";
import Styles from "./ContactForm.module.css";

function ContactForm(props) {
  const { label, errorMessage, ...formProps } = props;

  // Check if form should have input or text area
  const addTextArea = props.name === "message";

  return (
    <div className={Styles["form-section"]}>
      <label>
        {props.label}
        {props.required && <span className={Styles.highlight}> *</span>}
      </label>
      {addTextArea ? (
        <textarea className={Styles.message} {...formProps} />
      ) : (
        <input className={Styles.input} {...formProps} />
      )}
      <span className={Styles.error}>{errorMessage}</span>
    </div>
    // <form>
    //   <input type="hidden" name="_captcha" value="false" />
    //   <label htmlFor="name">
    //     Full name <span className={Styles.highlight}>*</span>
    //   </label>
    //   <input
    //     placeholder="Michael Scott"
    //     className={Styles.input}
    //     type="text"
    //     name="name"
    //     autoComplete="off"
    //     required
    //     onInvalid={(e) => e.target.setCustomValidity("Your custom message")}
    //     onInput={(e) => e.target.setCustomValidity("")}
    //   />
    //   <label htmlFor="email">
    //     Email <span className={Styles.highlight}>*</span>
    //   </label>
    //   <input
    //     placeholder="michaelscott@email.com"
    //     className={Styles.input}
    //     type="email"
    //     name="email"
    //     autoComplete="off"
    //     required
    //     onInvalid={(e) => e.target.setCustomValidity("Your custom message")}
    //     onInput={(e) => e.target.setCustomValidity("")}
    //   />
    //   <label htmlFor="phone">Phone</label>
    //   <input
    //     placeholder="111-111-1111"
    //     className={Styles.input}
    //     type="phone"
    //     name="phone"
    //     autoComplete="off"
    //   />
    //   <label htmlFor="message">
    //     Message <span className={Styles.highlight}>*</span>
    //   </label>
    //   <textarea
    //   placeholder="Hello!"
    //   className={Styles.message}
    //   name="message"
    //   autoComplete="off"
    //   required
    //   onInvalid={(e) => e.target.setCustomValidity("Please enter a message!")}
    //   onInput={(e) => e.target.setCustomValidity("")}
    // />
    //
    // </form>
  );
}

export default ContactForm;
