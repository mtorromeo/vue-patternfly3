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
              <a><pf-icon name="pficon-close" @click="toolbar()?.clearFilter(i)" /></a>
            </span>
          </li>
        </ul>
        <p><a v-if="filters.length > 0" class="clear-filters" @click="toolbar()?.clearAllFilters()">Clear All Filters</a></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import PfToolbar, { isPfToolbar } from './Toolbar.vue';

export interface Filter {
  label: string;
  value: string;
}

export default defineComponent({
  name: 'PfFilterResults',

  props: {
    count: Number,
    filters: {
      type: Array as PropType<Filter[]>,
      default: (): Filter[] => [],
    },
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },

  methods: {
    toolbar(): InstanceType<typeof PfToolbar> | null {
      let parent = this.$parent;
      while (parent) {
        if (isPfToolbar(parent)) {
          return parent;
        }
        parent = parent.$parent;
      }
      return null;
    },
  },
});
</script>
