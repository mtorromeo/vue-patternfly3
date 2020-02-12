<template>
  <div class="expand-collapse-pf">
    <div class="expand-collapse-pf-link-container">
      <span v-if="alignCenter" class="expand-collapse-pf-separator" :class="{bordered}"></span>
      <button type="button" class="btn btn-link" @click="toggle">
        <pf-icon :name="isExpanded ? 'fa-angle-down' : 'fa-angle-right'"/>
        <template v-if="isExpanded">{{textExpanded}}</template>
        <template v-else>{{textCollapsed}}</template>
      </button>
      <span class="expand-collapse-pf-separator" :class="{bordered}"></span>
    </div>
    <slot v-if="isExpanded"/>
  </div>
</template>

<script>
export default {
  name: 'pf-expand-collapse',

  model: {
    prop: 'expanded',
    event: 'update:expanded',
  },

  props: {
    alignCenter: Boolean,
    bordered: Boolean,
    textCollapsed: {
      type: String,
      default: 'Show Advanced Options',
    },
    textExpanded: {
      type: String,
      default: 'Hide Advanced Options',
    },
    expanded: {
      type: Boolean,
      default: null,
    },
  },

  data() {
    return {
      autoExpanded: this.expanded,
    };
  },

  computed: {
    isExpanded() {
      return this.expanded === null ? this.autoExpanded : this.expanded;
    },
  },

  methods: {
    expand() {
      this.autoExpanded = true;
    },
    collapse() {
      this.autoExpanded = false;
    },
    toggle() {
      this.autoExpanded = !this.isExpanded;
    },
  },

  watch: {
    expanded() {
      this.autoExpanded = this.expanded;
    },

    autoExpanded() {
      this.$emit('update:expanded', this.autoExpanded);
    },
  },
};
</script>

<style lang="scss">
/* https://raw.githubusercontent.com/patternfly/patternfly-react/master/packages/patternfly-3/patternfly-react/sass/patternfly-react/_expand-collapse.scss */
@import "~patternfly/dist/sass/patternfly/color-variables";

.expand-collapse-pf {
  .expand-collapse-pf-link-container {
    display: flex;
  }

  .btn.btn-link {
    &:focus {
      outline: none;
    }
    .fa,
    .pficon {
      color: initial;
      font-size: 14px;
      margin-right: 5px;
      width: 10px;
    }
  }

  .expand-collapse-pf-separator {
    flex: 1;
    height: 1px;
    margin-top: 12px;
    &.bordered {
      border-top: 1px solid $color-pf-black-300;
    }
  }
}
</style>
