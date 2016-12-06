<template>
<div>
  <nav class="navbar" :class="{
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
    </div>
  </nav>

  <div v-if="!horizontal" class="nav-pf-vertical nav-pf-vertical-with-sub-menus" :class="{
      collapsed: collapsed,
      'hidden-icons-pf': !icons,
    }">
    <ul class="list-group">
      <slot name="vertical-menu"></slot>
    </ul>
  </div>

  <div class="container-fluid" :class="{
      'collapsed-nav': collapsed,
      'container-pf-nav-pf-vertical': !horizontal,
      'hidden-icons-pf': !icons,
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

    collapsable: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      collapsed: false,
    };
  },

  watch: {
    horizontal: {
      handler() {
        const html = window.document.documentElement;
        html.classList.add('layout-pf');
        html.classList.add('transitions');
        if (this.horizontal) {
          html.classList.remove('layout-pf-fixed');
        } else {
          html.classList.add('layout-pf-fixed');
        }
      },
      immediate: true,
    },
  },
};
</script>
