const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const entry = {
  app: "./src/app.ts",
  game: "./src/game/game.ts",
};

module.exports = {
  entry,
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
};
