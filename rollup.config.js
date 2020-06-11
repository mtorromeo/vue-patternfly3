/* global __dirname */

import path from 'path';
import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const {name} = require('./package.json');

const external = ['vue', 'uiv', 'c3'];

module.exports = {
  input: path.resolve(src, 'index.js'),
  external,
  plugins: [
    // we just want to remove css, webpack already builds a correct stylesheet
    css({output: false}),
    vue({
      css: false,
      style: {
        preprocessOptions: {
          scss: {
            // node-sass custom importer to resolve tilde prefix to local node_modules dir
            importer: url => ({
              file: url.replace(/^~/, 'node_modules/'),
            }),
          },
        },
      },
    }),
    json(),
    resolve({external}),
    commonjs(),
    babel({
      babelrc: false,
      presets: [
        ['@babel/preset-env', {modules: false}],
      ],
      plugins: [
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-transform-async-to-generator',
        '@babel/plugin-transform-destructuring',
        '@babel/plugin-proposal-object-rest-spread',
      ],
    }),
  ],
  output: [
    {
      format: 'es',
      file: path.resolve(dist, `${name}.esm.js`),
      sourcemap: true,
    },
  ],
};
