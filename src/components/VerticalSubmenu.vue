<template>
  <li class="list-group-item" :class="{
      'secondary-nav-item-pf': !tertiary,
      'tertiary-nav-item-pf': tertiary,
      'is-hover': active,
      'mobile-nav-item-pf': active
    }" @mouseenter="delayOpen" @mouseleave="delayClose">
    <a @click="active = !active">
      <pf-icon v-if="icon" :name="icon" :title="title"/>
      <span class="list-group-item-value" v-html="title"></span>
    </a>

    <div :class="{
        'nav-pf-secondary-nav': !tertiary,
        'nav-pf-tertiary-nav': tertiary,
      }">
      <div class="nav-item-pf-header">
        <a :class="{
            'secondary-collapse-toggle-pf': !tertiary,
            'tertiary-collapse-toggle-pf': tertiary,
          }" @click="active = false"></a>
        <span v-html="title"></span>
      </div>
      <ul class="list-group">
        <slot/>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'pf-vertical-submenu',

  props: {
    title: String,
    icon: String,
  },

  data() {
    return {
      active: false,
      tertiary: false,
    };
  },

  mounted() {
    this.tertiary = this.$parent.$el.classList.contains('secondary-nav-item-pf');
  },

  methods: {
    delayOpen() {
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = false;
      }
      if (!this.active && !this.openTimeout) {
        this.openTimeout = setTimeout(() => {
          this.openTimeout = false;
          this.active = true;
        }, 500);
      }
    },

    delayClose() {
      if (this.openTimeout) {
        clearTimeout(this.openTimeout);
        this.openTimeout = false;
      }
      if (this.active && !this.closeTimeout) {
        this.closeTimeout = setTimeout(() => {
          this.closeTimeout = false;
          this.active = false;
        }, 1000);
      }
    },

    layout() {
      let parent = this.$parent;
      while (parent) {
        if (typeof parent.secondaryMenus != 'undefined') {
          return parent;
        }
        parent = parent.$parent;
      }
      return null;
    },
  },

  watch: {
    active() {
      const layout = this.layout();
      if (!layout) {
        return;
      }
      layout[this.tertiary ? 'tertiaryMenus' : 'secondaryMenus'] += this.active ? +1 : -1;
    },
  },
};
</script>
