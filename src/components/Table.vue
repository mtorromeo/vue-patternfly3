<template>
  <div v-bind="ouiaProps" class="table-wrapper">
    <table v-if="scrollable"
           class="table dataTable table-head-clone"
           :style="{
             opacity: showClones ? 1 : 0,
           }"
           :class="{
             'table-striped': striped,
             'table-bordered': bordered,
             'table-hover': hover,
           }"
    >
      <thead ref="thead-clone">
        <tr>
          <th v-if="selectable" class="table-view-pf-select" aria-label="Select all rows">
            <label>
              <span class="sr-only">Select all rows</span>
              <input type="checkbox" @change="changeSelectAll">
            </label>
          </th>
          <th
            v-for="(column, i) in columns"
            :key="i"
            :class="{
              sorting: sortable && column != sortBy,
              sorting_asc: sortable && column == sortBy && sortDirection == 'asc',
              sorting_desc: sortable && column == sortBy && sortDirection == 'desc',
            }"
            @click="setSortBy(column, column != sortBy || sortDirection == 'desc' ? 'asc' : 'desc')"
          >
            {{ column }}
          </th>
          <th v-if="actionSpan" :colspan="actionSpan">
            Actions
          </th>
        </tr>
      </thead>
    </table>

    <div class="table-overflow-container">
      <table class="table dataTable" role="grid" :class="{
        'table-striped': striped,
        'table-bordered': bordered,
        'table-hover': hover,
      }" :style="{
        'margin-top': scrollable ? `-${headHeight + 1}px` : 0,
      }">
        <thead ref="thead">
          <tr role="row">
            <th v-if="selectable" class="table-view-pf-select" aria-label="Select all rows">
              <label>
                <span class="sr-only">Select all rows</span>
                <input type="checkbox" @change="changeSelectAll">
              </label>
            </th>
            <th
              v-for="(column, i) in columns"
              :key="i"
              :class="{
                sorting: sortable && column != sortBy,
                sorting_asc: sortable && column == sortBy && sortDirection == 'asc',
                sorting_desc: sortable && column == sortBy && sortDirection == 'desc',
              }"
              @click="setSortBy(column, column != sortBy || sortDirection == 'desc' ? 'asc' : 'desc')"
            >
              {{ column }}
            </th>
            <th v-if="actionSpan" :colspan="actionSpan">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          <pf-table-row v-for="(row, i) in rows" ref="row" :key="keyName ? row[keyName] : i" :num="i" :selectable="selectable">
            <slot :row="row" />
            <template v-if="$slots.action" #action>
              <slot name="action" :row="row" />
            </template>
            <template v-if="$slots.dropdown" #dropdown>
              <slot name="dropdown" :row="row" />
            </template>
          </pf-table-row>
        </tbody>
      </table>
    </div>

    <pf-paginate-control
      v-if="itemsPerPage > 0"
      ref="pagination"
      type="table"
      :page="page"
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
      :items-per-page-options="itemsPerPageOptions"
      @update:itemsPerPage="$emit('update:itemsPerPage', $event)"
      @change="$emit('update:page', arguments[0])"
    >
      <slot name="footer" />
    </pf-paginate-control>
  </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';
import PfTableRow from './TableRow.vue';
import debounce from 'lodash-es/debounce';
import { ouiaProps, useOUIAProps } from '../ouia';

