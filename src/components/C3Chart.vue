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

// FROM node_modules/patternfly/dist/js/patternfly-settings-colors.js
const patternfly = {
  pfPaletteColors: {
    black: '#030303',
    black100: '#fafafa',
    black200: '#ededed',
    black300: '#d1d1d1',
    black400: '#bbbbbb',
    black500: '#8b8d8f',
    black600: '#72767b',
    black700: '#4d5258',
    black800: '#393f44',
    black900: '#292e34',
    blue: '#0088ce',
    blue100: '#bee1f4',
    blue200: '#7dc3e8',
    blue300: '#39a5dc',
    blue400: '#0088ce',
    blue500: '#00659c',
    blue600: '#004368',
    blue700: '#002235',
    gold: '#f0ab00',
    gold100: '#fbeabc',
    gold200: '#f9d67a',
    gold300: '#f5c12e',
    gold400: '#f0ab00',
    gold500: '#b58100',
    gold600: '#795600',
    gold700: '#3d2c00',
    orange: '#ec7a08',
    orange100: '#fbdebf',
    orange200: '#f7bd7f',
    orange300: '#f39d3c',
    orange400: '#ec7a08',
    orange500: '#b35c00',
    orange600: '#773d00',
    orange700: '#3b1f00',
    lightBlue: '#00b9e4',
    lightBlue100: '#beedf9',
    lightBlue200: '#7cdbf3',
    lightBlue300: '#35caed',
    lightBlue400: '#00b9e4',
    lightBlue500: '#008bad',
    lightBlue600: '#005c73',
    lightBlue700: '#002d39',
    green: '#3f9c35',
    green100: '#cfe7cd',
    green200: '#9ecf99',
    green300: '#6ec664',
    green400: '#3f9c35',
    green500: '#2d7623',
    green600: '#1e4f18',
    green700: '#0f280d',
    lightGreen: '#92d400',
    lightGreen100: '#e4f5bc',
    lightGreen200: '#c8eb79',
    lightGreen300: '#ace12e',
    lightGreen400: '#92d400',
    lightGreen500: '#6ca100',
    lightGreen600: '#486b00',
    lightGreen700: '#253600',
    cyan: '#007a87',
    cyan100: '#bedee1',
    cyan200: '#7dbdc3',
    cyan300: '#3a9ca6',
    cyan400: '#007a87',
    cyan500: '#005c66',
    cyan600: '#003d44',
    cyan700: '#001f22',
    purple: '#703fec',
    purple100: '#c7bfff',
    purple200: '#a18fff',
    purple300: '#8461f7',
    purple400: '#703fec',
    purple500: '#582fc0',
    purple600: '#40199a',
    purple700: '#1f0066',
    red: '#cc0000',
    red100: '#cc0000',
    red200: '#a30000',
    red300: '#8b0000',
    red400: '#470000',
    red500: '#2c0000',
  },
};

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
