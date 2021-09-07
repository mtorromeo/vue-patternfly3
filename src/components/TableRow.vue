<template>
  <tr role="row" :class="{selected: selectable && selected}">
    <td v-if="selectable" class="table-view-pf-select">
      <label>
        <span class="sr-only">Select row {{ num }}</span>
        <input v-model="selected" type="checkbox">
      </label>
    </td>
    <slot />
    <td v-if="$slots.action" class="table-view-pf-actions">
      <div class="table-view-pf-btn">
        <slot name="action" />
      </div>
    </td>
    <td v-if="$slots.dropdown" class="table-view-pf-actions">
      <pf-dropdown menu-right>
        <slot name="dropdown" />
      </pf-dropdown>
    </td>
  </tr>
</template>

<script>
import PfDropdown from './Dropdown.vue';

export default {
  name: 'pf-table-row',

  components: {
    PfDropdown,
  },

  props: {
    num: Number,
    selectable: Boolean,
  },

  emits: ['select'],

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
