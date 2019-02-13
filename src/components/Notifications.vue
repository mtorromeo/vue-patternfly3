<template>
<div :class="{'toast-notifications-list-pf': toast}" v-show="$slots.default || $scopedSlots.default || notifications.length">
  <slot/>
  <pf-notification ref="notification" v-for="(n, i) in notifications" :key="i" :persistent="n.persistent" :type="n.type" :toast="toast" @dismiss="dismiss(i)">
    <span v-html="n.message"></span>
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
    persistent: {
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
    add(notification, type = 'info', persistent) {
      if (typeof notification != 'object') {
        notification = {
          message: notification,
          type,
          persistent: typeof persistent == 'undefined' ? this.persistent : persistent,
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
