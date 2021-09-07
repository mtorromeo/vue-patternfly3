<template>
  <article class="page">
    <header>
      <h1>Toolbar <code>&lt;pf-toolbar&gt;</code></h1>
    </header>

    <section>
      <p>This component implements a toolbar with controls for filters, sorting, searching and custom actions to interact with a data view.</p>

      <h4>Related documentation</h4>
      <ol>
        <li><a href="https://www.patternfly.org/v3/pattern-library/forms-and-controls/toolbar/#_" target="_blank">Pattern Library > Form and Controls > Toolbar</a></li>
      </ol>

      <div class="demo-container">
        <pf-toolbar ref="toolbar"
                    v-model:view="toolbar.view"
                    v-model:filters="toolbar.filters"
                    v-model:sort-by="toolbar.sortBy"
                    v-model:sort-direction="toolbar.sortDirection"
                    v-model:picked-columns="toolbar.pickedColumns"
                    :views="toolbar.views"
                    :filter-fields="toolbar.filterFields"
                    :sort-fields="toolbar.sortFields"
                    :result-count="toolbar.resultCount"
                    :attached="toolbar.attached"
                    :columns="toolbar.columns">
          <div v-if="toolbar.slotDefault.enabled" style="float:left" v-html="toolbar.slotDefault.content" />

          <template v-if="toolbar.slotFilter.enabled" #filter>
            <div v-html="toolbar.slotFilter.content" />
          </template>

          <pf-dropdown class="dropdown-kebab-pf" type="link">
            <li role="menuitem">
              <a title="Menu Title 1">Menu Item 1</a>
            </li>
            <li role="menuitem">
              <a title="Menu Title 2">Menu Item 2</a>
            </li>
            <li role="separator" class="divider" />
            <li role="menuitem">
              <a title="Menu Title 3">Menu Item 3</a>
            </li>
          </pf-dropdown>
        </pf-toolbar>
      </div>

      <props-table :component-props="toolbarProps">
        <props-row v-model="toolbar.attached" name="attached" description="Use the layout for the toolbar attached to an adjacient table" />
        <props-row v-model="toolbar.filterFields" name="filterFields" description="List of available fields for filtering" code />
        <props-row v-model="toolbar.filters" name="filters" description="List of active filters" code />
        <props-row v-model="toolbar.view" name="view" description="Active view" />
        <props-row v-model="toolbar.views" name="views" description="List of available views (names separated by comma)" />
        <props-row v-model="toolbar.sortBy" name="sortBy" description="Selected sorting field" />
        <props-row v-model="toolbar.sortDirection" name="sortDirection" description="Selected sorting direction" :options="['ascending', 'descending']" />
        <props-row v-model="toolbar.sortFields" name="sortFields" description="List of available fields for sorting" code />
        <props-row v-model="toolbar.columns" name="columns" description="List of available columns to display" code />
        <props-row v-model="toolbar.pickedColumns" name="pickedColumns" description="List of available columns to display" code />
        <props-row v-model="toolbar.resultCount" name="resultCount" description="Number of elements matching the filter criteria" />
      </props-table>

      <slots-table toggle>
        <slots-row v-model:enabled="toolbar.slotDefault.enabled" v-model="toolbar.slotDefault.content" name="default" description="Action buttons and dropdowns can be placed here" />
        <slots-row v-model:enabled="toolbar.slotFilter.enabled" v-model="toolbar.slotFilter.content" name="filter" description="Filter input" />
      </slots-table>
    </section>
  </article>
</template>

<script>
import { Toolbar } from 'vue-patternfly';

export default {
  name: 'cards-page',

  data() {
    return {
      toolbarProps: Toolbar.props,
      toolbar: {
        view: 'table',
        views: 'table,card,list',
        filters: [],
        filterFields: {
          name: {
            label: 'Name',
          },
          age: {
            label: 'Age',
          },
          address: {
            label: 'Address',
          },
          birthMonth: {
            label: 'Birth Month',
            placeholder: 'Filter by Birth Month...',
            values: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          },
        },
        sortBy: 'date',
        sortDirection: 'ascending',
        sortFields: {
          name: 'Name',
          date: 'Date',
          age: {
            label: 'Age',
            type: 'numeric',
          },
        },
        columns: ['Name', 'Date'],
        pickedColumns: ['Name'],
        resultCount: 0,
        attached: false,
        slotDefault: {
          enabled: true,
          content: `<button class="btn btn-default" type="button" title="Title 1">
  Action 1
</button>
<button class="btn btn-default" type="button" title="Title 2">
  Action 2
</button>
<button class="btn btn-danger" type="button" title="Title 3">
  Action 3
</button>

<!-- The "kebab" menu is fixed in this example due to how v-html works -->`,
        },
        slotFilter: {
          enabled: false,
          content: '<label><input type="checkbox"> My custom filter</label>',
        },
      },
    };
  },

  methods: {
    addFilter(filter, value) {
      const f = {};
      f[filter.title] = value;
      this.toolbar.filters.push(f);
    },
  },
};
</script>
