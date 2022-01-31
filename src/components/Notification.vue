<template>
  <div
    v-bind="ouiaProps"
    class="alert"
    :class="[alertClass, {
      'alert-dismissable': persistent,
      'toast-pf': toast,
    }]"
  >
    <pf-dropdown v-if="showDropdown">
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

    <button
      v-show="persistent"
      type="button"
      class="close"
      data-dismiss="alert"
      aria-hidden="true"
      @click="dismiss"
    >
      <pf-icon name="pficon-close" />
    </button>

    <pf-button
      v-if="action && action.name"
      class="pull-right"
      :variant="buttonVariant"
      :title="action.title"
      @click="triggered(action)"
    >
      {{ action.name }}
    </pf-button>

    <pf-icon :name="typeIcon" />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import PfButton, { ButtonVariant } from './Button.vue';
import PfDropdown from './Dropdown.vue';

export type NotificationType = 'info' | 'success' | 'warning' | 'danger';

export interface Notification {
  message: string;
  type?: NotificationType;
  persistent?: boolean;
}

export interface NotificationAction {
  name: string;
  title?: string;
  disabled?: boolean;
  separator?: boolean;
  emit?: string;
  handler?: (action: NotificationAction) => void;
}

export function isNotificationAction(action: NotificationAction | '-'): action is NotificationAction {
  return action !== '-' && !action.separator;
}

export default defineComponent({
  name: 'PfNotification',

  components: {
    PfButton,
    PfDropdown,
  },

  props: {
    action: Object as PropType<NotificationAction & { button: ButtonVariant | true; }>,
    actions: Array as PropType<(NotificationAction | '-')[]>,
    delay: {
      type: Number,
      default: 8000,
    },
    type: {
      type: String as PropType<NotificationType>,
      default: 'info',
    },
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

  emits: ['dismiss', 'action', '' as string],

  setup(props) {
    return useOUIAProps(props);
  },

  data(this: void) {
    return {
      $timeout: null as ReturnType<typeof setTimeout> | null,
    };
  },

  computed: {
    showDropdown() {
      return this.toast && this.actions && this.actions.length;
    },

    alertClass() {
      return `alert-${this.type || 'info'}`;
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

  watch: {
    toast: {
      handler() {
        this.updateTimeout();
      },
      immediate: true,
    },

    delay() {
      this.updateTimeout();
    },

    persistent() {
      this.updateTimeout();
    },
  },

  methods: {
    updateTimeout() {
      if (this.$timeout) {
        clearTimeout(this.$timeout);
      }
      if (this.toast && !this.persistent) {
        this.$timeout = setTimeout(this.dismiss, this.delay);
      }
    },

    isAction: isNotificationAction,

    dismiss() {
      this.$emit('dismiss', this);
      // workaround race conditions in event dispatching and handling in parent component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (this.toast && !this.persistent && (this.$parent as any).notifications?.length) {
        setTimeout(this.dismiss, 250);
      }
    },

    triggered(action: NotificationAction) {
      if (typeof action.handler === 'function') {
        action.handler(action);
      }
      this.$emit(action.emit || 'action', action);
    },
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
