<template>
  <div
    v-bind="ouiaProps"
    class="empty-chart-content"
    :style="{
      'height': `${height}px`,
      'padding-top': `${Math.min(Math.round((height - 40) / 2), 20)}px`,
    }"
  >
    <pf-icon name="pficon-info" />
    <slot>
      <span>No data available</span>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';

export default defineComponent({
  name: 'PfEmptyChart',

  props: {
    height: {
      type: Number,
      default: 40,
    },
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },
});
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
