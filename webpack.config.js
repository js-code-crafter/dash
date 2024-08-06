const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: {
  //   js: { import: "./src/index.js", filename: "./main.js" },
  // },
  // output: {
  //   path: path.resolve(__dirname, "./dist"),
  // },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/dash.min.css",
    }),
  ],
  mode: 'production',
};
