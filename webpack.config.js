// webpack.config.js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const path = require("path");

module.exports = () => ({
  mode: "development",
  entry: {
    app: "./src/client/index",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new CleanWebpackPlugin(), new LoadablePlugin()],
});
