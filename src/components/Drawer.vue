<template>
<div class="drawer-pf" :class="{
  'hide': hidden,
  'drawer-pf-expanded': allowExpand && expanded,
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
  position: fixed;
  height: 100%;
  overflow-x: hidden;
  z-index: 10;
}

.drawer-pf .panel-group {
  overflow-y: auto;
}

.drawer-pf .panel-body {
  overflow-y: auto;
  max-height: 350px;
}
</style>
