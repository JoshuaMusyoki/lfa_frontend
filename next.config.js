/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,  // Ensures that images work with static export
    },
};

module.exports = nextConfig;
