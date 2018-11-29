<template>
  <div class="list-view-pf-additional-info-item" :class="{'list-view-pf-additional-info-item-stacked': stacked}" @click="toggle">
    <component :is="expandable && hasExpansionSlot ? 'div' : null" :class="{'list-view-pf-expand': expandable && hasExpansionSlot, 'active': expandable && expanded}">
      <pf-icon name="fa-angle-right" :class="{'fa-angle-down': expanded}" v-if="expandable && hasExpansionSlot"/>
      <slot/>
    </component>
    <portal :to="portal" v-if="expandable">
      <slot name="expansion"></slot>
    </portal>
  </div>
</template>

<script>
import {Portal} from 'portal-vue';

export default {
  name: 'pf-list-item-additional-info',

  components: {
    Portal,
  },

  props: {
    stacked: Boolean,
    expandable: Boolean,
  },

  data() {
    return {
      hasExpansionSlot: Boolean(this.$slots.expansion),
    };
  },

  updated() {
    this.hasExpansionSlot = Boolean(this.$slots.expansion);
  },

  computed: {
    groupItem() {
      let parent = this.$parent;
      while (parent && parent !== this.$root) {
        if (parent.$vnode.componentOptions.tag == 'pf-list-group-item') {
          return parent;
        }
        parent = parent.$parent;
      }
      return null;
    },

    portal() {
      return this.expanded ? this.groupItem.portal : '';
    },

    expanded() {
      return this.groupItem && this.groupItem.expandedAdditional == this._uid;
    },
  },

  methods: {
    toggle(e) {
      if (this.expandable && this.groupItem) {
        if (e) {
          e.stopPropagation();
        }
        this.groupItem.expanded = false;
        this.groupItem.expandedAdditional = this.expanded ? null : this._uid;
      }
    },
  },
};
</script>
