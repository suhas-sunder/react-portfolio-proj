import { useState } from "react";
import FormInput from "../UI/FormInputs";
import FormSubmitMsg from "./FormSubmitMsg";
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
    <div
      id="contact"
      className="max-w-[500px] items-center leading-relaxed lg:leading-loose text-base sm:text-xl p-8 pt-12 mt-12 mb-32 mx-4 sm:mb-40 bg-light-blueish-gray rounded-2xl sm:p-16 sm:pb-10 text-white sm:mx-auto "
    >
      <h2 className="uppercase text-3xl sm:text-4xl -translate-x-3 -translate-y-2">Contact</h2>
      <p className="mt-6">Let's have a chat!</p>
      <p className="mt-2">
        Fill out the form below or email me at{" "}
        <a
          href="mailto:suhas@live.ca"
          className="text-highlight-yellow cursor-pointer"
        >
          suhas@live.ca
        </a>{" "}
        and I will respond as soon as possible.
      </p>

      <form
        aria-label="form"
        id="contact-form"
        action="https://formspree.io/f/xknaendo"
        method="POST"
        onSubmit={handleSubmit}
        className="text-black mt-4 gap-8 flex flex-col"
        autoComplete={values.disableAutoComplete ? "off" : "on"}
      >
        {isSubmitted === "false" ? (
          formInputs
        ) : (
          <FormSubmitMsg submissionState={isSubmitted} />
        )}
        {isSubmitted === "false" && (
          <button
            className="uppercase mx-8 py-2 my-4 bg-highlight-yellow text-dark-blueish-gray hover:text-highlight-yellow border-2 border-highlight-yellow rounded-lg hover:bg-transparent font-semibold tracking-widest"
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
