import React from "react";
import Styles from "./Contact.module.css";
import ContactForm from "../UI/ContactForm";

function Contact() {
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
      <ContactForm />
    </div>
  );
}

export default Contact;
