export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: process.env.TO_EMAIL,
        from: process.env.FROM_EMAIL,
        subject: "New Membership Submission",
        html: `<p>A new membership form has been submitted via the website.</p>
               <p>Email: ${result.email}</p>
               <p>Full Name: ${result.fullName}</p>
               <p>Organization Name: ${result.organization_name}</p>`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
