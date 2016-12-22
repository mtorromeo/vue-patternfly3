import Vue from 'vue';
import VuePatternfly from 'vue-patternfly';

import router from './router';
import PropsTable from './components/props-table.vue';
import PropsRow from './components/props-row.vue';
import SlotsTable from './components/slots-table.vue';
import SlotsRow from './components/slots-row.vue';
import AceEditor from './components/ace-editor.vue';

Vue.debug = true;

Vue.use(VuePatternfly);

Vue.component(PropsTable.name, PropsTable);
Vue.component(PropsRow.name, PropsRow);
Vue.component(SlotsTable.name, SlotsTable);
Vue.component(SlotsRow.name, SlotsRow);
Vue.component(AceEditor.name, AceEditor);

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
