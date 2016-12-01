module.exports = {
  entry: {
    'vue-patternfly': ['./src/index'],
    'docs': './docs/index',
  },

  output: {
    path: 'dist',
    publicPath: 'dist',
    filename: '[name].js',
    library: 'VuePatternfly',
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
