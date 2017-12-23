import './index.css';

import AggregateStatusCard from './components/AggregateStatusCard.vue';
import ApplicationLauncher from './components/ApplicationLauncher.vue';
import LauncherItem from './components/LauncherItem.vue';
import C3Chart from './components/C3Chart.vue';
import Card from './components/Card.vue';
import CardNotification from './components/CardNotification.vue';
import EmptyChart from './components/EmptyChart.vue';
import Sort from './components/Sort.vue';
import ColumnPicker from './components/ColumnPicker.vue';
import Toolbar from './components/Toolbar.vue';
import UtilizationBarChart from './components/UtilizationBarChart.vue';
import FilterFields from './components/FilterFields.vue';
import FilterResults from './components/FilterResults.vue';
import Notifications from './components/Notifications.vue';
import Notification from './components/Notification.vue';
import NotificationBell from './components/NotificationBell.vue';
import Drawer from './components/Drawer.vue';
import DrawerGroup from './components/DrawerGroup.vue';
import DrawerNotification from './components/DrawerNotification.vue';
import Layout from './components/Layout.vue';
import Table from './components/Table.vue';
import PaginateControl from './components/PaginateControl.vue';
import VerticalSubmenu from './components/VerticalSubmenu.vue';
import Spinner from './components/Spinner.vue';
import Tooltip from './directives/tooltip';
import Select from './components/Select.vue';
import Option from './components/Option.vue';

import VueStrap from './vue-strap';

const VuePatternfly = {
  AggregateStatusCard,
  ApplicationLauncher,
  LauncherItem,
  C3Chart,
  Card,
  CardNotification,
  EmptyChart,
  Sort,
  ColumnPicker,
  Toolbar,
  UtilizationBarChart,
  FilterFields,
  FilterResults,
  Notifications,
  Notification,
  NotificationBell,
  Drawer,
  DrawerGroup,
  DrawerNotification,
  Tooltip,
  Layout,
  Table,
  VerticalSubmenu,
  PaginateControl,
  Spinner,
  Select,
  Option,
};

VuePatternfly.install = function(Vue) {
  for (const name of Object.keys(VuePatternfly)) {
    const component = VuePatternfly[name];
    if (component.bind) {
      Vue.directive(component.name || name, component);
    } else {
      Vue.component(component.name || name, component);
    }
  }

  VueStrap.install(Vue);
};

export default VuePatternfly;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePatternfly);
}
