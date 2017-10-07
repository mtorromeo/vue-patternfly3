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
        'navbar-iconic': !horizontal,
      }">
        <slot name="utility-menu"></slot>
      </ul>
    </div>
  </nav>

  <div v-if="!disabled && !horizontal" class="nav-pf-vertical nav-pf-vertical-with-sub-menus" :class="{
      collapsed: collapsed,
      hidden: mobile,
      'hidden-icons-pf': !icons,
      'show-mobile-nav': mobile && !collapsed,
      'secondary-visible-pf': secondaryMenus && !tertiaryMenus && !tablet,
      'show-mobile-secondary': secondaryMenus && !tertiaryMenus && mobile,
      'hover-secondary-nav-pf': secondaryMenus && !tertiaryMenus,
      'tertiary-visible-pf': tertiaryMenus && !tablet,
      'show-mobile-tertiary': tertiaryMenus && mobile,
      'hover-tertiary-nav-pf': tertiaryMenus,
    }">
    <ul class="list-group">
      <slot name="vertical-menu"></slot>
    </ul>
  </div>

  <div class="pf-layout-container" :class="{
      'hidden-nav': mobile,
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
      secondaryMenus: 0,
      tertiaryMenus: 0,
      width: 1200,
    };
  },

  mounted() {
    window.addEventListener('resize', this.resize);
    this.resize();
  },

  destroyed() {
    window.removeEventListener('resize', this.resize);
  },

  computed: {
    desktop() {
      return this.width >= 1200;
    },

    tablet() {
      return 1200 > this.width >= 768;
    },

    mobile() {
      return this.width < 768;
    },
  },

  methods: {
    resize() {
      const html = document.documentElement;
      this.width = html.offsetWidth;
    },

    updateHtmlClasses() {
      const html = document.documentElement;
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

    desktop() {
      if (!this.desktop) {
        this.collapsed = true;
      }
    },

    mobile() {
      if (this.mobile) {
        this.collapsed = true;
      }
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

.navbar-pf-vertical .navbar-brand-name {
  font-size: 18px;
  line-height: 35px;
}

.navbar-pf .navbar-brand-name {
  padding: 7px 0;
}

@media (min-width: 768px) {
  .navbar-pf .navbar-brand-name {
    padding: 3px 0;
  }
}
</style>
