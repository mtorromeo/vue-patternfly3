<template>
  <div v-bind="ouiaProps" class="filter-pf">
    <div class="row toolbar-pf-results">
      <div class="col-sm-12">
        <h5>{{ count }} Results</h5>
        <p v-if="filters.length > 0">
          Active filters:
        </p>
        <ul class="list-inline">
          <li v-for="(filter, i) in filters" :key="i">
            <span class="active-filter label label-info">
              {{ filter.label }}: {{ filter.value }}
              <a><pf-icon name="pficon-close" @click="$parent.clearFilter(i)" /></a>
            </span>
          </li>
        </ul>
        <p><a v-if="filters.length > 0" class="clear-filters" @click="$parent.clearAllFilters()">Clear All Filters</a></p>
      </div>
    </div>
  </div>
</template>

<script>import { ouiaProps, useOUIAProps } from '../use';

export default {
  name: 'PfFilterResults',

  props: {
    count: Number,
    filters: {
      type: Array,
      default() {
        return [];
      },
    },
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },
};
</script>
