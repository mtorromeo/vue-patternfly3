import Vue from 'vue';
import VuePatternfly from 'vue-patternfly';

import router from './router';
import PropsTable from './components/props-table.vue';
import PropsRow from './components/props-row.vue';
import AceEditor from './components/ace-editor.vue';

Vue.debug = true;

Vue.use(VuePatternfly);

Vue.component(PropsTable.name, PropsTable);
Vue.component(PropsRow.name, PropsRow);
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
