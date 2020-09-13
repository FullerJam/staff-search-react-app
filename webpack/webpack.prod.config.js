const BASE_CONFIG = require("./webpack.base.config");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const path = require("path");

const CONFIG = {
  mode: "production",
  target: "web",
  entry: {
    app: "./src/client/client.js",
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template:
        "!!raw-loader!" + path.resolve(__dirname, "../src/views/index.ejs"),
      filename: "index.html",
    }),

    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../public"),
        to: path.resolve(__dirname, "../dist/static"),
      },
    ]),
  ],
};

module.exports = merge(BASE_CONFIG, CONFIG);