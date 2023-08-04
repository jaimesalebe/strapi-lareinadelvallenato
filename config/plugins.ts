module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID', undefined),
                secretAccessKey: env('AWS_ACCESS_SECRET', undefined),
                region: env('AWS_REGION', undefined),
                params: {
                    ACL: env('AWS_ACL', 'public-read'),
                    signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
                    Bucket: env('AWS_BUCKET'),
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