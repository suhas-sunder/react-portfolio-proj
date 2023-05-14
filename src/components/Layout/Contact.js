import { React, useState } from "react";
import Styles from "./Contact.module.css";
import FormInput from "../UI/FormInput";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const formProps = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "First Last",
      label: "Name",
      errorMessage: "* Please enter a name!",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "firstlast@email.com",
      label: "Email",
      errorMessage: "* Please enter a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "111-111-1111",
      label: "Phone",
      required: false,
    },
    {
      id: 4,
      name: "message",
      type: "text",
      placeholder: "Hello!",
      label: "Message",
      errorMessage: "* Please enter a message!",
      required: true,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target.name);

    console.log("Successfully submitted");

    // var data = new FormData(event.target);
    // fetch(event.target.action, {
    //   method: form.method,
    //   body: data,
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log("submitted");
    //     } else {
    //       console.log("Oops! There was a problem submitting your form");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Oops! There was a problem submitting your form");
    //   });
  };

  // Store user input values
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
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
        id="my-form"
        action="https://formspree.io/f/xknaendo"
        method="POST"
        onSubmit={handleSubmit}
        className={Styles.form}
      >
        {formProps.map((props) => (
          <FormInput
            key={props.id}
            {...props}
            value={values[props.name]}
            onChange={handleChange}
          />
        ))}
        <button className={Styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
