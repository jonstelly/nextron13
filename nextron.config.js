module.exports = {
  mainSrcDir: "main",
  webpack: (defaultConfig, env) =>
    Object.assign(defaultConfig, {
      entry: {
        background: "./main/background.js",
      },
    }),
};

