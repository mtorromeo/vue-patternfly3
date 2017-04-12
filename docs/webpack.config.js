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
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /\/dist\/|\/node_modules\/|\.sample\.js$/,
    }, {
      test: /\.html?$|\.sample\.js$/,
      loader: {
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
    }]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'vue-patternfly$': path.resolve('../dist/vue-patternfly.js'),
    }
  },
};
