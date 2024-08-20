const path = require("path");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: "./src/app.ts",
    game: "./src/game/game.ts",
  },
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
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[path][name][ext]",
    publicPath: "/dist",
  },
  // plugins: [new BundleAnalyzerPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
  },
};
