<template>
<article class="page">
  <header>
    <h1>Toolbar <code>&lt;pf-toolbar&gt;</code></h1>
  </header>

  <section>
    <p>This component implements a toolbar with controls for filters, sorting, searching and custom actions to interact with a data view.</p>

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/forms-and-controls/toolbar/#_" target="_blank">Pattern Library > Toolbar</a></li>
    </ol>

    <pf-toolbar ref="toolbar"
                @sort-change="setSort"
                :view="toolbar.view"
                :views="toolbar.views"
                @view="toolbar.view = $event"
                @filters="toolbar.filters = $event"
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
                }]" :sort-fields="toolbar.sortFields"
                :result-count="toolbar.resultCount">
      <button class="btn btn-default" type="button" title="Title 1" @click="$refs.toolbar.addFilter('Test', 1)">
        Action 1
      </button>
      <button class="btn btn-default" type="button" title="Title 2">
        Action 2
      </button>
      <button class="btn btn-danger" type="button" title="Title 3">
        Action 3
      </button>

      <bs-dropdown class="dropdown-kebab-pf" type="link">
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
      </bs-dropdown>
    </pf-toolbar>

    <props-table :component-props="toolbarProps">
      <props-row name="view" description="Active view" v-model="toolbar.view"></props-row>
      <props-row name="views" description="List of available views (names separated by comma)" v-model="toolbar.views"></props-row>
      <props-row name="sortFields" description="List of available fields for sorting" v-model="toolbar.sortFields" code></props-row>
      <props-row name="resultCount" description="Number of elements matching the filter criteria" v-model="toolbar.resultCount"></props-row>
    </props-table>
  </section>
</article>
</template>

<script>
import VuePatternfly from 'vue-patternfly';

export default {
  name: 'cards-page',

  data() {
    return {
      toolbarProps: VuePatternfly.Toolbar.props,
      toolbar: {
        view: 'table',
        views: 'table,card,list',
        filters: [],
        sortFields: [{
          title: 'Name',
        }, {
          title: 'Date',
        }],
        resultCount: 0,
      },
    };
  },

  methods: {
    setSort(field, ascending) {
      this.toolbar.sortField = field;
      this.toolbar.sortAscending = ascending;
    },
    addFilter(filter, value) {
      const f = {};
      f[filter.title] = value;
      this.toolbar.filters.push(f);
    },
  },
};
</script>
