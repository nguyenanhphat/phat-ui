const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const outputDir = path.resolve(__dirname, "dist");

const styleLoader = MiniCssExtractPlugin.loader;
const CSSModuleLoader = {
  loader: "css-loader",
  options: {
    modules: {
      localIdentName: "[local]_[hash:base64:4]",
    },
    importLoaders: 2,
    sourceMap: true,
  },
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: outputDir,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [styleLoader, CSSModuleLoader, "sass-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "phat-ui": path.resolve(__dirname, "src/"),
    },
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  target: "web",
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
