import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import embedCSS from 'rollup-plugin-embed-css';
import cssPorter from 'rollup-plugin-css-porter';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import omt from '@surma/rollup-plugin-off-main-thread';
import fs from 'fs';
import path from 'path';
import util from 'util';

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

const external = ['vue', 'uiv', 'c3', 'portal-vue'];
const globals = {
  c3: 'c3',
  vue: 'Vue',
  uiv: 'uiv',
  'portal-vue': 'PortalVue',
};

const input = {
  index: 'src',
  'slot-monitor': 'src/mixins/SlotMonitor',
};

const baseVueOptions = {
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
};

export default (async () => {
  const files = await readdir('src/components');

  for (const f of files) {
    const ext = path.extname(f);
    const name = path.basename(f, ext);

    if (name === 'index') {
      continue;
    }

    const distName = name.replace(/([A-Z])/g, ' $1').trim().replace(/ /g, '-').toLowerCase();
    input[distName] = `src/components/${f}`;
  }

  const baseConfig = {
    input,
    external,
    plugins: [
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
  };

  function config(css = null, vueOptions = {}, extraPlugins = []) {
    return {
      ...baseConfig,
      plugins: [
        css === null
        ? embedCSS()
        : cssPorter(css ? css : {
          raw: false,
          minified: false,
        }),
        vue({
          ...baseVueOptions,
          ...vueOptions,
        }),
        ...baseConfig.plugins,
        ...extraPlugins,
      ],
      output: {
        dir: 'dist/esm',
        format: 'esm',
        globals,
      },
    };
  }

  return [
    {
      ...config(null, {}, [
        omt({
          loader: await readFile('./rollup-omt-loader.ejs', 'utf-8'),
          globals: {
            ...globals,
            'vue-patternfly': 'VuePatternfly',
          },
        }),
        terser(),
      ]),
      output: {
        dir: 'amd',
        format: 'amd',
        sourcemap: true,
        globals,
      },
    },
    {
      ...config(),
      output: [{
          dir: 'esm',
          format: 'esm',
          globals,
        }, {
          dir: 'cjs',
          format: 'cjs',
          globals,
        },
      ],
    },
    {
      ...config(false, {template: {optimizeSSR: true}}),
      output: {
        dir: 'ssr',
        format: 'cjs',
        globals,
      },
    },
    {
      ...config(false, {css: false}),
      input: input.index,
      output: {
        file: 'dist/vue-patternfly.js',
        format: 'iife',
        sourcemap: true,
        name: 'VuePatternfly',
        globals,
      },
    },
    {
      ...config({
        raw: 'dist/vue-patternfly.css',
        minified: 'dist/vue-patternfly.min.css',
      }, {css: false}, [terser()]),
      input: input.index,
      output: {
        file: 'dist/vue-patternfly.min.js',
        format: 'iife',
        sourcemap: true,
        name: 'VuePatternfly',
        globals,
      },
    },
  ];
})();
