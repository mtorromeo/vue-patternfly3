<template>
  <component :is="tag" v-bind="ouiaProps" :class="{
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

<script>import { ouiaProps, useOUIAProps } from '../use';

export default {
  name: 'PfDropdown',

  props: {
    tag: {
      type: String,
      default: 'div',
    },
    modelValue: Boolean,
    dropup: {
      type: Boolean,
      default: false,
    },
    menuRight: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    notCloseElements: Array,
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
    ...ouiaProps,
  },

  emits: ['update:modelValue'],

  setup(props) {
    return useOUIAProps(props);
  },

  data() {
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

  watch: {
    modelValue(v) {
      this.toggle(v);
    },
  },

  mounted() {
    if (this.triggerEl) {
      this.triggerEl.addEventListener('click', this.toggle);
      this.triggerEl.addEventListener('keydown', this.onKeyPress);
    }
    this.$refs.dropdown.addEventListener('keydown', this.onKeyPress);
    window.addEventListener('click', this.windowClicked);
    window.addEventListener('touchend', this.windowClicked);
    if (this.modelValue) {
      this.toggle(true);
    }
  },

  beforeUnmount() {
    this.removeDropdownFromBody();
    if (this.triggerEl) {
      this.triggerEl.addEventListener('click', this.toggle);
      this.triggerEl.addEventListener('keydown', this.onKeyPress);
    }
    this.$refs.dropdown.addEventListener('keydown', this.onKeyPress);
    window.addEventListener('click', this.windowClicked);
    window.addEventListener('touchend', this.windowClicked);
  },

  methods: {
    onKeyPress(event) {
      if (this.show) {
        const dropdownEl = this.$refs.dropdown;
        const keyCode = event.keyCode || event.which;
        if (keyCode === 27) {
          this.toggle(false);
          this.triggerEl && this.triggerEl.focus();
        } else if (keyCode === 13) {
          const currentFocus = dropdownEl.querySelector('li > a:focus');
          currentFocus && currentFocus.click();
        } else if (keyCode === 38 || keyCode === 40) {
          event.preventDefault();
          event.stopPropagation();
          const currentFocus = dropdownEl.querySelector('li > a:focus');
          const items = dropdownEl.querySelectorAll('li:not(.disabled) > a');

          let focus = null;
          if (!currentFocus) {
            focus = items[0];
          } else {
            for (let i = 0; i < items.length; i++) {
              if (currentFocus === items[i]) {
                if (keyCode === 38 && i < items.length > 0) {
                  focus = items[i - 1];
                } else if (keyCode === 40 && i < items.length - 1) {
                  focus = items[i + 1];
                }
                break;
              }
            }
          }

          if (focus) {
            if (!focus.getAttribute('tabindex')) {
              focus.setAttribute('tabindex', '-1');
            }
            focus.focus();
          }
        }
      }
    },

    appendDropdownToBody() {
      try {
        this.$refs.dropdown.style.display = 'block';
        this.$refs.dropdown.style.position = 'absolute';
        this.appendTo.appendChild(this.$refs.dropdown);
        this.setDropdownPosition();
      } catch (e) {
        // Silent
      }
    },

    setDropdownPosition() {
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

    toggle(show) {
      if (this.disabled) {
        return;
      }
      if (typeof show === 'boolean') {
        this.show = show;
      } else {
        this.show = !this.show;
      }
      if (this.appendToBody) {
        this.show ? this.appendDropdownToBody() : this.removeDropdownFromBody();
      }
      this.$emit('update:modelValue', this.show);
    },

    windowClicked(event) {
      const target = event.target;
      if (this.show && target) {
        let targetInNotCloseElements = false;
        if (this.notCloseElements) {
          for (let i = 0, l = this.notCloseElements.length; i < l; i++) {
            const isTargetInElement = this.notCloseElements[i].contains(target);
            let shouldBreak = isTargetInElement;
            if (this.appendToBody) {
              const isTargetInDropdown = this.$refs.dropdown.contains(target);
              const isElInElements = this.notCloseElements.indexOf(this.$el) >= 0;
              shouldBreak = isTargetInElement || (isTargetInDropdown && isElInElements);
            }
            if (shouldBreak) {
              targetInNotCloseElements = true;
              break;
            }
          }
        }
        const targetInDropdownBody = this.$refs.dropdown.contains(target);
        const targetInTrigger = this.$el.contains(target) && !targetInDropdownBody;
        // normally, a dropdown select event is handled by @click that trigger after @touchend
        // then @touchend event have to be ignore in this case
        const targetInDropdownAndIsTouchEvent = targetInDropdownBody && event.type === 'touchend';
        if (!targetInTrigger && !targetInNotCloseElements && !targetInDropdownAndIsTouchEvent) {
          this.toggle(false);
        }
      }
    },

    removeDropdownFromBody() {
      try {
        const el = this.$refs.dropdown;
        el.removeAttribute('style');
        this.$el.appendChild(el);
      } catch (e) {
        // Silent
      }
    },
  },
};
</script>
