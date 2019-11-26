import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ './pages/home.vue'),
    }, {
      path: '/get-started',
      component: () => import(/* webpackChunkName: "get-started" */ './pages/get-started.vue'),
    }, {
      path: '/layout',
      component: () => import(/* webpackChunkName: "layout" */ './pages/layout.vue'),
    }, {
      path: '/application-launcher',
      component: () => import(/* webpackChunkName: "application-launcher" */ './pages/application-launcher.vue'),
    }, {
      path: '/notifications/drawer',
      component: () => import(/* webpackChunkName: "drawer" */ './pages/drawer.vue'),
    }, {
      path: '/notifications',
      component: () => import(/* webpackChunkName: "notifications" */ './pages/notifications.vue'),
    }, {
      path: '/cards',
      component: () => import(/* webpackChunkName: "cards" */ './pages/cards.vue'),
    }, {
      path: '/toolbar',
      component: () => import(/* webpackChunkName: "toolbar" */ './pages/toolbar.vue'),
    }, {
      path: '/modal',
      component: () => import(/* webpackChunkName: "modal" */ './pages/modal.vue'),
    }, {
      path: '/table',
      component: () => import(/* webpackChunkName: "table" */ './pages/table.vue'),
    }, {
      path: '/list-view',
      component: () => import(/* webpackChunkName: "list-view" */ './pages/list-view.vue'),
    }, {
      path: '/charts',
      component: () => import(/* webpackChunkName: "charts" */ './pages/charts.vue'),
    }, {
      path: '/expand-collapse',
      component: () => import(/* webpackChunkName: "expand-collapse" */ './pages/expand-collapse.vue'),
    }, {
      path: '/form-controls',
      component: () => import(/* webpackChunkName: "form-controls" */ './pages/form-controls.vue'),
    }, {
      path: '/utilization-bar',
      component: () => import(/* webpackChunkName: "utilization-bar" */ './pages/utilization-bar.vue'),
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
