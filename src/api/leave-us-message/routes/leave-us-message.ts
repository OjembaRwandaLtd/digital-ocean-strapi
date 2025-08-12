export default {
  routes: [
    {
      method: "POST",
      path: "/leave-us-message",
      handler: "leave-us-message.send",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
