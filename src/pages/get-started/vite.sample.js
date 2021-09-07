import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  // you can optionally choose to externalize (some of) your dependencies
  // make sure to include the scripts in your index.html
  rollupOptions: {
    external: ['vue', 'vue-router'],
    output: {
      globals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
      },
    },
  },
  plugins: [vue()],
});
