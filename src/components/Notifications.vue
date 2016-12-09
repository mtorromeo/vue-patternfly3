<template>
<div :class="{'toast-notifications-list-pf': toast}" v-show="$slots.default || notifications.length">
  <slot></slot>
  <pf-notification ref="notification" v-for="(n, i) in notifications" :persistent="n.persistent" :type="n.type" :toast="toast" @dismiss="dismiss(i)">
    <div v-html="n.message"></div>
  </pf-notification>
</div>
</template>

<script>
import PfNotification from './Notification.vue';

export default {
  name: 'pf-notifications',

  components: {
    PfNotification,
  },

  props: {
    toast: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      notifications: [],
    };
  },

  methods: {
    add(notification, type = 'info', persistent = false) {
      if (typeof notification == 'string') {
        notification = {
          message: notification,
          type: type,
          persistent: persistent,
        };
      }
      this.notifications.push(notification);
    },

    dismiss(i) {
      if (typeof i == 'object') {
        const obj = i;
        i = this.notifications.indexOf(obj);
        if (i < 0) {
          return;
        }
      }
      this.notifications.splice(i, 1);
    },
  },
};
</script>
