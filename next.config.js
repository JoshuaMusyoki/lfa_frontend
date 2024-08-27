// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/LFA_Project' : '',
  assetPrefix: isProd ? '/LFA_Project/' : '',
  images: {
    unoptimized: true,
  },
};
