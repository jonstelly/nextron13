const nextConfig = {
  output: "export",
  distDir: "../app",
  webpack: (config, { isServer }) => {
    console.info(`next.webpack(${isServer})`);
    if (!isServer) {
      config.target = "electron-renderer";
    }
    return config;
  },
};

module.exports = nextConfig;

