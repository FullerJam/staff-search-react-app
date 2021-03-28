const aliases = require("./aliases");
const multi = require('multi-loader');

const CONFIG = {
  node: {
    __filename: true,
    __dirname: true,
  },
  entry: {
    app: "./src/client/client.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false,
            },
          },
        ],
      },
      
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    alias: aliases,
  },
};

module.exports = CONFIG;