export default {
  name: 'PfTable',

  components: {
    PfTableRow,
  },

  props: {
    page: Number,
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 25,
    },
    itemsPerPageOptions: {
      type: Array,
      default() {
        return [10, 25, 50, 100, 500];
      },
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    rows: {
      type: Array,
      default() {
        return [];
      },
    },
    keyName: String,
    striped: Boolean,
    bordered: Boolean,
    hover: Boolean,
    selectable: Boolean,
    scrollable: Boolean,
    sortable: Boolean,
    sortBy: String,
    sortDirection: String,
    ...ouiaProps,
  },

  emits: ['update:page', 'update:itemsPerPage', 'sort-by', 'update:sortBy', 'update:sortDirection'],

  setup(props) {
    return useOUIAProps(props);
  },

  data() {
    return {
      headHeight: 27,
      paginationHeight: 38,
      showClones: false,
    };
  },

  computed: {
    actionSpan() {
      let colspan = 0;
      if (this.$slots.action) {
        colspan++;
      }
      if (this.$slots.dropdown) {
        colspan++;
      }
      return colspan;
    },
  },

  watch: {
    columns: {
      handler() {
        this.$nextTick(this.observeThead);
      },
      deep: true,
    },
  },

  mounted() {
    this.syncHeaders = debounce(this.syncHeaders, 50);

    this.headObserver = new ResizeObserver((entries) => {
      if (!this.scrollable) {
        return;
      }

      const theadClone = this.$refs['thead-clone'];
      if (!theadClone) {
        return;
      }

      for (const entry of entries) {
        if (!entry.target.parentElement) {
          continue;
        }

        if (entry.target.tagName === 'THEAD') {
          this.headHeight = theadClone.clientHeight;
        } else {
          this.syncHeaders();
        }
      }
    });

    this.paginationObserver = new ResizeObserver((entries) => {
      if (!this.scrollable) {
        return;
      }

      for (const entry of entries) {
        if (entry.target == this.$refs.pagination) {
          this.paginationHeight = this.$refs.pagination.clientHeight;
          break;
        }
      }
    });

    this.scrollableUnwatch = this.$watch('scrollable', () => {
      if (this.scrollable) {
        this.showClones = false;
        this.headObserver.observe(this.$refs.thead);
        this.paginationObserver.observe(this.$refs.pagination.$el);
        this.observeThead();
      } else {
        this.headObserver.disconnect();
        this.paginationObserver.disconnect();
      }
    }, {
      immediate: true,
    });
  },

  unmounted() {
    this.headObserver.disconnect();
    this.paginationObserver.disconnect();
    this.scrollableUnwatch();
  },

  methods: {
    setSortBy(field, direction) {
      this.$emit('sort-by', field, direction);
      this.$emit('update:sortBy', field);
      this.$emit('update:sortDirection', direction);
    },

    changeSelectAll(e) {
      this.setAllSelected(e.target.checked);
    },

    setAllSelected(selected = true) {
      for (const row of this.$refs.row) {
        row.selected = selected;
      }
    },

    getSelected() {
      const selected = [];
      for (const row of this.$refs.row) {
        const id = row.num;
        if (typeof id !== 'undefined' && row.selected && this.rows[id]) {
          selected.push(this.rows[id]);
        }
      }
      return selected;
    },

    observeThead() {
      const row = this.$refs.thead.firstChild;
      for (let i = 0; i < row.children.length; i++) {
        if (i == 0 && this.selectable) {
          continue;
        }
        this.headObserver.observe(row.children[i]);
      }
    },

    syncHeaders() {
      if (!this.$refs['thead-clone'] || !this.$refs.thead) {
        return;
      }

      const ths = this.$refs.thead.firstChild.children;
      const thsC = this.$refs['thead-clone'].firstChild.children;

      let i = 0;
      for (const th of ths) {
        if (i == 0 && this.selectable) {
          i++;
          continue;
        }

        const thC = thsC[i];

        if (i == thsC.length - 1) {
          thC.style.width = 'auto';
        } else {
          thC.style.width = `${th.clientWidth + 1}px`;
        }
        i++;
      }

      this.showClones = true;
    },
  },
};
</script>

<style>
.table-wrapper {
  position: relative;
  overflow: visible;
}

table-head-clone {
  position: absolute;
}

.table-overflow-container {
  overflow: auto;
  height: 100%;
}

table.dataTable {
  height: auto;
  position: relative;
}

.table-view-pf-select label {
  display: initial;
  font-weight: initial;
}

.table-view-pf-select input[type=checkbox] {
  margin: 0;
  position: relative;
  top: 2px;
}

.table-view-pf-actions .caret:before {
  content: "\f142"; /* fa-ellipsis-v */
}
</style>
