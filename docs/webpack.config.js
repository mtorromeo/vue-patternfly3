module.exports = {
  entry: {
    'docs': './src/index',
  },

  output: {
    path: '.',
    filename: '[name].js',
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
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.vue$/,
      loader: 'vue',
    }],
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
};
