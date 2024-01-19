const FormInputData = [
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

export default FormInputData;
