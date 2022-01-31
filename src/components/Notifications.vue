<template>
  <div v-show="$slots.default || notifications.length" v-bind="ouiaProps" :class="{'toast-notifications-list-pf': toast}">
    <slot />
    <pf-notification v-for="(n, i) in notifications" ref="notification" :key="i" :persistent="n.persistent" :type="n.type" :toast="toast" @dismiss="dismiss(i)">
      <span v-html="n.message" />
    </pf-notification>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import PfNotification, { Notification, NotificationType } from './Notification.vue';

export default defineComponent({
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

  data(this: void) {
    return {
      notifications: [] as Notification[],
    };
  },

  methods: {
    add(message: string | Notification, type: NotificationType = 'info', persistent?: boolean) {
      let notification: Notification;
      if (typeof message === 'string') {
        notification = {
          message,
          type,
          persistent: typeof persistent === 'undefined' ? this.persistent : persistent,
        };
      } else {
        notification = message;
      }
      this.notifications.push(notification);
    },

    dismiss(i: number | Notification) {
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
});
</script>
