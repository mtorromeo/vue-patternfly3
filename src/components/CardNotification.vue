<template>
  <span v-if="!disabled" class="card-pf-aggregate-status-notification">
    <span :is="href ? 'a' : 'span'" :href="href">
      <pf-icon v-if="icon" :name="icon"/>
      {{count}}
    </span>
  </span>
</template>

<script>
export default {
  name: 'pf-card-notification',

  props: {
    count: [String, Number],
    href: String,
    icon: String,
  },

  computed: {
    disabled() {
      return !this.icon && (!this.count && this.count !== 0);
    },
  },
};
</script>
