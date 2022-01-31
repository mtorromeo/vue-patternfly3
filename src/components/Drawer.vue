<template>
  <div
    v-bind="ouiaProps"
    class="drawer-pf"
    :class="{
      'hide': hidden,
      'drawer-pf-expanded': allowExpand && expanded,
    }"
  >
    <slot name="title">
      <div v-if="title" class="drawer-pf-title">
        <a v-if="allowExpand" class="drawer-pf-toggle-expand" @click="expanded = !expanded" />
        <a class="drawer-pf-close" @click="close">
          <pf-icon name="fa-close" />
        </a>
        <h3 class="text-center">{{ title }}</h3>
      </div>
    </slot>

    <div>
      <div class="panel-group">
        <slot />
      </div>
    </div>

    <div ref="dropdowns" class="dropdown-kebab-pf" />
  </div>
</template>

<script lang="ts">
import { ref, provide, defineComponent } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';

export default defineComponent({
  name: 'PfDrawer',

  props: {
    hidden: {
      type: Boolean,
      default: true,
    },
    allowExpand: Boolean,
    title: String,
    ...ouiaProps,
  },

  emits: ['update:hidden'],

  setup(props) {
    const activeGroup = ref(null);
    provide('activeGroup', activeGroup);

    const expanded = ref(false);
    provide('drawerExpanded', expanded);

    const dropdowns = ref(null);
    provide('drawerDropdowns', dropdowns);

    return {
      dropdowns,
      expanded,
      ...useOUIAProps(props),
    };
  },

  methods: {
    close() {
      this.$emit('update:hidden', true);
    },
  },
});
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
