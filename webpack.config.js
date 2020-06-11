/* global __dirname */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => {
  const production = env === 'production';

  return {
    entry: {
      'vue-patternfly': './src/index.js',
    },

    output: {
      path: path.join(__dirname, 'dist'),
      filename: production ? '[name].min.js' : '[name].js',
      library: 'VuePatternfly',
      libraryTarget: 'umd',
    },

    externals: {
      vue: 'vue',
      c3: 'c3',
    },

    devtool: 'source-map',

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
        test: /\/patternfly-settings-colors\.js/,
        use: [
          'imports-loader?patternfly=>{},window=>{patternfly}',
          'exports-loader?exports=default patternfly.pfPaletteColors',
        ],
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /\/node_modules\//,
      }, {
        test: /\.html?$/,
        loader: 'html-loader',
      }, {
        test: /\.(?:s[ac]|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
      }],
    },

    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: production ? '[name].min.css' : '[name].css',
      }),
      new VueLoaderPlugin(),
    ],

    optimization: {
      minimizer: production ? [
        new OptimizeCSSAssetsPlugin({}),
      ] : [],
    },
  };
};
