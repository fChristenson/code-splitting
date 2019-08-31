const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "public", "js", "main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[name].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  }
};
