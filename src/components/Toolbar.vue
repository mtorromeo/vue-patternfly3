<template>
<div class="toolbar-pf">
  <div class="col-sm-12">
    <form class="toolbar-pf-actions" :class="{'no-filter-results': !showResultFilter}" @submit="$event.preventDefault()">
      <pf-filter-fields @filter="setFilter" :fields="filterFields" v-if="filterFields.length > 0"></pf-filter-fields>
      <pf-sort :fields="sortFields" v-if="sortFields.length > 0" @change="setSort"></pf-sort>
      <div class="form-group toolbar-actions">
        <slot></slot>
      </div>
      <div class="toolbar-pf-action-right">
        <div class="form-group toolbar-pf-view-selector">
          <button v-for="(viewData, name) in viewList" class="btn btn-link" :class="{'active': view == name, 'disabled': viewData.disabled}" :title="viewData.title">
            <i :class="[viewData.iconClass]" class="view-selector" @click="activeView = name"></i>
          </button>
        </div>
      </div>
    </form>
    <pf-filter-results v-if="showResultFilter" :count="resultCount" :filters="activeFilters"></pf-filter-results>
  </div>
</div>
</template>

<script>
import PfSort from './Sort.vue';
import Dropdown from 'vue-strap/src/Dropdown.vue';

export default {
  name: 'pf-toolbar',

  components: {
    PfSort,
    Dropdown,
  },

  props: {
    view: String,
    views: {
      type: [Object, String],
      default() {
        return {};
      },
    },
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
      activeView: null,
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
    viewList() {
      if (typeof this.views != 'string') {
        return this.views;
      }

      const viewList = {};
      const presets = this.views.split(',').map(v => v.trim());
      if (presets.indexOf('table') > -1) {
        viewList.table = {
          iconClass: 'fa fa-th',
        };
      }
      if (presets.indexOf('card') > -1) {
        viewList.card = {
          iconClass: 'fa fa-th-large',
        };
      }
      if (presets.indexOf('list') > -1) {
        viewList.list = {
          iconClass: 'fa fa-th-list',
        };
      }
      return viewList;
    },
    showResultFilter() {
      return typeof this.resultCount != 'undefined';
    },
  },

  watch: {
    filters: {
      handler() {
        this.activeFilters = this.filters;
      },
      immediate: true,
    },
    view: {
      handler() {
        this.activeView = this.view;
      },
      immediate: true,
    },
    views: {
      handler() {
        if (!this.views[this.activeView]) {
          const names = Object.keys(this.views)
          if (names.length > 0) {
            this.activeView = names[0];
          }
        }
      },
      immediate: true,
    },
    activeView() {
      this.$emit('view', this.activeView);
    },
    activeFilters() {
      this.$emit('filters', this.activeFilters);
    },
  },
};
</script>
