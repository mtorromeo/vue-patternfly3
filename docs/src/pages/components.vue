<template>
<article class="page">
  <header>
    <h1>Components</h1>
  </header>

  <section>
    <h2>Toolbar</h2>
    <pf-toolbar ref="toolbar" @filters="filters = $event" @sort-change="setSort"
                :filter-fields="[{
                  title: 'Name',
                }, {
                  title: 'Age',
                }, {
                  title: 'Address',
                }, {
                  title: 'Birth Month',
                  placeholder: 'Filter by Birth Month...',
                  values: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                }]" :sort-fields="[{
                  title: 'Name',
                }, {
                  title: 'Date',
                }]"
                views="table,card,list"
                :result-count="0">
      <button class="btn btn-default" type="button" title="Title 1" @click="$refs.toolbar.filters.push({title: 'Test', value: 1})">
        Action 1
      </button>
      <button class="btn btn-default" type="button" title="Title 2">
        Action 2
      </button>
      <button class="btn btn-danger" type="button" title="Title 3">
        Action 3
      </button>

      <dropdown class="dropdown-kebab-pf" type="link">
        <li role="menuitem">
          <a title="Menu Title 1">Menu Item 1</a>
        </li>
        <li role="menuitem">
          <a title="Menu Title 2">Menu Item 2</a>
        </li>
        <li role="separator" class="divider"></li>
        <li role="menuitem">
          <a title="Menu Title 3">Menu Item 3</a>
        </li>
      </dropdown>
    </pf-toolbar>

    <pre>Filters: {{filters}}
    Sort: {{ sortField.title }} {{ sortAscending ? 'ascending' : 'descending' }}</pre>

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
            }"></pf-c3-chart>
          </pf-card>
        </div>

        <div class="col-md-12 col-lg-8">
          <h2>Utilization Bar Card</h2>
          <pf-card title="System Resources">
            <pf-utilization-bar-chart title='RAM Usage' units='MB' :value="8" :total="24"></pf-utilization-bar-chart>

            <label class="label-title">Inline Layouts with Error, Warning, and Ok Thresholds</label>
            <pf-utilization-bar-chart title='Disk I/O' units='I/Ops' :value="450" :total="500" inline :warning="60" :error="85"></pf-utilization-bar-chart>
            <pf-utilization-bar-chart title='CPU Usage' units='MHz' :value="420" :total="500" inline :warning="60" :error="85"></pf-utilization-bar-chart>
            <pf-utilization-bar-chart title='Memory' units='GBs' :value="25" :total="100" inline :warning="60" :error="85"></pf-utilization-bar-chart>

            <pf-utilization-bar-chart></pf-utilization-bar-chart>
          </pf-card>
        </div>
      </div>
    </div>
  </section>
</article>
</template>

<script>
import {dropdown} from 'vue-strap';

export default {
  name: 'components-page',

  components: {
    dropdown,
  },

  data() {
    return {
      sortField: {},
      sortAscending: true,
      filters: [],
    };
  },

  methods: {
    setSort(field, ascending) {
      this.sortField = field;
      this.sortAscending = ascending;
    },
    addFilter(filter, value) {
      const f = {};
      f[filter.title] = value;
      this.filters.push(f);
    },
  },
};
</script>
