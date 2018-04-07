<template>
  <li class="applauncher-pf dropdown dropdown-kebab-pf" :class="{'applauncher-pf-block-list': !list, open: open && !disabled}">
    <a :id="`pf-application-launcher-${_uid}`" class="dropdown-toggle drawer-pf-trigger-icon nav-item-iconic" :class="{disabled: disabled || !$slots.default}" href="javascript:void(0)" @click.stop="toggle">
      <pf-icon name="fa-th" class="applauncher-pf-icon" aria-hidden="true" tag="i"/>
      <span class="applauncher-pf-title">
        {{label}}
        <span class="caret" aria-hidden="true"></span>
      </span>
    </a>
    <ul class="dropdown-menu dropdown-menu-right" role="menu" @click.stop="hide"
        :aria-labelledby="`pf-application-launcher-${_uid}`">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'pf-application-launcher',

  props: {
    label: {
      type: String,
      default: 'Application Launcher',
    },
    disabled: Boolean,
    list: Boolean,
    open: Boolean,
  },

  mounted() {
    document.documentElement.addEventListener('click', this.hide);
  },

  destroyed() {
    document.documentElement.removeEventListener('click', this.hide);
  },

  methods: {
    toggle() {
      this.$emit('update:open', !this.open);
    },

    hide() {
      if (this.open) {
        this.$emit('update:open', false);
      }
    },
  },
};
</script>

<style scoped>
.nav-item-iconic.disabled {
  cursor: not-allowed;
}

.dropdown-kebab-pf .dropdown-menu.dropdown-menu-right {
  right: 0;
}
</style>
