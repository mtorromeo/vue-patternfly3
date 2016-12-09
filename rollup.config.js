import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue2';
import css from 'rollup-plugin-css-only';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const pack = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'));

export default {
  entry: 'src/index.js',
  exports: 'named',
  moduleId: pack.name,
  moduleName: 'VuePatternfly',
  globals: {
    c3: 'c3',
    'vue-strap': 'VueStrap',
  },
  external: [
    'c3',
    'vue-strap',
  ],
  targets: [{
    format: 'umd',
    dest: `dist/${pack.name}.js`,
    env: 'development'
  }, {
    format: 'umd',
    dest: `dist/${pack.name}.min.js`,
    env: 'production',
  }, {
    format: 'cjs',
    dest: `dist/${pack.name}.common.js`
  }],
  plugins: [
    vue(),
    css(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
  ],
};
