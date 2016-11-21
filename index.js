import AggregateStatusCard from './components/AggregateStatusCard.vue';
import Card from './components/Card.vue';
import CardNotification from './components/CardNotification.vue';

export default {
  install(Vue) {
    Vue.component('pf-card', Card);
    Vue.component('pf-aggregate-status-card', AggregateStatusCard);
    Vue.component('pf-card-notification', CardNotification);
  },
};
