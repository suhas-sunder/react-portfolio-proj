const FormInputData = [
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
    type: "text",
    name: "message",
    placeholder: "Hello!",
    label: "Message",
    errorMessage: "* Please enter a message!",
    required: true,
  },
];

export default FormInputData;
