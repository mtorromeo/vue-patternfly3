const path = require('path');

module.exports = {
  entry: {
    docs: './src',
  },

  output: {
    path: '.',
    filename: '[name].js',
  },

  externals: {
    'c3': 'c3',
    'vue-router': 'VueRouter',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /\/dist\/|\.sample\.js$/,
    }, {
      test: /\.html?$|\.sample\.js$/,
      loader: 'html?-minimize',
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.vue$/,
      loader: 'vue',
    }]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vue-patternfly$': path.resolve('../dist/vue-patternfly.js'),
    }
  },
};
