<template>
  <div
    v-bind="ouiaProps"
    class="clearfix toolbar-pf"
    :class="{
      'table-view-pf-toolbar': attached,
    }"
    _v-3RyaW5nJyk
  >
    <div class="col-sm-12">
      <form
        class="toolbar-pf-actions"
        :class="{ 'no-filter-results': !showResultFilter }"
        @submit="$event.preventDefault()"
      >
        <div
          v-if="showFilter || $slots.filter"
          class="filter-pf filter-fields form-group toolbar-pf-filter"
        >
          <slot name="filter">
            <pf-filter-fields :fields="filterFields" @filter="addFilter" />
          </slot>
        </div>
        <div v-if="showSorter || showColumnPicker" class="form-group">
          <pf-sort
            v-if="showSorter"
            :fields="sortFields"
            :sort-by="sortBy"
            :direction="sortDirection"
            @change="setSortBy"
          />

          <pf-column-picker
            v-if="showColumnPicker"
            ref="colpicker"
            :columns="columns"
            :model-value="pickedColumns"
            @update:model-value="setPickedColumns"
          />
        </div>

        <div
          v-if="$slots.default"
          class="toolbar-actions"
          :class="{
            'form-group': !hasFindView,
            'pull-right': !hasFindView,
            'toolbar-pf-action-right': !hasFindView,
          }"
        >
          <h5 v-if="showCount && !hasFindView" class="form-group">{{ resultCount }} Results</h5>

          <div class="form-group">
            <slot />
          </div>
        </div>

        <div v-if="hasFindView" class="toolbar-pf-action-right">
          <h5 v-if="showCount && hasFindView" class="form-group">{{ resultCount }} Results</h5>

          <div class="form-group toolbar-pf-view-selector">
            <pf-button
              v-for="(viewData, name) in viewList"
              :key="name"
              variant="link"
              :class="{ 'active': view == name, 'disabled': viewData.disabled }"
              :title="viewData.title"
              @click="activeView = name"
            >
              <pf-icon tag="i" :name="viewData.icon" class="view-selector" />
            </pf-button>
          </div>
        </div>
      </form>
      <pf-filter-results v-if="showResultFilter" :count="resultCount" :filters="activeFilters" />
    </div>
  </div>
</template>

<script lang="ts">
import PfButton from './Button.vue';
import PfColumnPicker, { Column } from './ColumnPicker.vue';
import PfSort, { SortDirection, SortFieldDefinition } from './Sort.vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import { DefineComponent, defineComponent, PropType } from 'vue';
import { Filter } from './FilterResults.vue';

export interface ToolbarView {
  icon: string;
  title?: string;
  disabled?: boolean;
}

const PfToolbar = defineComponent({
  name: 'PfToolbar',

  components: {
    PfButton,
    PfSort,
    PfColumnPicker,
  },

  props: {
    view: String,
    views: {
      type: [Object, String] as PropType<Record<string, ToolbarView> | string>,
      default: () => ({}),
    },
    columns: {
      type: [Array, Object] as PropType<Column[] | Record<string, Column>>,
      default: (): Column[] => [],
    },
    pickedColumns: {
      type: Array as PropType<string[]>,
      default: (): string[] => [],
    },
    filterFields: {
      type: [Array, Object],
      default: () => ({}),
    },
    filters: {
      type: Array as PropType<Filter[]>,
      default: (): Filter[] => [],
    },
    sortBy: String,
    sortDirection: {
      type: String as PropType<SortDirection>,
      default: 'ascending',
      validator: (v: never) => ['ascending', 'descending'].includes(v),
    },
    sortFields: {
      type: [Array, Object] as PropType<SortFieldDefinition[] | Record<string, SortFieldDefinition>>,
      default: (): SortFieldDefinition[] => [],
    },
    resultCount: Number,
    attached: Boolean,
    ...ouiaProps,
  },

  emits: ['update:view', 'update:pickedColumns', 'update:filters', 'update:sortBy', 'update:sortDirection', 'sort-by'],

  setup(props) {
    return useOUIAProps(props);
  },

  data(this: void) {
    return {
      activeView: null as string | null,
      activeFilters: [] as Filter[],
    };
  },

  computed: {
    showSorter() {
      return Array.isArray(this.sortFields) ? this.sortFields.length : Object.keys(this.sortFields).length;
    },
    showFilter() {
      return Object.keys(this.filterFields).length;
    },
    showColumnPicker() {
      return (this.activeView === 'table' || !Object.keys(this.viewList).length) &&
        (Array.isArray(this.columns) ? this.columns : Object.keys(this.columns)).length;
    },
    showCount() {
      return !this.showResultFilter && typeof this.resultCount !== 'undefined';
    },
    hasFindView() {
      return Object.keys(this.viewList).length;
    },
    viewList() {
      if (typeof this.views !== 'string') {
        return this.views;
      }

      const viewList: Record<string, ToolbarView> = {};
      const presets = this.views.split(',').map(v => v.trim());
      if (presets.indexOf('table') > -1) {
        viewList.table = {
          icon: 'fa-table',
        };
      }
      if (presets.indexOf('card') > -1) {
        viewList.card = {
          icon: 'fa-th',
        };
      }
      if (presets.indexOf('list') > -1) {
        viewList.list = {
          icon: 'fa-th-list',
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
        if (!(this.activeView in this.viewList)) {
          const names = Object.keys(this.viewList);
          if (names.length > 0) {
            this.activeView = names[0];
          }
        }
      },
      immediate: true,
    },
    activeView() {
      this.$emit('update:view', this.activeView);
    },
    activeFilters() {
      this.$emit('update:filters', this.activeFilters);
    },
  },

  mounted() {
    this.activeView = this.view;
  },

  methods: {
    setSortBy(field: string, direction: SortDirection) {
      this.$emit('sort-by', field, direction);
      this.$emit('update:sortBy', field);
      this.$emit('update:sortDirection', direction);
    },
    clearFilter(i: number) {
      this.activeFilters.splice(i, 1);
    },
    clearAllFilters() {
      this.activeFilters = [];
    },
    addFilter(filter: Filter) {
      this.activeFilters.push(filter);
    },
    setPickedColumns(columns: string[]) {
      this.$emit('update:pickedColumns', columns);
    },
  },
});

export function isPfToolbar(component: unknown): component is InstanceType<typeof PfToolbar> {
  return typeof component === 'object' && (component as DefineComponent).$options?.name === 'PfToolbar';
}

export default PfToolbar;
</script>

<style>
h5.form-group[_v-3RyaW5nJyk] {
  display: inline-block;
  line-height: 26.66666667px;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 700;
}

.toolbar-pf .form-group .btn-group .btn {
  margin-left: -1px;
}

.toolbar-pf-actions .toolbar-pf-view-selector a {
  cursor: pointer;
}

.toolbar-pf-actions .dropdown-menu a {
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
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
