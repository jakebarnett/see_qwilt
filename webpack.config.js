var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/app.js",
  debug: true,
  watch: true,
	devtool: 'source-map',
  output: {
    path: path.join(__dirname, "dist", "assets"),
    publicPath: "./",
    filename: "bundle.js",
    chunkFilename: "[chunkhash].js"
  },
  resolve: {
    modulesDirectories: [ 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.css/, 	loader: "style-loader!css-loader" },
			{ test: /\.scss$/,loaders: ["style", "css", "sass"] },
      { test: /\.gif/, 	loader: "url-loader?limit=10000&minetype=image/gif" },
      { test: /\.jpg/, 	loader: "url-loader?limit=10000&minetype=image/jpg" },
      { test: /\.png/, 	loader: "url-loader?limit=10000&minetype=image/png" },
      { test: /\.js$/, 	loader: "jsx-loader" },
    ],
    noParse: /\.min\.js/
  },
  plugins: [

  ]
};
