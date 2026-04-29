import { FormEvent, FocusEvent, ChangeEvent, useState } from "react";
import FormInput from "./FormInputs";
import FormSubmitMsg from "../Layout/FormSubmitMsg";

type SubmissionState = "false" | "sending" | "sent" | "error";

type FormValues = {
  name: string;
  nameTouched: boolean;
  email: string;
  emailTouched: boolean;
  phone: string;
  message: string;
  messageTouched: boolean;
  disableAutoComplete: boolean;
};

type FormInputData = {
  id: string;
  name: "name" | "email" | "phone" | "message";
  type: string;
  placeholder: string;
  label: string;
  errorMessage?: string;
  required: boolean;
};

function Contact() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    nameTouched: false,
    email: "",
    emailTouched: false,
    phone: "",
    message: "",
    messageTouched: false,
    disableAutoComplete: false,
  });

  const [isSubmitted, setIsSubmitted] = useState<SubmissionState>("false");

  const formInputData: FormInputData[] = [
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

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = event.target.name as keyof FormValues;

    setValues({
      ...values,
      [fieldName]: event.target.value,
      [`${fieldName}Touched`]: false,
    });
  };

  const handleFocus = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = event.target.name as keyof FormValues;

    setValues({
      ...values,
      [fieldName]: event.target.value.trim(),
      [`${fieldName}Touched`]: true,
      disableAutoComplete: false,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitted("sending");

    const data = new FormData(event.currentTarget);

    fetch(event.currentTarget.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        setIsSubmitted(response.ok ? "sent" : "error");
      })
      .catch(() => {
        setIsSubmitted("error");
      });
  };

  const handleAutoComplete = () => {
    setValues({
      ...values,
      disableAutoComplete: true,
    });
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-10"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto flex w-full max-w-[640px] flex-col rounded-2xl border border-slate-800 bg-slate-950/40 p-6 shadow-xl shadow-slate-950/20 sm:p-8 lg:p-10">
        <h2
          id="contact-heading"
          className="flex w-full items-center justify-center text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Let's have a chat!
        </h2>

        <form
          aria-label="form"
          id="contact-form"
          action="https://formspree.io/f/xknaendo"
          method="POST"
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-3 text-slate-950"
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
              className="mt-6 mb-1 cursor-pointer rounded-lg border border-sky-300 bg-sky-300 px-5 py-3 text-base font-bold uppercase tracking-widest text-slate-950 transition hover:border-sky-200 hover:bg-sky-200 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-300/50 sm:mx-8 sm:text-lg"
              type="submit"
              onClick={handleAutoComplete}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;