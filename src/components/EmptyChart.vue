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

<style>
.empty-chart-content {
  text-align: center;
}
.empty-chart-content .pficon {
  font-size: 24px;
}
.empty-chart-content span {
  vertical-align: middle;
  width: 100%;
}
</style>
