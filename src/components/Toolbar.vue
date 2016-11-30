<template>
<div class="container-fluid">
  <div class="row toolbar-pf">
    <div class="col-sm-12">
      <form class="toolbar-pf-actions" :class="{'no-filter-results': !showResultFilter}" @submit="$event.preventDefault()">
        <pf-filter-fields @filter="setFilter" :fields="filterFields" v-if="filterFields.length > 0"></pf-filter-fields>
        <pf-sort :fields="sortFields" v-if="sortFields.length > 0" @change="setSort"></pf-sort>
        <div class="form-group toolbar-actions">
          <slot></slot>
        </div>
        <div class="form-group toolbar-pf-view-selector pull-right">
          <ul class="list-inline">
            <li v-for="view in views"
                :class="{'active': isViewSelected(view.id), 'disabled': checkViewDisabled(view)}"
                :title="view.title">
              <a>
                <i :class="[view.iconClass]" class="view-selector" @click="viewSelected(view.id)"></i>
              </a>
            </li>
          </ul>
        </div>
      </form>
      <pf-filter-results v-if="showResultFilter" :count="resultCount" :filters="activeFilters"></pf-filter-results>
    </div>
  </div>
</div>
</template>

<script>
import PfSort from './Sort.vue';
import Dropdown from 'vue-strap/src/components/Dropdown.vue';

export default {
  name: 'pf-toolbar',

  components: {
    PfSort,
    Dropdown,
  },

  props: {
    filters: {
      type: Array,
      default() {
        return [];
      },
    },
    filterFields: {
      type: Array,
      default() {
        return [];
      },
    },
    sortFields: {
      type: Array,
      default() {
        return [];
      },
    },
    resultCount: Number,
  },

  data() {
    return {
      views: {},
      activeFilters: [],
    };
  },

  methods: {
    setSort(field, ascending) {
      this.$emit('sort-change', field, ascending);
    },
    clearFilter(i) {
      this.activeFilters.splice(i, 1);
    },
    clearAllFilters() {
      this.activeFilters = [];
    },
    setFilter(filter, value) {
      this.activeFilters.push({
        title: filter.title,
        value: value,
      });
    },
  },

  computed: {
    showResultFilter() {
      return typeof this.resultCount != 'undefined';
    }
  },

  watch: {
    fitlers: {
      handler() {
        this.activeFilters = this.filters;
      },
      immediate: true,
    },
    activeFilters() {
      this.$emit('filters', this.activeFilters);
    },
  },
};
</script>
