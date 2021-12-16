<template>
  <li v-bind="ouiaProps" class="applauncher-pf dropdown" :class="{'applauncher-pf-block-list': !list, open: open && !disabled}">
    <a :id="`pf-application-launcher-${$.uid}`" class="dropdown-toggle drawer-pf-trigger-icon nav-item-iconic" :class="{disabled: disabled || !$slots.default}" href="javascript:void(0)" @click.stop="toggle">
      <pf-icon name="fa-th" class="applauncher-pf-icon" aria-hidden="true" tag="i" />
      <span class="applauncher-pf-title">
        {{ label }}
        <span class="caret" aria-hidden="true" />
      </span>
    </a>
    <ul class="dropdown-menu dropdown-menu-right" role="menu" :aria-labelledby="`pf-application-launcher-${$.uid}`"
        @click.stop="hide">
      <slot />
    </ul>
  </li>
</template>

<script>
import { ouiaProps, useOUIAProps } from '../ouia';

export default {
  name: 'PfApplicationLauncher',

  props: {
    label: {
      type: String,
      default: 'Application Launcher',
    },
    disabled: Boolean,
    list: Boolean,
    open: Boolean,
    ...ouiaProps,
  },

  emits: ['update:open'],

  setup(props) {
    return useOUIAProps(props);
  },

  mounted() {
    document.documentElement.addEventListener('click', this.hide);
  },

  unmounted() {
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
