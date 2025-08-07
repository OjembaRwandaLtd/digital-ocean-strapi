/**
 * member-submission controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::member-submission.member-submission",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        const response = await super.create(ctx);
        return {
          status: "success",
          message: "Submitted successfully",
          ...response,
        };
      } catch (error) {
        ctx.status = 400;
        return {
          status: "failed",
          message: "Failed to submit",
          error: error.message || error,
        };
      }
    },
  })
);
