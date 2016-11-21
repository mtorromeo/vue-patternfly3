<template>
  <span class="card-pf-aggregate-status-notification">
    <a v-if="href" :href="href">
      <span v-if="iconClass" :class="iconClass"></span>
      {{count}}
    </a>
    <template v-else>
      <span v-if="iconClass" :class="iconClass"></span>
      {{count}}
    </template>
  </span>
</template>

<script>
export default {
  name: 'pf-card-notification',

  props: {
    count: String,
    href: String,
    iconClass: String,
  },
};
</script>
