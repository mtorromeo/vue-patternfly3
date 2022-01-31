<template>
  <tr v-bind="ouiaProps" role="row" :class="{selected: selectable && selected}">
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

<script lang="ts">
import { defineComponent } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import PfDropdown from './Dropdown.vue';

export default defineComponent({
  name: 'PfTableRow',

  components: {
    PfDropdown,
  },

  props: {
    num: Number,
    selectable: Boolean,
    ...ouiaProps,
  },

  emits: ['select'],

  setup(props) {
    return useOUIAProps(props);
  },

  data(this: void) {
    return {
      selected: false,
    };
  },

  watch: {
    selected() {
      this.$emit('select', this.selected);
    },
  },
});
</script>
