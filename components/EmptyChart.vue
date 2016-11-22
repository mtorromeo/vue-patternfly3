<template>
<div class="empty-chart-content" :style="{
    'height': height,
    'padding-top': padding,
  }">
  <span class="pficon pficon-info"></span>
  <span>No data available</span>
</div>
</template>

<script>
export default {
  name: 'pf-empty-chart',

  props: {
    height: {
      type: Number,
      default: 40,
    },
  },

  computed: {
    padding() {
      return Math.min(Math.round((this.height - 40) / 2), 20);
    },
  },
};
</script>
