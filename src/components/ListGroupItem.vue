<template>
  <div v-bind="ouiaProps" class="list-group-item" :class="[stateClass, {'list-view-pf-stacked': stacked}]" :style="{cursor: expandable ? 'pointer' : 'inherit'}" @click="toggle">
    <div v-if="expandable && $slots.expansion" class="list-view-pf-expand" :class="{active: isExpanded}">
      <pf-icon name="fa-angle-right" :class="{'fa-angle-down': isExpanded}" />
    </div>
    <div v-if="selectable" class="list-view-pf-checkbox">
      <label>
        <span class="sr-only">Select row {{ index }}</span>
        <input v-model="selected" type="checkbox">
      </label>
    </div>
    <div class="list-view-pf-actions">
      <slot name="action" />
      <pf-dropdown v-if="$slots.dropdown" type="link" class="dropdown dropdown-kebab-pf" menu-right>
        <slot name="dropdown" />
      </pf-dropdown>
    </div>
    <slot />
    <div v-show="showExpansion" class="list-group-item-container container-fluid" style="cursor: initial" @click.stop>
      <div class="close">
        <pf-icon name="pficon-close" @click="collapse" />
      </div>
      <slot v-if="isExpanded" name="expansion" />

      <div v-if="expandedAdditional" ref="additionalRef" />
    </div>
  </div>
</template>

<script>
import { provide, computed, ref } from 'vue';
import TableRow from './TableRow.vue';
import PfDropdown from './Dropdown.vue';
import { ouiaProps, useOUIAProps } from '../use';

export default {
  name: 'PfListGroupItem',

  components: {
    PfDropdown,
  },
  extends: TableRow,

  props: {
    expanded: {
      type: Boolean,
      default: null,
    },
    expandable: Boolean,
    selectable: Boolean,
    stacked: Boolean,
    index: {
      type: [String, Number],
    },
    ...ouiaProps,
  },

  emits: ['update:expanded', 'expanded'],

  setup(props, { emit }) {
    const autoExpanded = ref(false);
    const isExpanded = computed({
      get() {
        return typeof props.expanded === 'boolean' ? props.expanded : autoExpanded.value;
      },
      set(value) {
        if (typeof props.expanded !== 'boolean') {
          autoExpanded.value = value;
        }
        emit('expanded', value);
        emit('update:expanded', value);
      },
    });
    provide('listGroupItemExpanded', isExpanded);

    const expandedAdditional = ref(null);
    provide('listGroupItemExpandedAdditional', expandedAdditional);

    const additionalRef = ref(null);
    provide('listGroupItemAdditionalPortal', additionalRef);

    return {
      isExpanded,
      expandedAdditional,
      autoExpanded,
      additionalRef,
      ...useOUIAProps(props),
    };
  },

  computed: {
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
