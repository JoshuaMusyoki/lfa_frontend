const { isGithubActions } = require("./isGithubActions");

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

module.exports = {
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
  output: "standalone",
};
