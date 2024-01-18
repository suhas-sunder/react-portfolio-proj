import Styles from "./styles/FormSubmitMsg.module.css";

function FormSubmitMsg({ submissionState }) {
  let sendingMsg;
  let msgClass;

  // Display loading, sent, or error msg based on submission state of form
  if (submissionState === "sending") {
    msgClass = Styles.msg;
    sendingMsg = "Sending...";
  } else if (submissionState === "sent") {
    msgClass = Styles.sent;
    sendingMsg = "Thank you! Your message has been successfully sent.";
  } else {
    msgClass = Styles.error;
    sendingMsg =
      "Sorry! Your message was not sent. Please try again or send me an email directly.";
  }

  return (
    <div>
      <span className={msgClass}>{sendingMsg}</span>
    </div>
  );
}

export default FormSubmitMsg;
