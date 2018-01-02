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

  <pf-c3-chart :type="c3.type" :title="c3.title" :data="c3.data" :axis="c3.axis" :width="c3.width" :height="c3.height"
    @click="c3click" />

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
        type: "donut",
        title: "Memory",
        data: {
          columns: [
            ['Used', 123],
            ['Available', 74]
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
        width: undefined,
        height: undefined,
      },
    };
  },

  methods: {
    c3click(d, element) {
      this.$root.toast(`Clicked chart datapoint "${d.id}"`, 'success');
    },
  },
}
</script>
