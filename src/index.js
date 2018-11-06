require('./index.css');
require('../../dist/vue-patternfly.css');

import Vue from 'vue';
import VuePatternfly from 'vue-patternfly';

Vue.use(VuePatternfly);

import PropsTable from './components/props-table.vue';
import PropsRow from './components/props-row.vue';
import SlotsTable from './components/slots-table.vue';
import SlotsRow from './components/slots-row.vue';
import AceEditor from './components/ace-editor.vue';
import App from './app.vue';

Vue.component(PropsTable.name, PropsTable);
Vue.component(PropsRow.name, PropsRow);
Vue.component(SlotsTable.name, SlotsTable);
Vue.component(SlotsRow.name, SlotsRow);
Vue.component(AceEditor.name, AceEditor);

new Vue({
  extends: App,
}).$mount('#app');
