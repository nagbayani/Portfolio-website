import emailjs from "@emailjs/browser";

const sendCustomEmail = (details: any) => {
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  console.log(
    import.meta.env.VITE_EMAIL_USER_ID,
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID
  );
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_name: details.from_name,
        reply_to: details.reply_to,
        message: details.message,
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};

export { sendCustomEmail };
