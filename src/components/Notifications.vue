<template>
<div v-show="notifications.length > 0">
  <pf-inline-notification v-for="(n, i) in notifications" :persistent="n.persistent" :type="n.type" @dismiss="dismiss(i)">
    <div v-html="n.message"></div>
  </pf-inline-notification>
</div>
</template>

<script>
import PfInlineNotification from './InlineNotification.vue';

export default {
  name: 'pf-notifications',

  components: {
    PfInlineNotification,
  },

  data() {
    return {
      notifications: [],
    };
  },

  methods: {
    add(message, type = 'info', persistent = false) {
      this.notifications.push({
        message: message,
        type: type,
        persistent: persistent,
      });
    },

    dismiss(i) {
      this.notifications.splice(i, 1);
    },
  },
};
</script>
