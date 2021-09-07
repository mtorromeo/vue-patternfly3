<template>
  <div
    class="drawer-pf-notification"
    :class="{unread, 'expanded-notification': $parent.$parent.expanded}"
  >
    <pf-dropdown v-if="showDropdown" class="pull-right dropdown-kebab-pf" type="link" :append-to="$parent.$parent.$refs.dropdowns" menu-right>
      <li
        v-for="actionItem in actions"
        :key="actionItem.name"
        :role="isSeparator(actionItem) ? 'separator' : 'menuitem'"
        :class="{
          divider: isSeparator(actionItem),
          disabled: actionItem.disabled === true,
        }"
      >
        <a v-if="!isSeparator(actionItem)"
           class="secondary-action"
           :title="actionItem.title"
           @click="triggered(actionItem)"
        >
          {{ actionItem.name }}
        </a>
      </li>
    </pf-dropdown>

    <button
      v-if="action && action.name"
      type="button"
      class="pull-right btn"
      :class="[buttonClass]"
      :title="action.title"
      @click="triggered(action)"
    >
      {{ action.name }}
    </button>

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

<script>
import PfDropdown from './Dropdown.vue';

export default {
  name: 'pf-drawer-notification',

  components: {
    PfDropdown,
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
      validator: type => ['', null, 'info', 'success', 'warning', 'danger'].indexOf(type) >= 0,
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
      if (typeof action.handler === 'function') {
        action.handler(action);
      }
      this.$emit(action.emit || 'action', action);
    },
    isSeparator(action) {
      return action === '-' || action.separator;
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
