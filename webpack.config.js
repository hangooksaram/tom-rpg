const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[path][name][ext]",
    publicPath: "/dist",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
  },
};
