<template>
<div>
  <div class="list-group list-view-pf list-view-pf-view">
    <pf-list-item ref="row" v-for="(row, i) in rows" :key="i" :num="i" :selectable="selectable">
      <slot :row="row"></slot>
      <template slot="action" v-if="$slots.action || $scopedSlots.action">
        <slot name="action" :row="row"></slot>
      </template>
      <template slot="dropdown" v-if="$slots.dropdown || $scopedSlots.dropdown">
        <slot name="dropdown" :row="row"></slot>
      </template>
    </pf-list-item>
  </div>

  <pf-paginate-control
    v-if="itemsPerPage > 0"
    ref="pagination"
    class="table-view-pf-pagination"
    :page="page"
    :total-items="totalItems"
    :items-per-page="itemsPerPage"
    @update:itemsPerPage="$emit('update:itemsPerPage', $event)"
    :items-per-page-options="itemsPerPageOptions"
    @change="$emit('update:page', arguments[0])"
  />
</div>
</template>

<script>
import PfListItem from './ListViewItem.vue';

export default {
  name: 'pf-list-view',

  components: {
    PfListItem,
  },

  props: {
    page: Number,
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    itemsPerPageOptions: {
      type: Array,
      default() {
        return [10, 25, 50, 100, 500];
      },
    },
    selectable: Boolean,
    rows: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
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
  },
};
</script>
