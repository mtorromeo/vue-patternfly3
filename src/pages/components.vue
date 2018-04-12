<template>
<article class="page">
  <header>
    <h1>Components</h1>
  </header>

  <section>
    <div class="cards-pf">
      <div class="row row-cards-pf">
        <div class="col-md-6 col-lg-4">
          <h2>C3 Chart</h2>
          <pf-card title="System Resources" foot-note="Footer" :filter="{
            position: 'header',
            filters: [
              {label: 'Filtro 1'},
              {label: 'Filtro 2'},
            ]
          }">
            <pf-c3-chart type="donut" title="Memory" :data="{
              columns: [
                ['Used', 123],
                ['Available', 74]
              ],
              groups: [
                ['used', 'available']
              ]
            }"/>
          </pf-card>
        </div>

        <div class="col-md-12 col-lg-8">
          <h2>Utilization Bar Card</h2>
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
export default {
  name: 'components-page',
};
</script>
