const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/myonlinepool.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: [/\.scss$/, /\.css$/],
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: [
      path.resolve(__dirname, 'frontend'),
      path.resolve(__dirname, 'node_modules')
    ]
  }
};
