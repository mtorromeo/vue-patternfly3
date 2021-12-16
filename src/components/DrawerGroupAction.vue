<template>
  <div v-bind="ouiaProps" class="drawer-pf-action-link">
    <pf-button variant="link">
      <slot />
    </pf-button>
  </div>
</template>

<script>
import { ouiaProps, useOUIAProps } from '../ouia';
import PfButton from './Button.vue';

export default {
  name: 'PfDrawerGroupAction',

  components: {
    PfButton,
  },

  props: {
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },
};
</script>
