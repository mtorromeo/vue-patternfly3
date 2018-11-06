<template functional>
  <li>
    <a
      v-bind="data.attrs"
      v-on="listeners"
      :class="[data.class, data.staticClass]"
      :style="[data.style, data.staticStyle]"
      class="nav-item-iconic"
      href="javascript:void(0)"
    >
      <pf-icon name="fa-bell" title="Notifications"/>
      <span class="badge" v-if="props.updates !== false"><span v-html="props.updates"></span></span>
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
