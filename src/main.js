import 'vue-patternfly/vue-patternfly.css';

import { createApp } from 'vue';
import VuePatternfly from 'vue-patternfly';

import PropsTable from './components/props-table.vue';
import PropsRow from './components/props-row.vue';
import SlotsTable from './components/slots-table.vue';
import SlotsRow from './components/slots-row.vue';
import AceEditor from './components/ace-editor.vue';

import router from './router';
import App from './app.vue';

const app = createApp(App);
app.config.unwrapInjectedRef = true;
app.use(VuePatternfly);
app.use(router);
app.component(PropsTable.name, PropsTable);
app.component(PropsRow.name, PropsRow);
app.component(SlotsTable.name, SlotsTable);
app.component(SlotsRow.name, SlotsRow);
app.component(AceEditor.name, AceEditor);
app.mount('#app');
