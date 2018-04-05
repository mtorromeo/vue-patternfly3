<template>
<div class="list-group-item">
    <div v-if="selectable" class="list-view-pf-checkbox">
      <span class="sr-only">Select row {{num}}</span>
      <input type="checkbox" v-model="selected">
    </div>
    <div class="list-view-pf-actions">
        <span v-if="$slots.action">
            <slot name="action"></slot>
        </span>
        <div v-if="$slots.dropdown" class="dropdown pull-right dropdown-kebab-pf">
            <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight9" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span class="fa fa-ellipsis-v"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight9">
                <slot name="dropdown"></slot>
            </ul>
        </div>
    </div>
    <div class="list-view-pf-main-info">
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "pf-list-item",

  props: {
    num: Number,
    selectable: Boolean
  },

  data() {
    return {
      selected: false
    };
  },

  watch: {
    selected() {
      this.$emit("select", this.selected);
    }
  }
};
</script>