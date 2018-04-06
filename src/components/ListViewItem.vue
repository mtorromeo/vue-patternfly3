<template>
<div class="list-group-item">
  <div v-if="selectable" class="list-view-pf-checkbox">
    <span class="sr-only">Select row {{num}}</span>
    <input type="checkbox" v-model="selected">
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
export default {
  name: 'pf-list-item',

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
