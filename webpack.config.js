const path = require("path");

module.exports = {
  entry: "./src/pages/index", // Replace with your TypeScript entry file
  output: {
    filename: "bundle.js", // Output JavaScript bundle file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Loaders to handle CSS files
      },
      {
        test: /\.ts$/, // Match TypeScript files
        use: "ts-loader", // Loader to transpile TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Allow importing TypeScript files without file extensions
  },
};
