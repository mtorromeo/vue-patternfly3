<template>
  <div>
    <div ref="chart" v-show="!empty"></div>
    <template v-if="empty">
      <pf-empty-chart>
        <slot/>
      </pf-empty-chart>
    </template>
  </div>
</template>

<script>
import c3 from 'c3';
import pfPaletteColors from 'patternfly/dist/js/patternfly-settings-colors.js';

const palette = [
  pfPaletteColors.red,
  pfPaletteColors.blue,
  pfPaletteColors.green,
  pfPaletteColors.gold,
  pfPaletteColors.cyan,
  pfPaletteColors.orange,
  pfPaletteColors.lightGreen,
  pfPaletteColors.purple,
  pfPaletteColors.lightBlue,
  pfPaletteColors.red700,
  pfPaletteColors.blue700,
  pfPaletteColors.green700,
  pfPaletteColors.gold700,
  pfPaletteColors.cyan700,
  pfPaletteColors.orange700,
  pfPaletteColors.lightGree7500,
  pfPaletteColors.purple700,
  pfPaletteColors.lightBlue700,
  pfPaletteColors.red400,
  pfPaletteColors.blue400,
  pfPaletteColors.green400,
  pfPaletteColors.gold400,
  pfPaletteColors.cyan400,
  pfPaletteColors.orange400,
  pfPaletteColors.lightGree4500,
  pfPaletteColors.purple400,
  pfPaletteColors.lightBlue400,
];

export default {
  name: 'pf-c3-chart',

  props: {
    type: {
      type: String,
      default: 'bar',
      validator: type => ['line', 'spline', 'step', 'area', 'area-spline', 'area-step', 'bar', 'scatter', 'pie', 'donut', 'gauge'].indexOf(type) >= 0,
    },
    title: String,
    width: Number,
    height: Number,
    paddingTop: Number,
    paddingBottom: Number,
    paddingLeft: Number,
    paddingRight: Number,
    interaction: {
      type: Boolean,
      default: true,
    },
    transition: {
      type: Number,
      default: 350,
    },
    data: Object,
    axis: Object,
    grid: Object,
    regions: Object,
    legend: [Boolean, Object],
    tooltip: Object,
    subchart: Object,
    zoom: Object,
    point: Object,
    line: Object,
    area: Object,
    bar: Object,
    pie: Object,
    donut: Object,
    gauge: Object,
  },

  mounted() {
    this.create();
  },

  methods: {
    create() {
      if (this.chart) {
        this.destroy();
      }

      let legend = this.legend;
      if (typeof legend == 'boolean') {
        legend = {
          hide: !legend,
        };
      } else {
        legend = Object.assign({}, legend);
      }

      const chartData = {
        bindto: this.$refs.chart,
        size: this.size,
        padding: this.padding,
        interaction: {
          enabled: this.interaction,
        },
        transition: {
          duration: this.transition,
        },
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
        grid: Object.assign({}, this.grid),
        regions: Object.assign({}, this.regions),
        legend,
        tooltip: Object.assign({}, this.tooltip),
        subchart: Object.assign({}, this.subchart),
        zoom: Object.assign({}, this.zoom),
        point: Object.assign({}, this.point),
        line: Object.assign({}, this.line),
        area: Object.assign({}, this.area),
        bar: Object.assign({}, this.bar),
        pie: Object.assign({}, this.pie),
        donut: Object.assign({}, this.donut),
        gauge: Object.assign({}, this.gauge),
        color: {
          pattern: palette,
        },
        oninit: () => this.$emit('init'),
        onrendered: () => this.$emit('rendered'),
        onmouseover: () => this.$emit('mouseover'),
        onmouseout: () => this.$emit('mouseout'),
        onresize: () => this.$emit('resize'),
        onresized: () => this.$emit('resized'),
      };

      chartData.data.type = this.type;

      if (typeof this.title != 'undefined') {
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

    padding() {
      const padding = {};
      if (this.paddingTop) {
        padding.top = this.paddingTop;
      }
      if (this.paddingBottom) {
        padding.bottom = this.paddingBottom;
      }
      if (this.paddingLeft) {
        padding.left = this.paddingLeft;
      }
      if (this.paddingRight) {
        padding.right = this.paddingRight;
      }
      return padding;
    },

    empty() {
      return !this.data || Object.keys(this.data).length == 0;
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
