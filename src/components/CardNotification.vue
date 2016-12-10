<template>
  <span v-if="!disabled" class="card-pf-aggregate-status-notification">
    <span :is="href ? 'a' : 'span'" :href="href">
      <span v-if="iconClass" :class="iconClass"></span>
      {{count}}
    </a>
  </span>
</template>

<script>
export default {
  name: 'pf-card-notification',

  props: {
    count: [String, Number],
    href: String,
    iconClass: String,
  },

  computed: {
    disabled() {
      return !this.iconClass && (!this.count && this.count !== 0);
    },
  },
};
</script>
