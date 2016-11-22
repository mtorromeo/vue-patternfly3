<template>
  <div></div>
</template>

<script>
import c3 from 'c3';

export default {
  name: 'pf-c3-chart',

  props: {
    type: {
      type: String,
      default: 'bar',
    },
    title: String,
    width: Number,
    height: Number,
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    axis: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  mounted() {
    const chartData = {
      bindto: this.$el,
      size: {
        width: this.width,
        height: this.height,
      },
      data: Object.assign({}, this.data),
    };
    chartData[this.type] = {};

    chartData.data.type = this.type;

    if (this.title) {
      chartData[this.type].title = this.title;
    }

    this.chart = c3.generate(chartData);
  },
};
</script>
