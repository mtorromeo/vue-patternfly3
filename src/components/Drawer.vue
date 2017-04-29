<template>
<div class="drawer-pf" :class="{
  'hide': hidden,
  'drawer-pf-expanded': expanded,
}">

  <slot name="title">
    <div v-if="title" class="drawer-pf-title">
      <a v-if="allowExpand" class="drawer-pf-toggle-expand" @click="expanded = !expanded"></a>
      <h3 class="text-center">{{title}}</h3>
    </div>
  </slot>

  <div>
    <div class="panel-group">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'pf-drawer',

  props: {
    hidden: {
      type: Boolean,
      default: true,
    },
    allowExpand: Boolean,
    title: String,
  },

  data: () => ({
    expanded: false,
  }),
};
</script>

<style>
.drawer-pf {
  top: 0;
  bottom: 0;
  z-index: 10;
}

.drawer-pf .panel-group {
  overflow-y: hidden;
}

.drawer-pf .panel-body {
  overflow-y: auto;
  max-height: 350px;
}
</style>
