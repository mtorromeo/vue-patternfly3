<template>
<div class="list-group-item" :class="[stateClass, {'list-view-pf-stacked': stacked}]" :style="{cursor: expandable ? 'pointer' : 'inherit'}" @click="toggle">
  <div v-if="expandable && withSlot.expansion" class="list-view-pf-expand" :class="{active: isExpanded}">
    <pf-icon name="fa-angle-right" :class="{'fa-angle-down': isExpanded}"/>
  </div>
  <div v-if="selectable" class="list-view-pf-checkbox">
    <label>
      <span class="sr-only">Select row {{index}}</span>
      <input type="checkbox" v-model="selected">
    </label>
  </div>
  <div class="list-view-pf-actions">
    <slot name="action"/>
    <pf-dropdown type="link" v-if="withSlot.dropdown" class="dropdown dropdown-kebab-pf" menu-right>
      <slot name="dropdown"/>
    </pf-dropdown>
  </div>
  <slot/>
  <div class="list-group-item-container container-fluid" v-show="showExpansion" @click.stop style="cursor: initial">
    <div class="close">
      <pf-icon name="pficon-close" @click="collapse"/>
    </div>
    <slot v-if="isExpanded" name="expansion"/>
    <portal-target v-if="expandedAdditional" :name="portal"/>
  </div>
</div>
</template>

<script>
import {PortalTarget} from 'portal-vue';
import TableRow from './TableRow.vue';
import PfDropdown from './Dropdown.vue';
import SlotMonitor from '../mixins/SlotMonitor';

export default {
  name: 'pf-list-group-item',
  extends: TableRow,

  mixins: [SlotMonitor],

  components: {
    PortalTarget,
    PfDropdown,
  },

  model: {
    prop: 'expanded',
    event: 'expanded',
  },

  props: {
    expanded: {
      type: Boolean,
      default: null,
    },
    expandable: Boolean,
    stacked: Boolean,
    index: {
      type: [String, Number],
    },
  },

  data() {
    return {
      autoExpanded: false,
      expandedAdditional: null,
    };
  },

  computed: {
    isExpanded: {
      get() {
        return typeof this.expanded === 'boolean' ? this.expanded : this.autoExpanded;
      },
      set(value) {
        if (typeof this.expanded !== 'boolean') {
          this.autoExpanded = value;
        }
        this.$emit('expanded', value);
      },
    },

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
      return (this.expandable && this.isExpanded) || this.expandedAdditional;
    },
  },

  methods: {
    collapse() {
      this.isExpanded = false;
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

      if (this.isExpanded) {
        this.isExpanded = false;
      } else {
        this.isExpanded = true;
        this.expandedAdditional = null;
      }
    },
  },
};
</script>
