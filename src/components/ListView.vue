<template>
  <div v-bind="ouiaProps">
    <div class="list-group list-view-pf list-view-pf-view">
      <pf-list-group-item
        v-for="(row, i) in rows"
        ref="row"
        :key="keyName ? row[keyName] : i"
        :index="i"
        :selectable="selectable"
        :expandable="expandable"
        :stacked="stacked"
      >
        <slot :row="row" :index="i" />
        <template v-if="$slots.action" #action>
          <slot name="action" :row="row" :index="i" />
        </template>
        <template v-if="$slots.dropdown" #dropdown>
          <slot name="dropdown" :row="row" :index="i" />
        </template>
        <template v-if="$slots.expansion" #expansion>
          <slot name="expansion" :row="row" :index="i" />
        </template>
      </pf-list-group-item>
    </div>

    <pf-paginate-control
      v-if="itemsPerPage > 0"
      ref="pagination"
      type="list"
      :page="page"
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
      :items-per-page-options="itemsPerPageOptions"
      @update:itemsPerPage="$emit('update:itemsPerPage', $event)"
      @change="$emit('update:page', $event)"
    />
  </div>
</template>

<script>
import { ouiaProps, useOUIAProps } from '../use';
import PfListGroupItem from './ListGroupItem.vue';

export default {
  name: 'PfListView',

  components: {
    PfListGroupItem,
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
    expandable: Boolean,
    selectable: Boolean,
    stacked: Boolean,
    rows: {
      type: Array,
      default() {
        return [];
      },
    },
    keyName: String,
    ...ouiaProps,
  },

  emits: ['update:itemsPerPage', 'update:page'],

  setup(props) {
    return useOUIAProps(props);
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
