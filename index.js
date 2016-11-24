import AggregateStatusCard from './components/AggregateStatusCard.vue';
import Card from './components/Card.vue';
import CardNotification from './components/CardNotification.vue';
import C3Chart from './components/C3Chart.vue';
import UtilizationBarChart from './components/UtilizationBarChart.vue';
import EmptyChart from './components/EmptyChart.vue';
import Toolbar from './components/Toolbar.vue';
import Sort from './components/Sort.vue';
import Dropdown from './components/Dropdown.vue';

export default {
  install(Vue) {
    Vue.component(Card.name, Card);
    Vue.component(AggregateStatusCard.name, AggregateStatusCard);
    Vue.component(CardNotification.name, CardNotification);
    Vue.component(C3Chart.name, C3Chart);
    Vue.component(UtilizationBarChart.name, UtilizationBarChart);
    Vue.component(EmptyChart.name, EmptyChart);
    Vue.component(Toolbar.name, Toolbar);
    Vue.component(Sort.name, Sort);
    Vue.component('pf-dropdown', Dropdown);
  },
};
