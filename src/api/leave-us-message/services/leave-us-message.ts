export default ({ strapi }) => ({
  sendEmail: async (ctx) => {
    try {
      const { name, email, message, company_name } = ctx.request.body;
      await strapi.plugins["email"].services.email.send({
        to: process.env.TO_EMAIL,
        from: process.env.FROM_EMAIL,
        subject: "New Message from Your Website's Contact Form",
        html: `<div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
    <h2 style="color: #444;">You’ve received a new message</h2>
    <hr style="border: none; border-top: 1px solid #eee;" />

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Company Name:</strong> ${company_name || "Not provided"}</p>

    <p><strong>Message:</strong></p>
    <div style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #ccc; white-space: pre-line;">
      ${message}
    </div>
    <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;" />
    <p style="font-size: 12px; color: #888;">This message was submitted via your website's contact form.</p>
  </div>`,
      });

      ctx.body = {
        status: 200,
        message: "Message sent successfully!",
      };
    } catch (err) {
      ctx.body = {
        status: 500,
        message: "Failed to send message.",
      };
    }
  },
});
