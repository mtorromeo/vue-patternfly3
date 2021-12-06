<template>
  <div v-bind="ouiaProps" class="drawer-pf-action-link">
    <button type="button" class="btn btn-link">
      <slot />
    </button>
  </div>
</template>

<script>import { ouiaProps, useOUIAProps } from '../use';

export default {
  name: 'PfDrawerGroupAction',

  props: {
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },
};
</script>
