<template>
  <div v-bind="ouiaProps" class="list-view-pf-additional-info-item" :class="{'list-view-pf-additional-info-item-stacked': stacked}" @click="toggle">
    <div v-if="expandable && $slots.expansion" class="list-view-pf-expand" :class="{'active': expanded}">
      <pf-icon name="fa-angle-right" :class="{'fa-angle-down': expanded}" />
      <slot />
    </div>
    <slot v-else />
    <teleport v-if="expandable && expanded" :disabled="!listGroupItemAdditionalPortal" :to="listGroupItemAdditionalPortal">
      <slot name="expansion" />
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, RendererElement } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';

export default defineComponent({
  name: 'PfListItemAdditionalInfo',

  props: {
    stacked: Boolean,
    expandable: Boolean,
    ...ouiaProps,
  },

  setup(props) {
    return {
      listGroupItemExpanded: inject('listGroupItemExpanded', false),
      listGroupItemExpandedAdditional: inject<number>('listGroupItemExpandedAdditional', null),
      listGroupItemAdditionalPortal: inject<string | RendererElement>('listGroupItemAdditionalPortal', null),
      ...useOUIAProps(props),
    };
  },

  computed: {
    expanded() {
      return this.listGroupItemExpandedAdditional === this.$.uid;
    },
  },

  methods: {
    toggle(e: MouseEvent | TouchEvent) {
      if (!this.expandable) {
        return;
      }
      if (e) {
        e.stopPropagation();
      }
      this.listGroupItemExpanded = false;
      this.listGroupItemExpandedAdditional = this.expanded ? null : this.$.uid;
    },
  },
});
</script>
