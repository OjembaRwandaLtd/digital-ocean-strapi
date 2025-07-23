export default {
  async send(ctx) {
    try {
      const res = await strapi
        .service("api::leave-us-message.leave-us-message")
        .sendEmail(ctx);
      ctx.body = res.message;
    } catch (err) {
      ctx.body = err;
    }
  },
};
