<template>
<div class="table-wrapper" :style="{'margin-right': wrapperMargin}">
  <table v-if="scrollable"
    class="table dataTable table-head-clone"
    :style="{opacity: showClones ? 1 : 0}"
    :class="{
      'table-striped': striped,
      'table-bordered': bordered,
      'table-hover': hover,
    }">
    <thead ref="thead-clone">
      <tr>
        <th v-if="selectable" class="table-view-pf-select" aria-label="Select all rows">
          <label>
            <span class="sr-only">Select all rows</span>
            <input type="checkbox" @change="changeSelectAll">
          </label>
        </th>
        <th v-for="column in columns" :class="{
          sorting: sortable && column != sortBy,
          sorting_asc: sortable && column == sortBy && sortDirection == 'asc',
          sorting_desc: sortable && column == sortBy && sortDirection == 'desc',
        }" @click="setSortBy(column, column != sortBy || sortDirection == 'desc' ? 'asc' : 'desc')">{{column}}</th>
      </tr>
    </thead>
  </table>

  <div class="table-overflow-container" :style="{'margin-right': tableMargin}">
    <table class="table dataTable" role="grid" :class="{
      'table-striped': striped,
      'table-bordered': bordered,
      'table-hover': hover,
    }">
      <thead ref="thead">
        <tr role="row">
          <th v-if="selectable" class="table-view-pf-select" aria-label="Select all rows">
            <label>
              <span class="sr-only">Select all rows</span>
              <input type="checkbox" @change="changeSelectAll">
            </label>
          </th>
          <th v-for="column in columns" :class="{
            sorting: sortable && column != sortBy,
            sorting_asc: sortable && column == sortBy && sortDirection == 'asc',
            sorting_desc: sortable && column == sortBy && sortDirection == 'desc',
          }" @click="setSortBy(column, column != sortBy || sortDirection == 'desc' ? 'asc' : 'desc')">{{column}}</th>
        </tr>
      </thead>

      <tfoot v-if="pages > 1">
        <tr>
          <td class="table-summary" :colspan="columns.length + (selectable ? 1 : 0)">
            <!-- <div class="summary"></div> -->
            <pf-paginate-control :page="page" :pages="pages" @change="$emit('change-page', arguments[0])"></pf-paginate-control>
          </td>
        </tr>
      </tfoot>

      <tbody>
        <pf-table-row ref="row" v-for="(row, i) in rows" :num="i" :selectable="selectable">
          <slot :row="row"></slot>
        </pf-table-row>
      </tbody>
    </table>
  </div>

  <table v-if="scrollable"
    class="table dataTable table-foot-clone"
    :style="{opacity: showClones ? 1 : 0}"
    :class="{
      'table-striped': striped,
      'table-bordered': bordered,
      'table-hover': hover,
    }">
    <tfoot v-if="pages > 1">
      <tr>
        <td class="table-summary" :colspan="columns.length + (selectable ? 1 : 0)">
          <!-- <div class="summary"></div> -->
          <pf-paginate-control :page="page" :pages="pages" @change="$emit('change-page', arguments[0])"></pf-paginate-control>
        </td>
      </tr>
    </tfoot>
  </table>
</div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';
import PfTableRow from './TableRow.vue';
import debounce from 'lodash/debounce';

export default {
  name: 'pf-table',

  components: {
    PfTableRow,
  },

  props: {
    page: Number,
    pages: {
      type: Number,
      default: 0,
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
    striped: Boolean,
    bordered: Boolean,
    hover: Boolean,
    selectable: Boolean,
    scrollable: Boolean,
    sortable: Boolean,
    sortBy: String,
    sortDirection: String,
  },

  data() {
    return {
      wrapperOffset: 0,
      showClones: false,
    };
  },

  mounted() {
    this.syncHeaders = debounce(this.syncHeaders, 50);

    this.resizeObserver = new ResizeObserver((entries) => {
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

        const cr = entry.contentRect;

        if (entry.target.tagName == 'THEAD') {
          this.wrapperOffset = theadClone.clientWidth + this.wrapperOffset - cr.width;
        } else {
          this.syncHeaders();
        }
      }
    });

    this.$watch('scrollable', () => {
      if (this.scrollable) {
        this.showClones = false;
        this.resizeObserver.observe(this.$refs.thead);
        this.observeThead();
      } else {
        this.resizeObserver.disconnect();
      }
    }, {
      immediate: true,
    });
  },

  destroyed() {
    this.resizeObserver.disconnect();
  },

  computed: {
    wrapperMargin() {
      if (!this.scrollable) {
        return 0;
      }
      return `${this.wrapperOffset}px`;
    },

    tableMargin() {
      if (!this.scrollable) {
        return 0;
      }
      return `-${this.wrapperOffset}px`;
    },
  },

  methods: {
    setSortBy(field, direction) {
      this.$emit('sort-by', field, direction);
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
        if (typeof id != 'undefined' && row.selected && this.rows[id]) {
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
        this.resizeObserver.observe(row.children[i]);
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

  watch: {
    columns: {
      handler() {
        this.$nextTick(this.observeThead);
      },
      deep: true,
    },
  },
};
</script>

<style>
.table-wrapper {
  position: relative;
}

.table-head-clone,
.table-foot-clone {
  position: absolute;
  left: 0;
  z-index: 1;
}

.table-head-clone {
  top: 0;
}

.table-foot-clone {
  bottom: 0;
  background-color: white;
}

.table-overflow-container {
  overflow: auto;
  height: 100%;
}

.table > tfoot > tr > td.table-summary {
  padding: 0;
}

table.dataTable {
  height: auto;
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
