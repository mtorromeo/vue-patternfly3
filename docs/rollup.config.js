import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue2';
import css from 'rollup-plugin-css-only';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import string from 'rollup-plugin-string';
import resolve from 'rollup-plugin-node-resolve';

const pack = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'));

export default {
  entry: 'src/index.js',
  dest: 'docs.js',
  format: 'iife',
  sourceMap: true,
  globals: {
    c3: 'c3',
    'vue-strap': 'VueStrap',
    'vue-patternfly': 'VuePatternfly',
  },
  external: [
    'c3',
    'vue-strap',
    'vue-patternfly',
  ],
  plugins: [
    vue(),
    css(),
    json(),
    string({
      include: ['**/*.html', '**/*.sample.js'],
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
  ],
};
