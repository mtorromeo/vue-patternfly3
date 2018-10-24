/* global __dirname */

import path from 'path';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const {name} = require('./package.json');

const external = ['vue', 'uiv', 'c3'];

module.exports = {
  input: path.resolve(src, 'index.js'),
  external,
  plugins: [
    vue(),
    json(),
    postcss(),
    resolve({external}),
    commonjs({
      namedExports: {
        'node_modules/portal-vue/dist/portal-vue.js': ['PortalTarget', 'Portal'],
      },
    }),
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
