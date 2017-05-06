import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './pages/home.vue';
import GetStartedPage from './pages/get-started.vue';
import LayoutPage from './pages/layout.vue';
import NotificationsPage from './pages/notifications.vue';
import DrawerPage from './pages/drawer.vue';
import CardsPage from './pages/cards.vue';
import ToolbarPage from './pages/toolbar.vue';
import TablePage from './pages/table.vue';
import ComponentsPage from './pages/components.vue';

Vue.use(VueRouter);

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
      path: '/drawer',
      component: DrawerPage,
    }, {
      path: '/cards',
      component: CardsPage,
    }, {
      path: '/toolbar',
      component: ToolbarPage,
    }, {
      path: '/table',
      component: TablePage,
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
