import React from "react";
import Styles from "./ContactForm.module.css";

function ContactForm() {
  return (
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
  );
}

export default ContactForm;
