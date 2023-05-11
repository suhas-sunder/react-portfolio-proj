import React from "react";
import Styles from "./ContactForm.module.css";

function ContactForm() {
  var form = document.getElementById("my-form");

  async function handleSubmit(event) {
    event.preventDefault();

    console.log("Successfully submitted")
    
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

  return (
    <form id="my-form"
      action="https://formspree.io/f/xknaendo"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_captcha" value="false" />
      <label htmlFor="name">
        Full name <span className={Styles.highlight}>*</span>
      </label>
      <input
        placeholder="Michael Scott"
        className={Styles.input}
        type="name"
        name="name"
      />
      <label htmlFor="email">
        Email <span className={Styles.highlight}>*</span>
      </label>
      <input
        placeholder="michaelscott@email.com"
        className={Styles.input}
        type="email"
        name="email"
      />
      <label htmlFor="phone">Phone</label>
      <input
        placeholder="111-111-1111"
        className={Styles.input}
        type="phone"
        name="phone"
      />
      <label htmlFor="message">
        Message <span className={Styles.highlight}>*</span>
      </label>
      <textarea
        placeholder="Hello!"
        className={Styles.message}
        name="message"
      />
      <button className={Styles.button} type="submit" disabled={true}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
