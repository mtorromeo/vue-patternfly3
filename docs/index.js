import Vue from 'vue';
import VuePatternfly from '../src';

import router from './router';

Vue.debug = true;
Vue.use(VuePatternfly);

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
