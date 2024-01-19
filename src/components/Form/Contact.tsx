import { useState } from "react";
import FormInput from "./FormInputs";
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

  const [isSubmitted, setIsSubmitted] = useState("false");

  const formInputData = [
    {
      id: "name-input",
      name: "name",
      type: "text",
      placeholder: "Name",
      label: "Name",
      errorMessage: "* Please enter a valid name!",
      required: true,
    },
    {
      id: "email-input",
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "* Please enter a valid email address!",
      required: true,
    },
    {
      id: "phone-input",
      name: "phone",
      type: "text",
      placeholder: "Phone",
      label: "Phone",
      required: false,
    },
    {
      id: "text-input",
      type: "text",
      name: "message",
      placeholder: "Message",
      label: "Message",
      errorMessage: "* Please enter a valid message!",
      required: true,
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

  // Handle form submission through Formspree.io
  const handleSubmit = (event) => {
    event.preventDefault();

    // Set submission state to sending [loading]
    setIsSubmitted("sending");

    // Obtain form data to be sent as new obj
    var data = new FormData(event.target);

    // Form submission
    fetch(event.target.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
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
        setIsSubmitted(error);
      });
  };
  // Disable autocomplete on form  which hides default error msg when submit is clicked
  const handleAutoComplete = () => {
    setValues({
      ...values,
      disableAutoComplete: true,
    });
  };

  return (
    <div
      id="contact"
      className="max-w-[400px] items-center leading-relaxed lg:leading-loose text-base sm:text-xl p-8 pt-12 mt-12 mb-32 mx-4 bg-light-blueish-gray rounded-2xl sm:px-10 sm:py-12 sm:pb-5 text-white sm:mx-auto "
    >
      <h2 className="text-2xl sm:text-3xl -translate-x-1 -translate-y-3">
        Let's have a chat!
      </h2>
      <form
        aria-label="form"
        id="contact-form"
        action="https://formspree.io/f/xknaendo"
        method="POST"
        onSubmit={handleSubmit}
        className="text-black gap-2 flex flex-col"
        autoComplete={values.disableAutoComplete ? "off" : "on"}
      >
        {isSubmitted === "false" ? (
          <>
            {formInputData.map((data) => (
              <FormInput
                key={data.id}
                {...data}
                value={values[data.name]}
                onChange={handleChange}
                onBlur={handleFocus}
                touched={data.required ? values[`${data.name}Touched`] : false}
              />
            ))}
          </>
        ) : (
          <FormSubmitMsg submissionState={isSubmitted} />
        )}
        {isSubmitted === "false" && (
          <button
            className="uppercase sm:mx-8 py-2 mb-4 mt-6 text-base sm:text-lg bg-highlight-yellow text-dark-blueish-gray hover:text-highlight-yellow border-2 border-highlight-yellow rounded-lg hover:bg-transparent font-semibold tracking-widest"
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
