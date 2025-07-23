export default ({ strapi }) => ({
  sendEmail: async (ctx) => {
    try {
      const { name, email, message } = ctx.request.body;
      await strapi.plugins["email"].services.email.send({
        to: process.env.TO_EMAIL,
        from: process.env.FROM_EMAIL,
        subject: "New message from contact us form",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
      return {
        success: true,
        message: "Message sent successfully.",
      };
    } catch (err) {
      return {
        success: false,
        message: "Failed to send message.",
        error: err.message || err,
      };
    }
  },
});
