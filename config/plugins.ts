export default ({ env }) => {
  console.log("we are here ===========", {
    provider: env("UPLOAD_PROVIDER"),
    providerOptions: {
      credentials: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
      },
      region: env("DO_SPACE_REGION"),
      endpoint: env("DO_SPACE_ENDPOINT"),
      params: {
        Bucket: env("AWS_BUCKET"),
      },
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  });
  return {
    upload: {
      config: {
        provider: env("UPLOAD_PROVIDER"),
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env("AWS_ACCESS_KEY_ID"),
              secretAccessKey: env("AWS_ACCESS_SECRET"),
            },
          },
          region: env("DO_SPACE_REGION"),
          endpoint: env("DO_SPACE_ENDPOINT"),
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
  };
};
