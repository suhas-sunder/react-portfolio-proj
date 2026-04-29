interface FormSubmitMsgProps {
  submissionState: "sending" | "sent" | "error";
}

function FormSubmitMsg({ submissionState }: FormSubmitMsgProps) {
  const messageConfig = {
    sending: {
      message: "Sending...",
      className:
        "rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700",
    },
    sent: {
      message: "Thank you! Your message has been successfully sent.",
      className:
        "rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700",
    },
    error: {
      message:
        "Sorry, your message was not sent. Please try again or send me an email directly.",
      className:
        "rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700",
    },
  };

  const currentMessage = messageConfig[submissionState] ?? messageConfig.error;

  return (
    <div role="status" aria-live="polite" className="mt-4">
      <span className={currentMessage.className}>
        {currentMessage.message}
      </span>
    </div>
  );
}

export default FormSubmitMsg;