<template>
<article class="page">
  <header>
    <h1>Utilization Bar Chart</h1>
  </header>

  <section>
    <h4>Related documentation</h4>
    <ol>
      <li><a href="https://www.patternfly.org/pattern-library/data-visualization/utilization-bar-chart/" target="_blank">Pattern Library > Data Visualization > Utilization Bar Chart</a></li>
    </ol>

    <div class="demo-container">
      <pf-utilization-bar-chart
        :title="barchart.title"
        :units="barchart.units"
        :value="barchart.value"
        :total="barchart.total"
        :footer="barchart.footer"
        :footerFormat="barchart.footerFormat"
        :inline="barchart.inline"
        :warning="barchart.warning"
        :error="barchart.error"
        :titleWidth="barchart.titleWidth"
        :footerWidth="barchart.footerWidth"/>
    </div>

    <props-table :component-props="barchartProps">
      <props-row name="title" description="Chart title" v-model="barchart.title"/>
      <props-row name="units" description="Unit for the chart's values" v-model="barchart.units"/>
      <props-row name="value" description="Chart value" v-model="barchart.value"/>
      <props-row name="total" description="Maximum allowed value or total" v-model="barchart.total"/>
      <props-row name="footer" description="Custom footer string" v-model="barchart.footer"/>
      <props-row name="footerFormat" description="Chart value" v-model="barchart.footerFormat" :options="['actual', 'percent']"/>
      <props-row name="inline" description="Display header and footer inline" v-model="barchart.inline"/>
      <props-row name="warning" description="Threshold percentage of total to consider as a warning" v-model="barchart.warning"/>
      <props-row name="error" description="Threshold percentage of total to consider as an error" v-model="barchart.error"/>
      <props-row name="titleWidth" description="Title width in pixels (inline only)" v-model="barchart.titleWidth"/>
      <props-row name="footerWidth" description="Footer width in pixels (inline only)" v-model="barchart.footerWidth"/>
    </props-table>
  </section>

  <header>
    <h1>Utilization Bar Card</h1>
  </header>

  <section>
    <h4>Related documentation</h4>
    <ol>
      <li><a href="https://www.patternfly.org/pattern-library/cards/utilization-bar-card/" target="_blank">Pattern Library > Cards > Utilization Bar Card</a></li>
    </ol>

    <div class="cards-pf">
      <div class="row row-cards-pf">
        <div class="col-md-12 col-lg-8">
          <pf-card title="System Resources">
            <pf-utilization-bar-chart title='RAM Usage' units='MB' :value="8" :total="24"/>

            <label class="label-title">Inline Layouts with Error, Warning, and Ok Thresholds</label>
            <pf-utilization-bar-chart title='Disk I/O' units='I/Ops' :value="450" :total="500" inline :warning="60" :error="85"/>
            <pf-utilization-bar-chart title='CPU Usage' units='MHz' :value="420" :total="500" inline :warning="60" :error="85"/>
            <pf-utilization-bar-chart title='Memory' units='GBs' :value="25" :total="100" inline :warning="60" :error="85"/>

            <pf-utilization-bar-chart/>
          </pf-card>
        </div>
      </div>
    </div>
  </section>
</article>
</template>

<script>
import VuePatternfly from 'vue-patternfly';
const UtilizationBarChart = VuePatternfly.UtilizationBarChart;

export default {
  name: 'components-pagepage',

  data() {
    return {
      barchartProps: UtilizationBarChart.props,
      barchart: {
        value: 8,
        total: 32,
        units: 'MB',
        title: 'RAM Usage',
        footer: UtilizationBarChart.props.footer.default,
        footerFormat: UtilizationBarChart.props.footerFormat.default,
        inline: UtilizationBarChart.props.inline.default,
        warning: UtilizationBarChart.props.warning.default,
        error: UtilizationBarChart.props.error.default,
        titleWidth: UtilizationBarChart.props.titleWidth.default,
        footerWidth: UtilizationBarChart.props.footerWidth.default,
      },
    };
  },
};
</script>
