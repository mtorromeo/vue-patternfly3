var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'vue-patternfly': './index'
  },

  output: {
    path: 'dist',
    filename: '[name].js',
    library: 'VuePatternfly',
    libraryTarget: 'this',
  },

  module: {
    loaders: [{
      test: /\/javascript\/[^/]+\.js?$/,
      loader: 'script',
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules\/(?!vue-strap)|bower_components|\/javascript\/[^/]+\.js)/,
      loader: 'babel',
      query: {
        compact: false,
      },
    }, {
      test: /\.vue$/,
      loader: 'vue',
    }],
  },

  plugins: [
    new CleanPlugin(['dist'], {
      verbose: true,
    }),
  ],

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
};
