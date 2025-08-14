module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        region: env("AWS_REGION"),
        endpoint: env("DO_SPACE_ENDPOINT"),
        credentials: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
        },
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        //Oauth2 configuration for Gmail
        //service: "gmail",
        // auth: {
        //   type: "OAuth2",
        //   user: env("AUTH_EMAIL"),
        //   clientId: env("GOOGLE_CLIENT_ID"),
        //   clientSecret: env("GOOGLE_CLIENT_SECRET"),
        //   refreshToken: env("GOOGLE_REFRESH_TOKEN"),
        // },

        //App password configuration
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("AUTH_USER"),
          pass: env("APP_PASS"),
        },
      },
    },
    settings: {
      defaultFrom: env("FROM_EMAIL"),
      defaultReplyTo: env("TO_EMAIL"),
    },
  },
});
