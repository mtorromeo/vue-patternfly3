/* global Vue */
import router from './router';

Vue.debug = true;

new Vue({
  el: '#app',
  router,

  data() {
    return {
      layout: 'vertical',
      layoutIcons: true,
      layoutCollapsable: true,
    };
  },
});
