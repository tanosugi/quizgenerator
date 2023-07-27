/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  compilerOptions: {
    baseUrl: "./",
    paths: {
      "@/*": ["src/*"],
    },
  },
  webpack: (config, { isServer, nextRuntime }) => {
    // Avoid AWS SDK Node.js require issue
    if (isServer && nextRuntime === "nodejs")
      config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ }));
    return config;
  },
};

module.exports = nextConfig;
