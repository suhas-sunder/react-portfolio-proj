import React from "react";
import Styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Contact</h2>
      <p>Let's have a chat!</p>
      <p>
        Fill out the form below, or email me at{" "}
        <a href="mailto:suhas@live.ca" className={Styles.highlight}>
          suhas@live.ca
        </a>{" "}
        and I will respond as soon as possible.
      </p>
      <form>
        <label>
          Full name <span className={Styles.highlight}>*</span>
        </label>
        <input placeholder="Michael Scott" className={Styles.input} />
        <label>
          Email <span className={Styles.highlight}>*</span>
        </label>
        <input placeholder="michaelscott@email.com" className={Styles.input} />
        <label>Phone</label>
        <input placeholder="111-111-1111" className={Styles.input} />
        <label>
          Message <span className={Styles.highlight}>*</span>
        </label>
        <textarea placeholder="Hello!" className={Styles.message} />
        <button className={Styles.button}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
