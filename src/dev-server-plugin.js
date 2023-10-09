const webpack = require('webpack');

module.exports = () => ({
  name: "dev-server-plugin",

  configureWebpack() {
    return {
      devServer: {
        host: '0.0.0.0',
        client: {
          webSocketURL: {
            port: 0,
          },
        },
      },
      resolve: {
        fallback: {
          path: false,
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: 'process',
        }),
      ],
    };
  },
});