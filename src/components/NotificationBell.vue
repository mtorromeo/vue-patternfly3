<template>
  <li v-bind="ouiaProps">
    <a
      class="nav-item-iconic"
      href="javascript:void(0)"
      @click.prevent
    >
      <pf-icon name="fa-bell" title="Notifications" />
      <span v-if="updates !== false" class="badge"><span v-html="updates" /></span>
    </a>
  </li>
</template>

<script>
import { ouiaProps, useOUIAProps } from '../ouia';

export default {
  name: 'PfNotificationBell',

  props: {
    updates: {
      type: [String, Boolean],
      default: false,
    },
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },
};
</script>
