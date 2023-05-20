import { React, useState } from "react";
import Styles from "./Contact.module.css";
import FormInput from "../UI/FormInput";
import FormSubmitMsg from "../Layout/FormSubmitMsg";
import FormInputData from "../../data/FormInputData";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    nameTouched: false,
    email: "",
    emailTouched: false,
    phone: "",
    message: "",
    messageTouched: false,
    disableAutoComplete: false,
  });

  const [isSubmitted, setIsSubmitted] = useState("false");

  // Store user input values & reset input focus
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
      [event.target.name + "Touched"]: false,
    });
  };

  // Check if input is focused, clear empty inputs, & enable autocomplete on form
  const handleFocus = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value.trim(),
      [event.target.name + "Touched"]: true,
      disableAutoComplete: false,
    });
  };

  const form = document.getElementById(`${Styles.form}`);

  // Handle form submission through Formspree.io
  const handleSubmit = (event) => {
    event.preventDefault();

    // Set submission state to sending [loading]
    setIsSubmitted("sending");

    // Obtain form data to be sent as new obj
    var data = new FormData(event.target);

    // Form submission
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Set submission to success state
          setIsSubmitted("sent");
        } else {
          // Set submission to error state
          setIsSubmitted("error");
        }
      })
      .catch((error) => {
        // Set submission to error state
        setIsSubmitted("error");
      });
  };

  // Storing form inputs in a variable for better readability
  const formInputs = FormInputData.map((data) => (
    <FormInput
      key={data.id}
      {...data}
      value={values[data.name]}
      onChange={handleChange}
      onBlur={handleFocus}
      touched={data.required ? values[`${data.name}Touched`] : false}
    />
  ));

  // Disable autocomplete on form  which hides default error msg when submit is clicked
  const handleAutoComplete = () => {
    setValues({
      ...values,
      disableAutoComplete: true,
    });
  };

  return (
    <div id="contact" className={Styles.container}>
      <h2 className={Styles.title}>Contact</h2>
      <p className={Styles.text}>Let's have a chat!</p>
      <p className={Styles.text}>
        Fill out the form below or email me at{" "}
        <a href="mailto:suhas@live.ca" className={Styles.link}>
          suhas@live.ca
        </a>{" "}
        and I will respond as soon as possible.
      </p>
      <form
        id={Styles.form}
        action="https://formspree.io/f/xknaendo"
        method="POST"
        onSubmit={handleSubmit}
        className={Styles.form}
        autoComplete={values.disableAutoComplete ? "off" : "on"}
      >
        {isSubmitted === "false" ? (
          formInputs
        ) : (
          <FormSubmitMsg submissionState={isSubmitted} />
        )}
        {isSubmitted === "false" && (
          <button
            className={Styles.button}
            type="submit"
            onClick={handleAutoComplete}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Contact;
