<template>
<div class="filter-pf">
  <div class="row toolbar-pf-results">
    <div class="col-sm-12">
      <h5>{{count}} Results</h5>
      <p v-if="filters.length > 0">Active filters:</p>
      <ul class="list-inline">
        <li v-for="(filter, i) in filters">
          <span class="active-filter label label-info">
            {{filter.label}}: {{filter.value}}
            <a><span class="pficon pficon-close" @click="$parent.clearFilter(i)"></span></a>
          </span>
        </li>
      </ul>
      <p><a class="clear-filters" @click="$parent.clearAllFilters()" v-if="filters.length > 0">Clear All Filters</a></p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'pf-filter-results',

  props: {
    count: Number,
    filters: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
