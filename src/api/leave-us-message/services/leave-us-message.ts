export default ({ strapi, env }) => ({
  sendEmail: async (ctx) => {
    try {
      const { name, email, message } = ctx.request.body;
      await strapi.plugins["email"].services.email.send({
        to: env("TO_EMAIL"),
        from: env("FROM_EMAIL"),
        subject: "New message from contact us form",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
      return {
        success: true,
        message: "Message sent",
      };
    } catch (err) {
      ctx.body = err;
    }
  },
});
