module.exports = ({ env }) => ({
upload: {
      config: {
        provider: env('UPLOAD_PROVIDER'),
        providerOptions: {
          s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),

          },
          region: env('AWS_REGION'),
          endpoint: env('DO_SPACE_ENDPOINT'),
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        },
      },  
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
    },
    },
});