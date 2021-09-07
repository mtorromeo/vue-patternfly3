import 'vue-patternfly/vue-patternfly.css';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import VuePatternfly from 'vue-patternfly';
import App from './App.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/home.vue'),
    },
    {
      path: '/get-started',
      component: () => import('./pages/get-started.vue'),
    },
  ],
});

const app = createApp(App);
app.config.unwrapInjectedRef = true;
app.use(VuePatternfly);
app.use(router);
app.mount('#app');
