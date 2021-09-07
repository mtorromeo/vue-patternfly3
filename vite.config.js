import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteExternalsPlugin } from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  base: './',
  build: {
    outDir: '..',
  },
  plugins: [
    vue(),
    viteExternalsPlugin({
      vue: 'Vue',
      'vue-router': 'VueRouter',
    }),
  ],
});
