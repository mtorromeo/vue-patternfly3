<template>
  <span
    v-if="icon || count || count === 0"
    class="card-pf-aggregate-status-notification"
  >
    <component :is="href ? 'a' : 'span'" :href="href">
      <pf-icon v-if="icon" :name="icon" />
      {{ count }}
    </component>
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
};
</script>
