import Vue from 'vue';
import VuePatternfly from 'vue-patternfly';

import router from './router';
import PropsTable from './components/props-table.vue';
import PropsRow from './components/props-row.vue';
import SlotsTable from './components/slots-table.vue';
import SlotsRow from './components/slots-row.vue';
import AceEditor from './components/ace-editor.vue';

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
      drawer: {
        hidden: true,
        allowExpand: true,
        title: 'Notification Drawer',
      },
      drawerGroup: {
        title: 'Group 1',
        counter: '4 events',
        action: 'Mark All Read',
        loading: false,
      },
      drawerNotification: {
        type: 'danger',
        date: '29/04/17',
        time: '16:25:56',
        message: 'Notification Danger',
        unread: false,
        action: {
          name: 'Action!',
          title: 'Action Title',
          button: true
        },
        actions: [
          {name: 'Sub action 1'},
          {name: 'Sub action 2'},
          '-',
          {name: 'Sub action 3'},
        ],
      },
      layoutFlex: false,
      layoutHorizontal: false,
      layoutNomargin: false,
      layoutDisabled: false,
      layoutIcons: true,
      layoutCollapsable: true,
    };
  },
});
