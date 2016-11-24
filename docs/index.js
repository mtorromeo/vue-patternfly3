import Vue from 'vue';
import VuePatternfly from '..';

Vue.debug = true;
Vue.use(VuePatternfly);

new Vue({
  el: '#app',

  data() {
    return {
      sortField: {},
      sortAscending: true,
    };
  },

  methods: {
    setSort(field, ascending) {
      this.sortField = field;
      this.sortAscending = ascending;
    }
  }
});
