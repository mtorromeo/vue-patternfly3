var config = require('./webpack.config');

module.exports = {
  entry: {
    'docs': './docs/index'
  },

  output: {
    path: './dist',
    filename: '[name].js',
  },

  module: config.module,
  plugins: config.plugins,
  resolve: config.resolve,
};
