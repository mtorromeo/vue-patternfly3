/* global Vue */
import router from './router';
import PropsTable from './components/props-table.vue';
import PropsRow from './components/props-row.vue';

Vue.debug = true;

Vue.component(PropsTable.name, PropsTable);
Vue.component(PropsRow.name, PropsRow);

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
