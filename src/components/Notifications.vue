<template>
  <div v-show="$slots.default || notifications.length" v-bind="ouiaProps" :class="{'toast-notifications-list-pf': toast}">
    <slot />
    <pf-notification v-for="(n, i) in notifications" ref="notification" :key="i" :persistent="n.persistent" :type="n.type" :toast="toast" @dismiss="dismiss(i)">
      <span v-html="n.message" />
    </pf-notification>
  </div>
</template>

<script>
import { ouiaProps, useOUIAProps } from '../ouia';
import PfNotification from './Notification.vue';

export default {
  name: 'PfNotifications',

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
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },

  data() {
    return {
      notifications: [],
    };
  },

  methods: {
    add(notification, type = 'info', persistent) {
      if (typeof notification !== 'object') {
        notification = {
          message: notification,
          type,
          persistent: typeof persistent === 'undefined' ? this.persistent : persistent,
        };
      }
      this.notifications.push(notification);
    },

    dismiss(i) {
      if (typeof i === 'object') {
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
