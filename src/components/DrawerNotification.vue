<template>
<div class="drawer-pf-notification"
     :class="{unread, 'expanded-notification': $parent.$parent.expanded}">
  <bs-dropdown v-if="showDropdown" class="pull-right dropdown-kebab-pf" type="link">
    <slot name="dropdown" :actions="actions">
      <li v-for="action in actions"
          :role="isSeparator(action) ? 'separator' : 'menuitem'"
          :class="{
            divider: isSeparator(action),
            disabled: action.disabled === true,
          }">
        <a v-if="!isSeparator(action)"
           class="secondary-action"
           :title="action.title"
           @click="triggered(action)">
          {{action.name}}
        </a>
      </li>
    </slot>
  </bs-dropdown>

  <button type="button" v-if="action && action.name"
          class="pull-right btn"
          :class="[buttonClass]"
          :title="action.title"
          @click="triggered(action)">
    {{action.name}}
  </button>

  <span class="pficon pull-left" :class="[typeIcon]"></span>
  <span class="drawer-pf-notification-message">
    <slot>{{message}}</slot>
  </span>
  <span v-if="date || time || $slots.info" class="drawer-pf-notification-info">
    <slot name="info">
      <span v-if="date" class="date">{{date}}</span>
      <span v-if="time" class="time">{{time}}</span>
    </slot>
  </span>
</div>
</template>

<script>
import VueStrap from '../vue-strap';

export default {
  name: 'pf-drawer-notification',

  components: {
    BsDropdown: VueStrap.dropdown,
  },

  props: {
    action: Object,
    actions: Array,
    message: String,
    date: String,
    time: String,
    unread: Boolean,
    type: {
      type: String,
      default: 'info',
    },
  },

  computed: {
    showDropdown() {
      return this.$slots.dropdown || (this.actions && this.actions.length);
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

  methods: {
    triggered(action) {
      if (typeof action.handler == 'function') {
        action.handler(action);
      }
      this.$emit(action.emit || 'action', action);
    },
    isSeparator(action) {
      return action == '-' || action.separator;
    },
  }
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
