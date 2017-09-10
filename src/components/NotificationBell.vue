<template>
  <li>
    <a class="nav-item-iconic" href="javascript:void(0)" v-bind="$attrs" v-on="$listeners">
      <span class="fa fa-bell" title="Notifications"></span>
      <span class="badge" v-if="updates !== false"><span v-html="updates"></span></span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'pf-notification-bell',

  props: {
    updates: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>
