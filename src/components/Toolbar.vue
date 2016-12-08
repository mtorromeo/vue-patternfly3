<template>
<div class="clearfix toolbar-pf">
  <div class="col-sm-12">
    <form class="toolbar-pf-actions" :class="{'no-filter-results': !showResultFilter}" @submit="$event.preventDefault()">
      <pf-filter-fields @filter="setFilter" :fields="filterFields" v-if="filterFields.length > 0"></pf-filter-fields>
      <pf-sort :fields="sortFields" v-if="sortFields.length > 0" @change="setSort"></pf-sort>

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
import VueStrap from 'vue-strap';

export default {
  name: 'pf-toolbar',

  components: {
    PfSort,
    dropdown: VueStrap.dropdown,
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
    showCount() {
      return !this.showResultFilter && typeof this.resultCount != 'undefined';
    },
    hasFindView() {
      return this.views || this.viewList.length > 0;
    },
    viewList() {
      if (typeof this.views != 'string') {
        return this.views;
      }

      const viewList = {};
      const presets = this.views.split(',').map(v => v.trim());
      if (presets.indexOf('table') > -1) {
        viewList.table = {
          iconClass: 'fa fa-align-justify',
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

<style scoped>
h5.form-group {
  display: inline-block;
  line-height: 26.66666667px;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 700;
}
</style>
