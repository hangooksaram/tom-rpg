const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const entry = {
  app: "./src/app.ts",
  game: { dependOn: "app", import: "./src/game/game.ts" },
};

module.exports = {
  entry,
  mode: "development",
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
  performance: {
    maxEntrypointSize: 5000000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        default: false,
        defaultVendors: false,
        rest_node_modules: {
          chunks: "all",
          test: /node_modules[/\\]/,
          name: "node_modules1",
          priority: 1,
          minChunks: 1,
          reuseExistingChunk: true,
        },

        firebase: {
          name: "firebase",
          test: /(?<!node_modules.*)[\\/]node_modules[\\/]@firebase/,
          priority: 2,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
