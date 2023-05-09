import React from "react";

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <p>Let's have a chat. Feel free to fill out the form below, or email me at <a href="mailto:suhas@live.ca">suhas@live.ca</a></p>
      <form>
        <label>Name <span>*</span></label>
        <input/>
        <label>Email <span>*</span></label>
        <input/>
        <label>Phone</label>
        <input/>
        <label>Message <span>*</span></label>
        <textarea/>
      </form>
    </>
  );
}

export default Contact;
