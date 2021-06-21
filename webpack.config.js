const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const outputDir = path.resolve(__dirname, "dist");

const devMode = process.env.NODE_ENV !== "production";
const styleLoader = devMode ? "style-loader" : MiniCssExtractPlugin.loader;

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

const CSSLoader = {
  loader: "css-loader",
  options: {
    modules: "global",
    importLoaders: 2,
    sourceMap: false, // turned off as causes delay
  },
};

const PostCSSLoader = {
  loader: "postcss-loader",
};

const output = devMode
  ? {}
  : {
      // required
      globalObject: "(typeof self !== 'undefined' ? self : this)",
    };

module.exports = {
  entry: "./src/index.js",
  output: {
    path: outputDir,
    filename: "[name].js",
    library: "phat-ui",
    libraryTarget: "umd",
    umdNamedDefine: true,
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
        test: /\.less$/,
        use: [
          styleLoader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [styleLoader, CSSLoader, PostCSSLoader, "sass-loader"],
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [styleLoader, CSSModuleLoader, PostCSSLoader, "sass-loader"],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2|png)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
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
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
      },
    }),
  ],
  externals: ["react", "react-dom", "classnames", "prop-types"],
};
