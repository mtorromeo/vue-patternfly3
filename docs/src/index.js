/* global Vue */
import router from './router';

Vue.debug = true;

new Vue({
  el: '#app',
  router,

  data() {
    return {
      layoutHorizontal: false,
      layoutDisabled: false,
      layoutIcons: true,
      layoutCollapsable: true,
    };
  },
});
