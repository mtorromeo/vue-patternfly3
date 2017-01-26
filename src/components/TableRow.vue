<template>
<tr role="row" :class="{
  selected: selectable && selected,
}">
  <td v-if="selectable" class="table-view-pf-select">
    <label>
      <span class="sr-only">Select row {{num}}</span>
      <input type="checkbox" v-model="selected">
    </label>
  </td>
  <slot></slot>
  <td v-if="$slots.action" class="table-view-pf-actions">
    <div class="table-view-pf-btn">
      <slot name="action"></slot>
    </div>
  </td>
  <td v-if="$slots.dropdown" class="table-view-pf-actions">
    <bs-dropdown class="pull-right">
      <slot name="dropdown"></slot>
    </bs-dropdown>
  </td>
</tr>
</template>

<script>
export default {
  name: 'pf-table-row',

  props: {
    num: Number,
    selectable: Boolean,
  },

  data() {
    return {
      selected: false,
    };
  },

  watch: {
    selected() {
      this.$emit('select', this.selected);
    },
  },
};
</script>
