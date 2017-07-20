'use es6';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './javascript/start.js',
    './styles/main.scss',
  ],

  output: {
    path: path.resolve(__dirname, 'public', 'built'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: 'http://localhost:8080/built/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['es2015', 'react'] },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      { test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
