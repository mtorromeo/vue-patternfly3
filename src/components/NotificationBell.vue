<template>
  <li>
    <a
      class="nav-item-iconic"
      href="javascript:void(0)"
    >
      <pf-icon name="fa-bell" title="Notifications" />
      <span v-if="updates !== false" class="badge"><span v-html="updates" /></span>
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
