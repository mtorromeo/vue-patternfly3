<template>
<div class="alert"
     :class="[alertClass, {
       'alert-dismissable': !persistent,
       'toast-pf': toast,
      }]">

  <dropdown v-if="showDropdown">
    <li v-for="action in actions"
        :role="isSeparator(action) ? 'separator' : 'menuitem'"
        v-class="{
          divider: isSeparator(action),
          disabled: action.disabled === true,
        }">
      <a v-if="isSeparator(action)"
         class="secondary-action"
         :title="action.title"
         @click="triggered(action)">
        {{action.name}}
      </a>
    </li>
  </dropdown>

  <button v-show="!persistent && !toast" @click="dismiss"
          type="button" class="close" data-dismiss="alert" aria-hidden="true">
    <span class="pficon pficon-close"></span>
  </button>

  <div class="pull-right toast-pf-action" v-if="action && action.title">
    <button type="button" class="btn btn-link" @click="triggered(action)">{{action.title}}</button>
  </div>

  <span class="pficon" :class="[typeIcon]"></span>
  <slot></slot>
</div>
</template>

<script>
import Dropdown from 'vue-strap/src/Dropdown.vue';

export default {
  name: 'pf-toast-notification',

  components: {
    Dropdown,
  },

  props: {
    action: Object,
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
      return this.toast && this.actions && this.actions.length > 0;
    },
    alertClass() {
      return `alert-${this.type || 'info'}`;
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
      if (this.toast && !this.persistent && this.$parent.notifications) {
        setTimeout(this.dismiss, 250);
      }
    },
    triggered(action) {
      if (typeof action.handler == 'function') {
        action.handler(action);
      }
      if (action.emit) {
        this.$emit(action.emit, action);
      }
    }
  }
};
</script>
