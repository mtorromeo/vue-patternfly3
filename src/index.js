import AggregateStatusCard from './components/AggregateStatusCard.vue';
import C3Chart from './components/C3Chart.vue';
import Card from './components/Card.vue';
import CardNotification from './components/CardNotification.vue';
import EmptyChart from './components/EmptyChart.vue';
import Sort from './components/Sort.vue';
import Toolbar from './components/Toolbar.vue';
import UtilizationBarChart from './components/UtilizationBarChart.vue';
import FilterFields from './components/FilterFields.vue';
import FilterResults from './components/FilterResults.vue';
import Notifications from './components/Notifications.vue';
import Notification from './components/Notification.vue';
import Layout from './components/Layout.vue';
import Tooltip from './directives/tooltip';


const components = {
  AggregateStatusCard,
  C3Chart,
  Card,
  CardNotification,
  EmptyChart,
  Sort,
  Toolbar,
  UtilizationBarChart,
  FilterFields,
  FilterResults,
  Notifications,
  Notification,
  Tooltip,
  Layout,
};

components.install = function(Vue) {
  for (const name of Object.keys(components)) {
    const component = components[name];
    if (component.bind) {
      Vue.directive(component.name || name, component);
    } else {
      Vue.component(component.name || name, component);
    }
  }
};

export default components;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components);
}
