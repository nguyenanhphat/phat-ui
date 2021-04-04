const path = require("path");
const outputDir = path.resolve(__dirname, "dist");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const styleLoader = MiniCssExtractPlugin.loader;
const CSSModuleLoader = {
  loader: "css-loader",
  options: {
    modules: {
      localIdentName: "[local]_[hash:base64:4]",
    },
    importLoaders: 2,
    sourceMap: true, // turned off as causes delay
  },
};
module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: outputDir,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [styleLoader, CSSModuleLoader, "sass-loader"],
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  resolve: {
    alias: {
      "@fundoo/ui": path.resolve(__dirname, "src/"),
    },
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
