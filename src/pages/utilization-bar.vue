<template>
  <article class="page">
    <header>
      <h1>Utilization Bar Chart</h1>
    </header>

    <section>
      <h4>Related documentation</h4>
      <ol>
        <li><a href="https://www.patternfly.org/v3/pattern-library/data-visualization/utilization-bar-chart/" target="_blank">Pattern Library > Data Visualization > Utilization Bar Chart</a></li>
      </ol>

      <div class="demo-container">
        <pf-utilization-bar-chart
          :title="barchart.title"
          :units="barchart.units"
          :value="barchart.value"
          :total="barchart.total"
          :footer="barchart.footer"
          :footer-format="barchart.footerFormat"
          :inline="barchart.inline"
          :warning="barchart.warning"
          :error="barchart.error"
          :title-width="barchart.titleWidth"
          :footer-width="barchart.footerWidth" />
      </div>

      <props-table :component-props="barchartProps">
        <props-row v-model="barchart.title" name="title" description="Chart title" />
        <props-row v-model="barchart.units" name="units" description="Unit for the chart's values" />
        <props-row v-model="barchart.value" name="value" description="Chart value" />
        <props-row v-model="barchart.total" name="total" description="Maximum allowed value or total" />
        <props-row v-model="barchart.footer" name="footer" description="Custom footer string" />
        <props-row v-model="barchart.footerFormat" name="footerFormat" description="Chart value" :options="['actual', 'percent']" />
        <props-row v-model="barchart.inline" name="inline" description="Display header and footer inline" />
        <props-row v-model="barchart.warning" name="warning" description="Threshold percentage of total to consider as a warning" />
        <props-row v-model="barchart.error" name="error" description="Threshold percentage of total to consider as an error" />
        <props-row v-model="barchart.titleWidth" name="titleWidth" description="Title width in pixels (inline only)" />
        <props-row v-model="barchart.footerWidth" name="footerWidth" description="Footer width in pixels (inline only)" />
      </props-table>
    </section>

    <header>
      <h1>Utilization Bar Card</h1>
    </header>

    <section>
      <h4>Related documentation</h4>
      <ol>
        <li><a href="https://www.patternfly.org/v3/pattern-library/cards/utilization-bar-card/" target="_blank">Pattern Library > Cards > Utilization Bar Card</a></li>
      </ol>

      <div class="cards-pf">
        <div class="row row-cards-pf">
          <div class="col-md-12 col-lg-8">
            <pf-card title="System Resources">
              <pf-utilization-bar-chart title="RAM Usage" units="MB" :value="8" :total="24" />

              <label class="label-title">Inline Layouts with Error, Warning, and Ok Thresholds</label>
              <pf-utilization-bar-chart title="Disk I/O" units="I/Ops" :value="450" :total="500" inline :warning="60" :error="85" />
              <pf-utilization-bar-chart title="CPU Usage" units="MHz" :value="420" :total="500" inline :warning="60" :error="85" />
              <pf-utilization-bar-chart title="Memory" units="GBs" :value="25" :total="100" inline :warning="60" :error="85" />

              <pf-utilization-bar-chart />
            </pf-card>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import { UtilizationBarChart } from 'vue-patternfly';

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
