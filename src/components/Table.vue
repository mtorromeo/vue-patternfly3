<template>
<table class="table dataTable" role="grid" :class="{
  'table-striped': striped,
  'table-bordered': bordered,
  'table-hover': hover,
}">
  <thead>
    <tr row="row">
      <th v-if="selectable" class="table-view-pf-select" aria-label="Select all rows">
        <label>
          <span class="sr-only">Select all rows</span>
          <input ref="checkSelectAll" type="checkbox" @change="changeSelectAll">
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
      <td class="table-summary" :colspan="columns.length">
        <!-- <div class="summary"></div> -->

        <span class="dataTables_paginate paginate-control" aria-label="Search results pages">
          <ul class="pagination">
            <li class="first" :class="{disabled: page == 1}" title="First" @click="setPage(1)">
              <span class="i fa fa-angle-double-left" aria-hidden="true"></span>
            </li>
            <li class="prev" :class="{disabled: page <= 1}" title="Prev" @click="setPage(page - 1)">
              <span class="i fa fa-angle-left" aria-hidden="true"></span>
            </li>
          </ul>
          <div class="pagination-input">
            <input type="text" class="paginate_input" v-model="page" :style="{
              width: (.7 * (pages.toString().length + 1)) + 'em'
            }">
            <span class="paginate_of"> of <b>{{pages}}</b></span>
          </div>
          <ul class="pagination">
            <li class="next" :class="{disabled: page >= pages}" title="Next" @click="setPage(page + 1)">
              <span class="i fa fa-angle-right" aria-hidden="true"></span>
            </li>
            <li class="last" :class="{disabled: page == pages}" title="Last" @click="setPage(pages)">
              <span class="i fa fa-angle-double-right" aria-hidden="true"></span>
            </li>
          </ul>
        </span>
      </td>
    </tr>
  </tfoot>
  <tbody>
    <pf-table-row ref="row" v-for="(row, i) in rows" :num="i" :selectable="selectable">
      <slot :row="row"></slot>
    </pf-table-row>
  </tbody>
</table>
</template>

<script>
import PfTableRow from './TableRow.vue';

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
    sortable: Boolean,
    sortBy: String,
    sortDirection: String,
  },

  methods: {
    setPage(page) {
      page = Math.max(Math.min(page, this.pages), 1);
      this.$emit('change-page', page);
    },

    setSortBy(field, direction) {
      this.$emit('sort-by', field, direction);
    },

    changeSelectAll() {
      this.setAllSelected(this.$refs.checkSelectAll.checked);
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
  },
};
</script>

<style>
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
</style>
