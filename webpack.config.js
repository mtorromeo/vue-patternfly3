/* global __dirname */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'vue-patternfly': './src/index.js',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'VuePatternfly',
    libraryTarget: 'umd',
  },

  externals: {
    'c3': 'c3',
  },

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(vue|js)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      options: {
        formatter: require('eslint-friendly-formatter'),
      },
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /\/node_modules\/(?!vue-strap)/,
    }, {
      test: /\.html?$/,
      loader: 'html-loader',
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
    }]
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
