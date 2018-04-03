<template>
<div>
<div>
    <div class="container-fluid">
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
    </div>
</div>

<div class="row" v-if="pages > 1">
    <div class="col-md-12">   
        <div class="pull-right">
            <pf-paginate-control :page="page" :pages="pages" @change="$emit('update:page', arguments[0])"></pf-paginate-control>
        </div>
    </div>      
</div>
</div>
</template>
<script>
import PfListItem from "./ListViewItem.vue";
export default {
  name: "pf-list-view",

  components: {
    PfListItem
  },

  props: {
    page: Number,
    pages: {
      type: Number,
      default: 0
    },
    selectable: Boolean,
    rows: {
      type: Array,
      default() {
        return [];
      }
    }
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
        if (typeof id != "undefined" && row.selected && this.rows[id]) {
          selected.push(this.rows[id]);
        }
      }
      return selected;
    }
  }
};
</script>