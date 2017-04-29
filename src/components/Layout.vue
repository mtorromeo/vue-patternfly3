<template>
<div :class="{
  'pf-layout-flex': flex,
}">
  <nav v-if="!disabled" class="navbar" :class="{
      'navbar-pf': horizontal,
      'navbar-pf-vertical': !horizontal,
    }" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" v-if="collapsable" @click="collapsed = !collapsed">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <slot name="brand"></slot>
    </div>

    <div class="collapse navbar-collapse navbar-collapse-1">
      <ul v-if="horizontal" class="nav navbar-nav navbar-primary">
        <slot name="horizontal-menu"></slot>
      </ul>

      <ul class="nav navbar-nav" :class="{
        'navbar-utility': horizontal,
        'navbar-right': !horizontal,
      }">
        <slot name="utility-menu"></slot>
      </ul>
    </div>
  </nav>

  <div v-if="!disabled && !horizontal" class="nav-pf-vertical nav-pf-vertical-with-sub-menus" :class="{
      collapsed: collapsed,
      'hidden-icons-pf': !icons,
    }">
    <ul class="list-group">
      <slot name="vertical-menu"></slot>
    </ul>
  </div>

  <div class="pf-layout-container" :class="{
      'container-flex': !disabled && flex,
      'container-fluid': !disabled && !nomargin,
      'collapsed-nav': !disabled && collapsed,
      'container-pf-nav-pf-vertical': !disabled && !horizontal,
      'hidden-icons-pf': !disabled && !icons,
    }">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'pf-layout',

  props: {
    icons: {
      type: Boolean,
      default: false,
    },

    horizontal: {
      type: Boolean,
      default: false,
    },

    flex: {
      type: Boolean,
      default: false,
    },

    collapsable: {
      type: Boolean,
      default: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    nomargin: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      collapsed: false,
    };
  },

  methods: {
    updateHtmlClasses() {
      const html = window.document.documentElement;
      html.classList.add('transitions');
      if (this.disabled) {
        html.classList.remove('layout-pf');
        html.classList.remove('layout-pf-fixed');
      } else {
        html.classList.add('layout-pf');
        if (this.horizontal) {
          html.classList.remove('layout-pf-fixed');
        } else {
          html.classList.add('layout-pf-fixed');
        }
      }
    },
  },

  watch: {
    horizontal: {
      handler() {
        this.updateHtmlClasses();
      },
      immediate: true,
    },

    disabled() {
      this.updateHtmlClasses();
    },
  },
};
</script>

<style>
.pf-layout-container {
  position: relative;
}

nav.navbar-pf > .collapse .navbar-right:last-child,
nav.navbar-pf-vertical > .collapse .navbar-right:last-child {
  margin-right: 0;
}

.pf-layout-flex,
.container-flex {
  display: flex;
  flex-direction: column;
}

.pf-layout-flex {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.pf-layout-flex > .navbar {
  flex-shrink: 0;
  position: relative;
}

.pf-layout-flex > .container-flex {
  overflow: auto;
  margin-left: 0;
  margin-right: 0;
  flex-grow: 1;
}

.navbar-brand-txt {
  line-height: 34px;
}
</style>
