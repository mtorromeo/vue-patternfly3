const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'vue-patternfly': './src/index.js',
  },

  output: {
    path: 'dist',
    filename: '[name].js',
    library: 'VuePatternfly',
    libraryTarget: 'umd',
  },

  externals: {
    'c3': 'c3',
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /\/node_modules\/(?!vue-strap)/,
    }, {
      test: /\.html?$/,
      loader: 'html-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader',
      }),
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
    }]
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js',
    }
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
  ],
};
