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
    this.create();
  },

  methods: {
    create() {
      if (this.chart) {
        this.destroy();
      }

      const chartData = {
        bindto: this.$el,
        size: this.size,
        data: Object.assign({}, this.data),
        axis: Object.assign({}, this.axis),
      };
      chartData[this.type] = {};

      chartData.data.type = this.type;

      if (this.title) {
        chartData[this.type].title = this.title;
      }

      this.chart = c3.generate(chartData);
    },

    destroy() {
      if (this.chart && this.chart.internal.selectChart) {
        this.chart.destroy();
      }
      this.chart = null;
    },
  },

  computed: {
    size() {
      const size = {};
      if (this.width) {
        size.width = this.width;
      }
      if (this.height) {
        size.height = this.height;
      }
      return size;
    },
  },

  watch: {
    size() {
      this.chart.resize(this.size);
    },

    data() {
      const loadData = Object.assign({}, this.data);
      loadData.unload = true;
      this.chart.load(loadData);
    },

    axis() {
      this.create();
    },

    type() {
      this.chart.transform(this.type);
    },
  },
};
</script>

<style>
.c3-tooltip td {
  color: inherit;
}
</style>
