<template>
<div class="list-group-item" :class="[stateClass]" :style="{cursor: expandable ? 'pointer' : 'inherit'}" @click="toggle">
  <div v-if="expandable && $slots.expansion" class="list-view-pf-expand" :class="{active: expanded}">
    <pf-icon name="fa-angle-right" :class="{'fa-angle-down': expanded}"/>
  </div>
  <div v-if="selectable" class="list-view-pf-checkbox">
    <label>
      <span class="sr-only">Select row {{num}}</span>
      <input type="checkbox" v-model="selected">
    </label>
  </div>
  <div class="list-view-pf-actions">
    <slot name="action"/>
    <pf-dropdown type="link" v-if="$slots.dropdown" class="dropdown pull-right dropdown-kebab-pf">
      <slot name="dropdown"/>
    </pf-dropdown>
  </div>
  <slot/>
  <div class="list-group-item-container container-fluid" v-show="showExpansion" @click.stop style="cursor: initial">
    <div class="close">
      <pf-icon name="pficon-close" @click="collapse"/>
    </div>
    <slot v-if="expanded" name="expansion"/>
    <portal-target v-if="expandedAdditional" :name="portal"/>
  </div>
</div>
</template>

<script>
import {PortalTarget} from 'portal-vue';
import TableRow from './TableRow.vue';
import PfDropdown from './Dropdown.vue';

export default {
  name: 'pf-list-group-item',
  extends: TableRow,

  components: {
    PortalTarget,
    PfDropdown,
  },

  props: {
    expandable: Boolean,
    index: {
      type: [String, Number],
    },
  },

  data() {
    return {
      expanded: false,
      expandedAdditional: null,
    };
  },

  computed: {
    portal() {
      return `pf-list-group-item-portal-${this._uid}`;
    },

    stateClass() {
      if (this.showExpansion) {
        return 'list-view-pf-expand-active';
      }
      if (this.selectable && this.selected) {
        return 'active';
      }
      return '';
    },

    showExpansion() {
      return (this.expandable && this.expanded) || this.expandedAdditional;
    },
  },

  methods: {
    collapse() {
      this.expanded = false;
      this.expandedAdditional = null;
    },

    toggle(e) {
      if (!this.expandable) {
        return;
      }

      if (e) {
        let target = e.target;
        while (target && target !== this.$el) {
          if (['A', 'BUTTON', 'INPUT', 'SELECT'].indexOf(target.tagName) >= 0) {
            return;
          }
          target = target.parentElement;
        }
      }

      if (this.expanded) {
        this.expanded = false;
      } else {
        this.expanded = true;
        this.expandedAdditional = null;
      }
    },
  },

  watch: {
    expanded() {
      this.$emit('expanded', this.expanded);
    },
  },
};
</script>
