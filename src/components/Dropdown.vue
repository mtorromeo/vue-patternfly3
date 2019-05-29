<template>
  <component :is="tag" :class="{
    'btn-group': tag === 'div',
    dropdown: !dropup,
    dropup: dropup,
    open: show,
  }"
  >
    <button ref="trigger" role="button" aria-haspopup="true" type="button" class="btn dropdown-toggle" :class="[type ? `btn-${type}` : '', btnClass]">
      <slot name="text">
        <span class="dropdown-title">{{ text }}</span>
      </slot> <span v-show="!noCaret" class="caret" />
    </button>

    <ul ref="dropdown" :class="{'dropdown-menu-right': menuRight}" class="dropdown-menu">
      <slot />
    </ul>
  </component>
</template>

<script>
import {Dropdown} from 'uiv';

// eslint-disable-next-line no-unused-vars
const {appendToBody, positionElement, ...props} = Dropdown.props;

export default {
  name: 'pf-dropdown',

  props: {
    ...props,
    text: {
      type: String,
      default: '',
    },
    appendTo: {
      type: HTMLElement,
      default: null,
    },
    type: {
      type: String,
      default: 'default',
    },
    btnClass: {
      type: String,
      default: '',
    },
    noCaret: Boolean,
  },

  data () {
    return {
      show: false,
    };
  },

  computed: {
    triggerEl() {
      return this.$refs.trigger;
    },

    appendToBody() {
      return Boolean(this.appendTo);
    },
  },

  watch: Dropdown.watch,

  mounted: Dropdown.mounted,

  beforeDestroy: Dropdown.beforeDestroy,

  methods: {
    ...Dropdown.methods,

    initTrigger() {
      return;
    },

    appendDropdownToBody () {
      try {
        this.$refs.dropdown.style.display = 'block';
        this.$refs.dropdown.style.position = 'absolute';
        this.appendTo.appendChild(this.$refs.dropdown);
        this.setDropdownPosition();
      } catch (e) {
        // Silent
      }
    },

    setDropdownPosition () {
      const rP = this.appendTo.offsetParent.getBoundingClientRect();
      const rT = this.$refs.trigger.getBoundingClientRect();
      let rD = {};
      if (this.menuRight || this.dropup) {
        rD = this.$refs.dropdown.getBoundingClientRect();
      }

      let top = rT.top - rP.top;
      let left = rT.left - rP.left;

      if (this.menuRight) {
        left -= rD.width - rT.width;
      }

      if (this.dropup) {
        top -= rD.height;
      } else {
        top += rT.height;
      }

      this.$refs.dropdown.style.top = `${top}px`;
      this.$refs.dropdown.style.bottom = 'auto';
      this.$refs.dropdown.style.left = `${left}px`;
      this.$refs.dropdown.style.right = 'auto';
    },
  },
};
</script>
