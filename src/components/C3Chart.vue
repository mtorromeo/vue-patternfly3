<template>
  <div></div>
</template>

<script>
import c3 from 'c3';
const patternfly = require('imports-loader?patternfly=>{}!exports-loader?patternfly!patternfly/dist/js/patternfly-settings-colors.js');
const palette = [
  patternfly.pfPaletteColors.red,
  patternfly.pfPaletteColors.blue,
  patternfly.pfPaletteColors.green,
  patternfly.pfPaletteColors.gold,
  patternfly.pfPaletteColors.cyan,
  patternfly.pfPaletteColors.orange,
  patternfly.pfPaletteColors.lightGreen,
  patternfly.pfPaletteColors.purple,
  patternfly.pfPaletteColors.lightBlue,
  patternfly.pfPaletteColors.red700,
  patternfly.pfPaletteColors.blue700,
  patternfly.pfPaletteColors.green700,
  patternfly.pfPaletteColors.gold700,
  patternfly.pfPaletteColors.cyan700,
  patternfly.pfPaletteColors.orange700,
  patternfly.pfPaletteColors.lightGree7500,
  patternfly.pfPaletteColors.purple700,
  patternfly.pfPaletteColors.lightBlue700,
  patternfly.pfPaletteColors.red400,
  patternfly.pfPaletteColors.blue400,
  patternfly.pfPaletteColors.green400,
  patternfly.pfPaletteColors.gold400,
  patternfly.pfPaletteColors.cyan400,
  patternfly.pfPaletteColors.orange400,
  patternfly.pfPaletteColors.lightGree4500,
  patternfly.pfPaletteColors.purple400,
  patternfly.pfPaletteColors.lightBlue400,
];

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
        data: Object.assign({
          onclick: (d, i) => this.$emit('click', d, i),
          onmouseover: (d, i) => this.$emit('mouseover', d, i),
          onmouseout: (d, i) => this.$emit('mouseout', d, i),
          onselected: (d, i) => this.$emit('selected', d, i),
          onunselected: (d, i) => this.$emit('unselected', d, i),
          ondragstart: (d, i) => this.$emit('dragstart', d, i),
          ondragend: (d, i) => this.$emit('dragend', d, i),
        }, this.data),
        axis: Object.assign({}, this.axis),
        color: {
          pattern: palette,
        },
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
