import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VuePatternfly',
      fileName: format => `vue-patternfly.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: 'vue-patternfly.[ext]',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
});
