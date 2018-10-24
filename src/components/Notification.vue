<template>
<div
  class="alert"
  :class="[alertClass, {
    'alert-dismissable': !persistent,
    'toast-pf': toast,
  }]"
>
  <pf-dropdown v-if="showDropdown">
    <li
      v-for="action in actions"
      :key="action.name"
      :role="isSeparator(action) ? 'separator' : 'menuitem'"
      :class="{
        divider: isSeparator(action),
        disabled: action.disabled === true,
      }"
    >
      <a
        v-if="!isSeparator(action)"
        class="secondary-action"
        :title="action.title"
        @click="triggered(action)"
      >
        {{action.name}}
      </a>
    </li>
  </pf-dropdown>

  <button
    v-show="!persistent"
    @click="dismiss"
    type="button"
    class="close"
    data-dismiss="alert"
    aria-hidden="true"
  >
    <pf-icon name="pficon-close"/>
  </button>

  <button
    type="button"
    v-if="action && action.name"
    class="pull-right btn"
    :class="[buttonClass]"
    :title="action.title"
    @click="triggered(action)"
  >
    {{action.name}}
  </button>

  <pf-icon :name="typeIcon"/>
  <slot/>
</div>
</template>

<script>
import PfDropdown from './Dropdown.vue';

export default {
  name: 'pf-toast-notification',

  components: {
    PfDropdown,
  },

  props: {
    action: Object,
    actions: Array,
    delay: {
      type: Number,
      default: 8000,
    },
    type: {
      type: String,
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
  },

  computed: {
    showDropdown() {
      return this.toast && this.actions && this.actions.length;
    },
    alertClass() {
      return `alert-${this.type || 'info'}`;
    },
    buttonClass() {
      if (!this.action || !this.action.button) {
        return 'btn-link';
      }
      return `btn-${this.action.button}`;
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
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      if (this.toast && !this.persistent) {
        this._timeout = setTimeout(this.dismiss, this.delay);
      }
    },
    isSeparator(action) {
      return action == '-' || action.separator;
    },
    dismiss() {
      this.$emit('dismiss', this);
      // workaround race conditions in event dispatching and handling in parent component
      if (this.toast && !this.persistent && this.$parent.notifications && this.$parent.notifications.length) {
        setTimeout(this.dismiss, 250);
      }
    },
    triggered(action) {
      if (typeof action.handler == 'function') {
        action.handler(action);
      }
      this.$emit(action.emit || 'action', action);
    },
  },
};
</script>

<style>
.toast-pf-action > a {
  cursor: pointer;
}
.toast-pf .dropdown-menu > li > a {
  cursor: pointer;
}
</style>
