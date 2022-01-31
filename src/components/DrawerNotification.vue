<template>
  <div
    v-bind="ouiaProps"
    class="drawer-pf-notification"
    :class="{unread, 'expanded-notification': drawerExpanded}"
  >
    <pf-dropdown v-if="showDropdown" class="pull-right dropdown-kebab-pf" type="link" :append-to="drawerDropdowns" menu-right>
      <li
        v-for="(actionItem, i) in actions"
        :key="isAction(actionItem) ? actionItem.name : i"
        :role="isAction(actionItem) ? 'menuitem' : 'separator'"
        :class="{
          divider: !isAction(actionItem),
          disabled: isAction(actionItem) && actionItem.disabled === true,
        }"
      >
        <a
          v-if="isAction(actionItem)"
          class="secondary-action"
          :title="actionItem.title"
          @click="triggered(actionItem)"
        >
          {{ actionItem.name }}
        </a>
      </li>
    </pf-dropdown>

    <pf-button
      v-if="action && action.name"
      class="pull-right"
      :variant="buttonVariant"
      :title="action.title"
      @click="triggered(action)"
    >
      {{ action.name }}
    </pf-button>

    <pf-icon class="pull-left" :name="typeIcon" />
    <span class="drawer-pf-notification-message">
      <slot>{{ message }}</slot>
    </span>
    <span v-if="date || time || $slots.info" class="drawer-pf-notification-info">
      <slot name="info">
        <span v-if="date" class="date">{{ date }}</span>
        <span v-if="time" class="time">{{ time }}</span>
      </slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import PfButton, { ButtonVariant } from './Button.vue';
import PfDropdown from './Dropdown.vue';
import { isNotificationAction, NotificationAction, NotificationType } from './Notification.vue';

export default defineComponent({
  name: 'PfDrawerNotification',

  components: {
    PfButton,
    PfDropdown,
  },

  props: {
    action: Object as PropType<NotificationAction & { button: ButtonVariant | true; }>,
    actions: Array as PropType<(NotificationAction | '-')[]>,
    message: String,
    date: String,
    time: String,
    unread: Boolean,
    type: {
      type: String as PropType<NotificationType>,
      default: 'info',
      validator: (type: never) => ['', null, 'info', 'success', 'warning', 'danger'].includes(type),
    },
    ...ouiaProps,
  },

  emits: ['action', '' as string],

  setup(props) {
    return {
      drawerExpanded: inject('drawerExpanded', false),
      drawerDropdowns: inject<HTMLElement>('drawerDropdowns', null),
      ...useOUIAProps(props),
    };
  },

  computed: {
    showDropdown() {
      return this.$slots.dropdown || (this.actions && this.actions.length);
    },

    buttonVariant(): ButtonVariant {
      if (!this.action || !this.action.button) {
        return 'link';
      }
      return this.action.button === true ? 'default' : this.action.button;
    },

    typeIcon() {
      switch (this.type) {
        case 'success':
          return 'pficon-ok';
        case 'danger':
          return 'pficon-error-circle-o';
        case 'warning':
          return 'pficon-warning-triangle-o';
        default:
          return 'pficon-info';
      }
    },
  },

  methods: {
    triggered(action: NotificationAction) {
      if (typeof action.handler === 'function') {
        action.handler(action);
      }
      this.$emit(action.emit || 'action', action);
    },

    isAction: isNotificationAction,
  },
});
</script>

<style>
.toast-pf-action > a {
  cursor: pointer;
}
.toast-pf .dropdown-menu > li > a {
  cursor: pointer;
}
</style>
