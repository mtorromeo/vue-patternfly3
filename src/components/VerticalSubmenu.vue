<template>
  <pf-menu-item vertical
                :title="title"
                :icon="icon"
                :class="{
                  'secondary-nav-item-pf': !tertiary,
                  'tertiary-nav-item-pf': tertiary,
                  'is-hover': active,
                  'mobile-nav-item-pf': active,
                }"
                @click="active = !active"
                @mouseenter="delayOpen"
                @mouseleave="delayClose"
  >
    <div :class="{
      'nav-pf-secondary-nav': !tertiary,
      'nav-pf-tertiary-nav': tertiary,
    }">
      <div class="nav-item-pf-header">
        <a :class="{
          'secondary-collapse-toggle-pf': !tertiary,
          'tertiary-collapse-toggle-pf': tertiary,
        }" @click="active = false" />
        <span v-html="title" />
      </div>
      <ul class="list-group">
        <slot />
      </ul>
    </div>
  </pf-menu-item>
</template>

<script>
export default {
  name: 'pf-vertical-submenu',

  props: {
    title: {
      type: String,
      required: true,
    },
    icon: String,
  },

  data() {
    return {
      active: false,
      tertiary: false,
    };
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
        if (typeof parent.secondaryMenus !== 'undefined') {
          return parent;
        }
        parent = parent.$parent;
      }
      return null;
    },
  },
};
</script>
