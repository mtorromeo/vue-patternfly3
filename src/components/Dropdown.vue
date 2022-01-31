<template>
  <component
    :is="tag"
    v-bind="ouiaProps"
    :class="{
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

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';

export default defineComponent({
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
    notCloseElements: Array as PropType<Element[]>,
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

  data(this: void) {
    return {
      show: false,
    };
  },

  watch: {
    modelValue(v) {
      this.toggle(v);
    },
  },

  mounted() {
    if (this.$refs.trigger instanceof HTMLElement) {
      this.$refs.trigger.addEventListener('click', this.toggle);
      this.$refs.trigger.addEventListener('keydown', this.onKeyPress);
    }
    if (this.$refs.dropdown instanceof HTMLElement) {
      this.$refs.dropdown.addEventListener('keydown', this.onKeyPress);
    }
    window.addEventListener('click', this.windowClicked);
    window.addEventListener('touchend', this.windowClicked);
    if (this.modelValue) {
      this.toggle(true);
    }
  },

  beforeUnmount() {
    this.removeDropdownFromBody();
    if (this.$refs.trigger instanceof HTMLElement) {
      this.$refs.trigger.removeEventListener('click', this.toggle);
      this.$refs.trigger.removeEventListener('keydown', this.onKeyPress);
    }
    if (this.$refs.dropdown instanceof HTMLElement) {
      this.$refs.dropdown.removeEventListener('keydown', this.onKeyPress);
    }
    window.removeEventListener('click', this.windowClicked);
    window.removeEventListener('touchend', this.windowClicked);
  },

  methods: {
    onKeyPress(event: KeyboardEvent) {
      const dropdownEl = this.$refs.dropdown;
      if (!this.show || !(dropdownEl instanceof HTMLElement)) {
        return;
      }

      const keyCode = event.keyCode || event.which;
      if (keyCode === 27) {
        this.toggle(false);
        this.$refs.trigger instanceof HTMLElement && this.$refs.trigger.focus();
      } else if (keyCode === 13) {
        const currentFocus = dropdownEl.querySelector('li > a:focus');
        currentFocus instanceof HTMLAnchorElement && currentFocus.click();
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
              if (keyCode === 38 && i > 0 && i < items.length) {
                focus = items[i - 1];
              } else if (keyCode === 40 && i < items.length - 1) {
                focus = items[i + 1];
              }
              break;
            }
          }
        }

        if (focus instanceof HTMLElement) {
          if (!focus.getAttribute('tabindex')) {
            focus.setAttribute('tabindex', '-1');
          }
          focus.focus();
        }
      }
    },

    appendDropdownToBody() {
      if (!(this.$refs.dropdown instanceof HTMLElement) || !this.appendTo) {
        return;
      }

      this.$refs.dropdown.style.display = 'block';
      this.$refs.dropdown.style.position = 'absolute';
      this.appendTo.appendChild(this.$refs.dropdown);
      this.setDropdownPosition();
    },

    setDropdownPosition() {
      if (!(this.$refs.dropdown instanceof HTMLElement) || !(this.$refs.trigger instanceof Element) || !this.appendTo) {
        return;
      }

      const rP = this.appendTo.offsetParent.getBoundingClientRect();
      const rT = this.$refs.trigger.getBoundingClientRect();
      let rD: DOMRect;
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

    toggle(show?: boolean | Event) {
      if (this.disabled) {
        return;
      }
      if (typeof show === 'boolean') {
        this.show = show;
      } else {
        this.show = !this.show;
      }
      if (this.appendTo) {
        this.show ? this.appendDropdownToBody() : this.removeDropdownFromBody();
      }
      this.$emit('update:modelValue', this.show);
    },

    windowClicked(event: MouseEvent | TouchEvent) {
      const target = event.target;
      if (!this.show || !(target instanceof Element) || !(this.$refs.dropdown instanceof HTMLElement) || !this.$el) {
        return;
      }

      let targetInNotCloseElements = false;
      if (this.notCloseElements) {
        for (let i = 0, l = this.notCloseElements.length; i < l; i++) {
          const isTargetInElement = this.notCloseElements[i].contains(target);
          let shouldBreak = isTargetInElement;
          if (this.appendTo) {
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
    },

    removeDropdownFromBody() {
      if (!(this.$refs.dropdown instanceof HTMLElement) || !this.$el) {
        return;
      }

      this.$refs.dropdown.removeAttribute('style');
      this.$el.appendChild(this.$refs.dropdown);
    },
  },
});
</script>
