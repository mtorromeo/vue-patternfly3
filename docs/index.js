import Vue from 'vue';
import VuePatternfly from '../src/plugin';

Vue.debug = true;
Vue.use(VuePatternfly);

new Vue({
  el: '#app',

  data() {
    return {
      sortField: {},
      sortAscending: true,
      filters: [],
    };
  },

  methods: {
    setSort(field, ascending) {
      this.sortField = field;
      this.sortAscending = ascending;
    },
    addFilter(filter, value) {
      const f = {};
      f[filter.title] = value;
      this.filters.push(f);
    },
  },
});
