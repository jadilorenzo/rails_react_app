const path = require('path')
require('babel-polyfill')

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  entry: ['babel-polyfill', './app/javascript/application.js'],
  output: {
    filename: 'application.js',
    sourceMapFilename: 'application.map',
    path: path.resolve(__dirname, 'app/assets/builds'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
    ],
  },
}
