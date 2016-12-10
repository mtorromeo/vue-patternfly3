/* global VueRouter */

import HomePage from './pages/home.vue';
import GetStartedPage from './pages/get-started.vue';
import LayoutPage from './pages/layout.vue';
import ComponentsPage from './pages/components.vue';
import NotificationsPage from './pages/notifications.vue';

const router = new VueRouter({
  routes: [{
      path: '/',
      component: HomePage,
    }, {
      path: '/get-started',
      component: GetStartedPage,
    }, {
      path: '/layout',
      component: LayoutPage,
    }, {
      path: '/notifications',
      component: NotificationsPage,
    }, {
      path: '/components',
      component: ComponentsPage,
  }],
});

router.afterEach(() => {
  router.app.$nextTick(() => {
    if (typeof window.Prism != 'undefined') {
      window.Prism.highlightAll();
    }
  });
});

export default router;
