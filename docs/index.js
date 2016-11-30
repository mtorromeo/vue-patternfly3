import Vue from 'vue';
import VuePatternfly from '../src/plugin';
import Dropdown from 'vue-strap/src/Dropdown.vue';

Vue.debug = true;
Vue.use(VuePatternfly);

new Vue({
  el: '#app',

  components: {
    Dropdown,
  },

  data() {
    return {
      sortField: {},
      sortAscending: true,
      filters: [],
      notificationMessage: 'Test notification',
      notificationType: 'info',
      notificationToast: false,
    };
  },

  methods: {
    notify() {
      this.$refs.notifications.add(`<strong>${this.notificationType}!</strong> ${this.notificationMessage}`, this.notificationType);
    },
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
