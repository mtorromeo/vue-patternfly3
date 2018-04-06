<template>
<div class="list-group-item" :class="{active: selectable && selected}">
  <div v-if="selectable" class="list-view-pf-checkbox">
    <label>
      <span class="sr-only">Select row {{num}}</span>
      <input type="checkbox" v-model="selected">
    </label>
  </div>
  <div class="list-view-pf-actions">
    <slot name="action"></slot>
    <bs-dropdown type="link" v-if="$slots.dropdown" class="dropdown pull-right dropdown-kebab-pf">
      <slot name="dropdown"></slot>
    </bs-dropdown>
  </div>
  <div class="list-view-pf-main-info">
    <slot></slot>
  </div>
</div>
</template>

<script>
import TableRow from './TableRow.vue';

export default {
  name: 'pf-list-item',
  extends: TableRow,
};
</script>
