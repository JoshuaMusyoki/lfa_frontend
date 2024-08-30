// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: isProd ? '/lfa_frontend' : '',
    assetPrefix: isProd ? '/lfa_frontend/' : '',
    images: {
        unoptimized: true,
    },
    output: 'export',
};
