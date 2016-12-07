/* global VueRouter */

import HomePage from './pages/home.vue';
import LayoutPage from './pages/layout.vue';
import ComponentsPage from './pages/components.vue';
import NotificationsPage from './pages/notifications.vue';

const router = new VueRouter({
  routes: [
    {path: '/', component: HomePage},
    {path: '/layout', component: LayoutPage},
    {path: '/notifications', component: NotificationsPage},
    {path: '/components', component: ComponentsPage},
  ],
});

export default router;
