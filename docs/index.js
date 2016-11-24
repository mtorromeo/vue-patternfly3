import Vue from 'vue';
import VuePatternfly from '..';

Vue.debug = true;
Vue.use(VuePatternfly);

new Vue({
  el: '#app',

  data() {
    return {
      filters: [],
    };
  },

  methods: {
    addFilter(filter, value) {
      const f = {};
      f[filter.title] = value;
      this.filters.push(f);
    },
  },
});
