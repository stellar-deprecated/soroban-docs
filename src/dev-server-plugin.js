module.exports = () => ({
  name: "dev-server-plugin",

  configureWebpack(config) {
    config.module.rules.push({
      test: /\.(js|mjs|jsx)$/,
      enforce: "pre",
      loader: require.resolve("source-map-loader"),
      resolve: {
        fullySpecified: false,
      },
    });

    return {
      devServer: {
        host: "0.0.0.0",
        client: {
          webSocketURL: {
            port: 0,
          },
        },
      },
    };
  },
});
