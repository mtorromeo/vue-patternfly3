<template>
  <li v-bind="ouiaProps" class="applauncher-pf-item" role="menuitem">
    <a class="applauncher-pf-link" :href="href" v-bind="$attrs">
      <pf-icon tag="i" aria-hidden="true" :name="icon" class="applauncher-pf-link-icon" />
      <span class="applauncher-pf-link-title"><slot /></span>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';

export default defineComponent({
  name: 'PfLauncherItem',

  inheritAttrs: false,

  props: {
    href: {
      type: String,
      default: '#',
    },
    icon: String,
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },
});
</script>
