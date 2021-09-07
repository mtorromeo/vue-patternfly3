<template>
  <li class="applauncher-pf-item" role="menuitem">
    <a class="applauncher-pf-link" :href="href" v-bind="$attrs">
      <pf-icon tag="i" aria-hidden="true" :name="icon" class="applauncher-pf-link-icon" />
      <span class="applauncher-pf-link-title"><slot /></span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'pf-launcher-item',

  inheritAttrs: false,

  props: {
    href: {
      type: String,
      default: '#',
    },
    icon: String,
  },
};
</script>
