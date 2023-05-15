import { React, useState, useRef } from "react";
import Styles from "./Contact.module.css";
import FormInput from "../UI/FormInput";
import FormSubmitMsg from "../Layout/FormSubmitMsg";

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
  const [submission, setSubmission] = useState("");

  // Default values and states for form fields
  const formProps = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "First Last",
      label: "Name",
      errorMessage: "* Please enter a name!",
      // required: true,
      touched: values.nameTouched,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "firstlast@email.com",
      label: "Email",
      errorMessage: "* Please enter a valid email address!",
      // required: true,
      touched: values.emailTouched,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "111-111-1111",
      label: "Phone",
      required: false,
      touched: false,
    },
    {
      id: 4,
      name: "message",
      type: "text",
      placeholder: "Hello!",
      label: "Message",
      errorMessage: "* Please enter a message!",
      // required: true,
      touched: values.messageTouched,
    },
  ];

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
    setSubmission("sending");

    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("submitted");
        } else {
          // Set submission to success state
          setSubmission("sent");
        }
      })
      .catch((error) => {
        // Set submission to error state
        setSubmission("error");
      });
  };

  // Storing form inputs in a variable for better readability
  const formInputs = formProps.map((props) => (
    <FormInput
      key={props.id}
      {...props}
      value={values[props.name]}
      onChange={handleChange}
      onBlur={handleFocus}
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
        Fill out the form below, or email me at{" "}
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
        {submission ? (
          <FormSubmitMsg submissionState={submission} />
        ) : (
          formInputs
        )}
        {!submission && (
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
