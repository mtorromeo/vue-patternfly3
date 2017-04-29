<template>
<div class="clearfix toolbar-pf" :class="{
    'table-view-pf-toolbar': attached,
  }" _v-3RyaW5nJyk>
  <div class="col-sm-12">
    <form class="toolbar-pf-actions" :class="{'no-filter-results': !showResultFilter}" @submit="$event.preventDefault()">
      <pf-filter-fields @filter="addFilter" :fields="filterFields" v-if="showFilter"></pf-filter-fields>
      <div class="form-group" v-if="showSorter || showColumnPicker">
        <pf-sort :fields="sortFields" v-if="showSorter" :sortBy="sortBy" :direction="sortDirection" @change="setSortBy"></pf-sort>

        <pf-column-picker ref="colpicker" v-if="showColumnPicker" :columns="columns" :value="pickedColumns" @input="setPickedColumns"></pf-column-picker>
      </div>

      <div class="toolbar-actions" :class="{
        'form-group': !hasFindView,
        'pull-right': !hasFindView,
        'toolbar-pf-action-right': !hasFindView,
      }" v-if="$slots.default">
        <h5 class="form-group" v-if="showCount && !hasFindView">
          {{resultCount}} Results
        </h5>

        <div class="form-group">
          <slot></slot>
        </div>
      </div>

      <div class="toolbar-pf-action-right" v-if="hasFindView">
        <h5 class="form-group" v-if="showCount && hasFindView">
          {{resultCount}} Results
        </h5>

        <div class="form-group toolbar-pf-view-selector">
          <button v-for="(viewData, name) in viewList" class="btn btn-link" :class="{'active': view == name, 'disabled': viewData.disabled}" :title="viewData.title" @click="activeView = name">
            <i :class="[viewData.iconClass]" class="view-selector"></i>
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
import PfColumnPicker from './ColumnPicker.vue';

export default {
  name: 'pf-toolbar',

  components: {
    PfSort,
    PfColumnPicker,
  },

  props: {
    view: String,
    views: {
      type: [Object, String],
      default() {
        return {};
      },
    },
    columns: {
      type: [Array, Object],
      default() {
        return [];
      },
    },
    pickedColumns: {
      type: Array,
      default() {
        return [];
      },
    },
    filterFields: {
      type: [Array, Object],
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
    sortBy: String,
    sortDirection: String,
    sortFields: {
      type: [Array, Object],
      default() {
        return [];
      },
    },
    resultCount: Number,
    attached: Boolean,
  },

  data() {
    return {
      activeView: null,
      activeFilters: [],
    };
  },

  mounted() {
    this.activeView = this.view;
  },

  methods: {
    setSortBy(field, direction) {
      this.$emit('sort-by', field, direction);
    },
    clearFilter(i) {
      this.activeFilters.splice(i, 1);
    },
    clearAllFilters() {
      this.activeFilters = [];
    },
    addFilter(filter) {
      this.activeFilters.push(filter);
    },
    setPickedColumns(columns) {
      this.$emit('columns', columns);
    },
  },

  computed: {
    showSorter() {
      return this.sortFields instanceof Array ? this.sortFields.length : Object.keys(this.sortFields).length;
    },
    showFilter() {
      return Object.keys(this.filterFields).length;
    },
    showColumnPicker() {
      return (this.activeView == 'table' || !Object.keys(this.viewList).length) && this.columns.length;
    },
    showCount() {
      return !this.showResultFilter && typeof this.resultCount != 'undefined';
    },
    hasFindView() {
      return Object.keys(this.viewList).length;
    },
    viewList() {
      if (typeof this.views != 'string') {
        return this.views;
      }

      const viewList = {};
      const presets = this.views.split(',').map(v => v.trim());
      if (presets.indexOf('table') > -1) {
        viewList.table = {
          iconClass: 'fa fa-table',
        };
      }
      if (presets.indexOf('card') > -1) {
        viewList.card = {
          iconClass: 'fa fa-th',
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
      return this.activeFilters.length;
    },
  },

  watch: {
    filters: {
      handler() {
        this.activeFilters = this.filters;
      },
      immediate: true,
    },
    view() {
      this.activeView = this.view;
    },
    views: {
      handler() {
        if (!this.views[this.activeView]) {
          const names = Object.keys(this.views);
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

<style>
h5.form-group[_v-3RyaW5nJyk] {
  display: inline-block;
  line-height: 26.66666667px;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 700;
}

.toolbar-pf-actions .toolbar-pf-view-selector a {
  cursor: pointer;
}

.toolbar-pf-actions .dropdown-menu a {
  cursor: pointer;
}

.toolbar-pf-actions .dropdown-kebab-pf {
  float: right;
}

.toolbar-pf-include-actions {
  display: inline-block;
  margin: 0 5px;
}

.toolbar-pf-actions.no-filter-results {
  margin-bottom: 10px;
}

.toolbar-pf .sort-pf {
  display: inline-block;
}

.toolbar-pf .column-picker {
  display: inline-block;
  margin-left: 10px;
}

.toolbar-pf .column-picker:first-child {
  margin-left: 0;
}

.dropdown-kebab-pf.invisible {
  opacity: 0;
  pointer-events: none;
}
</style>
