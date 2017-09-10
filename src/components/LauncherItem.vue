<template>
  <li class="applauncher-pf-item" role="menuitem">
    <a class="applauncher-pf-link" v-bind="$attrs" v-on="$listeners">
      <i class="applauncher-pf-link-icon pficon" :class="iconClass" aria-hidden="true"></i>
      <span class="applauncher-pf-link-title"><slot></slot></span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'pf-launcher-item',

  props: {
    iconClass: String,
  },
};
</script>
