<template>
<article class="page">
  <header>
    <h1>Charts</h1>
  </header>

  <header>
    <h2>Empty Chart <code>&lt;pf-empty-chart&gt;</code></h2>
  </header>

  <p>This component is displayed when a chart does not include any data.</p>

  <pf-empty-chart/>

  <header>
    <h2>C3 Chart <code>&lt;pf-c3-chart&gt;</code></h2>
  </header>

  <p>This component is a wrapper to the C3.js library. The patternfly color palette is applied by default to all the charts.</p>

  <pf-c3-chart :type="c3.type" :title="c3.title" :data="c3.data" :axis="c3.axis" :width="c3.width" :height="c3.height"
    @click="c3click" />

  <h4>Related documentation</h4>
  <ol>
    <li><a href="http://www.patternfly.org/pattern-library/data-visualization/pie-chart" target="_blank">Pattern Library > Data Visualization > Pie Chart</a></li>
    <li><a href="http://c3js.org" target="_blank">C3.js</a></li>
  </ol>

  <props-table :component-props="c3.props">
    <props-row name="type" description="C3 chart type" v-model="c3.type" :options="['line', 'spline', 'step', 'area', 'area-spline', 'area-step', 'bar', 'scatter', 'pie', 'donut', 'gauge']"></props-row>
    <props-row name="title" description="Title displayed inside the chart" v-model="c3.title"></props-row>
    <props-row name="width" description="Defines the chart size" v-model="c3.width"></props-row>
    <props-row name="height" description="Defines the chart size" v-model="c3.height"></props-row>
    <props-row name="data" description="Chart data as accepted by the c3 library" v-model="c3.data" code></props-row>
    <props-row name="axis" description="Chart axis as accepted by the c3 library" v-model="c3.axis" code></props-row>
  </props-table>
</article>
</template>

<script>
import VuePatternfly from 'vue-patternfly';
const {EmptyChart, C3Chart} = VuePatternfly;

export default {
  name: 'charts-page',

  data() {
    return {
      emptyProps: EmptyChart.props,

      c3: {
        props: C3Chart.props,
        type: 'donut',
        title: 'Animals',
        data: {
          columns: [
            ['Dogs', 12],
            ['Cats', 7],
            ['Fish', 3],
            ['Hamsters', 6],
          ],
          groups: [
            ['used', 'available']
          ],
        },
        axis: {
          x: {
            type: 'category',
          },
        },
        width: null,
        height: null,
      },
    };
  },

  methods: {
    c3click(d) {
      this.$root.toast(`Clicked chart datapoint "${d.id}"`, 'success');
    },
  },
};
</script>
