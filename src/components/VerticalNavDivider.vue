<template>
  <li v-tooltip.right="tooltip" v-bind="ouiaProps" class="list-group-item vertical-header-pf">
    <span class="list-group-item-value">
      <slot>{{ title }}</slot>
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import Tooltip from '../directives/tooltip';
import { ouiaProps, useOUIAProps } from '../ouia';

export default defineComponent({
  name: 'PfVerticalNavDivider',

  directives: {
    Tooltip,
  },

  props: {
    title: String,
    ...ouiaProps,
  },

  setup(props) {
    return {
      layoutCollapsed: inject('layoutCollapsed', false),
      ...useOUIAProps(props),
    };
  },

  computed: {
    tooltip() {
      return this.layoutCollapsed ? this.title : null;
    },
  },
});
</script>

<style lang="scss">
@import "patternfly/dist/sass/patternfly/variables";

.nav-pf-vertical.collapsed > .list-group > .list-group-item.vertical-header-pf {
  height: calc($nav-pf-vertical-link-height / 4);
  width: $nav-pf-vertical-collapsed-width;
  padding: 0;

  > .list-group-item-value {
    display: none;
  }
}

.nav-pf-vertical > .list-group > .list-group-item.vertical-header-pf {
  background-color: $navbar-pf-vertical-bg-color;
  color: $nav-pf-vertical-active-color;
  display: block;
  font-size: $font-size-base;
  font-weight: $nav-pf-vertical-active-font-weight;
  height: $nav-pf-vertical-link-height;
  line-height: 26px;
  padding: 29px 20px 5px 25px;
  position: relative;
  white-space: nowrap;
  width: $nav-pf-vertical-width;

  // When flexbox is supported nav item names take up all available space
  @supports (display: flex) {
    display: flex;
    padding-right: 0;
  }

  .fa,
  .glyphicon,
  .pficon {
    float: left;
    font-size: ($font-size-base + 8);
    line-height: 26px;
    margin-right: 10px;
    text-align: center;
    width: $nav-pf-vertical-icon-width;
  }
}

/* https://github.com/patternfly/patternfly-react/raw/aa839a80a005f5d540faeb0e1a0320b7df1cc982/packages/patternfly-3/patternfly-react/sass/patternfly-react/_verticalnavdivider.scss */
.list-group-item .list-group-item.vertical-header-pf {
  line-height: 25px;
  font-size: $font-size-base;
  margin-left: 20px;
  padding: 20px 0 2px 5px;
  font-weight: bold;
  color: $nav-pf-vertical-secondary-color;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(#{$nav-pf-vertical-width} - 20px);

  > .list-group-item-value {
    padding: 0;
  }
}
</style>
