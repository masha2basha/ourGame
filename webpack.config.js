const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
    return {
      mode: env.mode ?? 'development',
      entry: path.resolve(__dirname, 'src', 'main.js'),
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        clean: true
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
    ],
  }
};