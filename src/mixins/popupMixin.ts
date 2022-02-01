import { DefineComponent, defineComponent, PropType, ref } from 'vue';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export type TooltipTrigger = 'hover' | 'focus' | 'click' | 'hover-focus' | 'outside-click';

export function getViewportSize() {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return {
    width,
    height,
  };
}

export function isAvailableAtPosition(trigger: HTMLElement, popup: HTMLElement, placement: TooltipPlacement) {
  const triggerRect = trigger.getBoundingClientRect();
  const popupRect = popup.getBoundingClientRect();
  const viewPortSize = getViewportSize();
  let top = true;
  let right = true;
  let bottom = true;
  let left = true;
  switch (placement) {
    case 'top':
      top = triggerRect.top >= popupRect.height;
      left = triggerRect.left + triggerRect.width / 2 >= popupRect.width / 2;
      right = triggerRect.right - triggerRect.width / 2 + popupRect.width / 2 <= viewPortSize.width;
      break;
    case 'bottom':
      bottom = triggerRect.bottom + popupRect.height <= viewPortSize.height;
      left = triggerRect.left + triggerRect.width / 2 >= popupRect.width / 2;
      right = triggerRect.right - triggerRect.width / 2 + popupRect.width / 2 <= viewPortSize.width;
      break;
    case 'right':
      right = triggerRect.right + popupRect.width <= viewPortSize.width;
      top = triggerRect.top + triggerRect.height / 2 >= popupRect.height / 2;
      bottom = triggerRect.bottom - triggerRect.height / 2 + popupRect.height / 2 <= viewPortSize.height;
      break;
    case 'left':
      left = triggerRect.left >= popupRect.width;
      top = triggerRect.top + triggerRect.height / 2 >= popupRect.height / 2;
      bottom = triggerRect.bottom - triggerRect.height / 2 + popupRect.height / 2 <= viewPortSize.height;
      break;
  }
  return top && right && bottom && left;
}

export function setTooltipPosition(tooltip: HTMLElement, trigger: HTMLElement, placement: TooltipPlacement, auto: boolean, appendToSelector: string | null, viewport: string | ((trigger: HTMLElement) => Element)) {
  const isPopover = tooltip && tooltip.className && tooltip.className.indexOf('popover') >= 0;
  let containerScrollTop;
  let containerScrollLeft;
  if (!appendToSelector || appendToSelector === 'body') {
    const doc = document.documentElement;
    containerScrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    containerScrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  } else {
    const container = document.querySelector(appendToSelector);
    containerScrollLeft = container.scrollLeft;
    containerScrollTop = container.scrollTop;
  }
  // auto adjust placement
  if (auto) {
    // Try: right -> bottom -> left -> top
    // Cause the default placement is top
    const placements: TooltipPlacement[] = ['right', 'bottom', 'left', 'top'];
    // The class switch helper function
    const changePlacementClass = (placement: TooltipPlacement) => {
      // console.log(placement)
      placements.forEach(placement => {
        tooltip.classList.remove(placement);
      });
      tooltip.classList.add(placement);
    };
    // No need to adjust if the default placement fits
    if (!isAvailableAtPosition(trigger, tooltip, placement)) {
      for (let i = 0, l = placements.length; i < l; i++) {
        // Re-assign placement class
        changePlacementClass(placements[i]);
        // Break if new placement fits
        if (isAvailableAtPosition(trigger, tooltip, placements[i])) {
          placement = placements[i];
          break;
        }
      }
      changePlacementClass(placement);
    }
  }
  // fix left and top for tooltip
  const rect = trigger.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  let top;
  let left;
  if (placement === 'bottom') {
    top = containerScrollTop + rect.top + rect.height;
    left = containerScrollLeft + rect.left + rect.width / 2 - tooltipRect.width / 2;
  } else if (placement === 'left') {
    top = containerScrollTop + rect.top + rect.height / 2 - tooltipRect.height / 2;
    left = containerScrollLeft + rect.left - tooltipRect.width;
  } else if (placement === 'right') {
    top = containerScrollTop + rect.top + rect.height / 2 - tooltipRect.height / 2;
    // https://github.com/wxsms/uiv/issues/272
    // add 1px to fix above issue
    left = containerScrollLeft + rect.left + rect.width + 1;
  } else {
    top = containerScrollTop + rect.top - tooltipRect.height;
    left = containerScrollLeft + rect.left + rect.width / 2 - tooltipRect.width / 2;
  }
  let viewportEl;
  // viewport option
  if (typeof viewport === 'string') {
    viewportEl = document.querySelector(viewport);
  } else if (typeof viewport === 'function') {
    viewportEl = viewport(trigger);
  }
  if (viewportEl instanceof Element) {
    const popoverFix = isPopover ? 11 : 0;
    const viewportReact = viewportEl.getBoundingClientRect();
    const viewportTop = containerScrollTop + viewportReact.top;
    const viewportLeft = containerScrollLeft + viewportReact.left;
    const viewportBottom = viewportTop + viewportReact.height;
    const viewportRight = viewportLeft + viewportReact.width;
    // fix top
    if (top < viewportTop) {
      top = viewportTop;
    } else if (top + tooltipRect.height > viewportBottom) {
      top = viewportBottom - tooltipRect.height;
    }
    // fix left
    if (left < viewportLeft) {
      left = viewportLeft;
    } else if (left + tooltipRect.width > viewportRight) {
      left = viewportRight - tooltipRect.width;
    }
    // fix for popover pointer
    if (placement === 'bottom') {
      top -= popoverFix;
    } else if (placement === 'left') {
      left += popoverFix;
    } else if (placement === 'right') {
      left -= popoverFix;
    } else {
      top += popoverFix;
    }
  }
  // set position finally
  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;
}

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'span',
    },
    trigger: {
      type: String as PropType<TooltipTrigger>,
      default: 'hover-focus',
    },
    placement: {
      type: String as PropType<TooltipPlacement>,
      default: 'top',
    },
    autoPlacement: {
      type: Boolean,
      default: true,
    },
    appendTo: {
      type: String,
      default: 'body',
    },
    transitionDuration: {
      type: Number,
      default: 150,
    },
    hideDelay: {
      type: Number,
      default: 0,
    },
    showDelay: {
      type: Number,
      default: 0,
    },
    enable: {
      type: Boolean,
      default: true,
    },
    enterable: {
      type: Boolean,
      default: true,
    },
    target: {
      type: [Object, String] as PropType<string | HTMLElement | DefineComponent>,
      default: null,
    },
    viewport: {
      type: [Function, String] as PropType<string | ((trigger: HTMLElement) => Element)>,
      default: null,
    },
    customClass: String,
  },

  emits: {
    'update:modelValue': (value: boolean) => value !== undefined,
    input: (value: boolean) => value !== undefined,
    show: () => true,
    hide: () => true,
  },

  setup() {
    const triggerEl: HTMLElement = ref(null);
    return {
      triggerEl,
    };
  },

  data(this: void) {
    return {
      name: '',
      hideTimeoutId: 0,
      showTimeoutId: 0,
      transitionTimeoutId: 0,
      autoTimeoutId: 0,
    };
  },

  watch: {
    modelValue(v) {
      v ? this.show() : this.hide();
    },

    trigger() {
      this.clearListeners();
      this.initListeners();
    },

    target(value) {
      this.clearListeners();
      this.initTriggerElByTarget(value);
      this.initListeners();
    },

    allContent() {
      // can not use value because it can not detect slot changes
      if (this.isNotEmpty()) {
        // reset position while content changed & is shown
        // nextTick is required
        this.$nextTick(() => {
          if (this.isShown()) {
            this.resetPosition();
          }
        });
      } else {
        this.hide();
      }
    },

    enable(value) {
      // hide if enable changed to false
      if (!value) {
        this.hide();
      }
    },
  },

  mounted() {
    if (this.$refs.popup instanceof HTMLElement && this.$refs.popup.parentNode) {
      this.$refs.popup.parentNode.removeChild(this.$refs.popup);
    }
    this.$nextTick(() => {
      this.initTriggerElByTarget(this.target);
      this.initListeners();
      if (this.modelValue) {
        this.show();
      }
    });
  },

  beforeUnmount() {
    this.clearListeners();
    if (this.$refs.popup instanceof HTMLElement && this.$refs.popup.parentNode) {
      this.$refs.popup.parentNode.removeChild(this.$refs.popup);
    }
  },

  methods: {
    isNotEmpty() {
      return false;
    },

    initTriggerElByTarget(target: string | HTMLElement | DefineComponent) {
      if (target) {
        // target exist
        if (typeof target === 'string') { // is selector
          this.triggerEl = document.querySelector(target) as HTMLElement;
        } else if (target instanceof HTMLElement) { // is element
          this.triggerEl = target;
        } else if (target.$el instanceof HTMLElement) { // is component
          this.triggerEl = target.$el;
        }
      } else {
        // find special element
        const trigger = this.$el.querySelector('[data-role="trigger"]');
        if (trigger) {
          this.triggerEl = trigger;
        } else {
          // use the first child
          const firstChild = this.$el.firstChild;
          this.triggerEl = firstChild === this.$refs.popup ? null : firstChild;
        }
      }
    },

    initListeners() {
      if (this.triggerEl) {
        if (this.trigger === 'hover') {
          this.triggerEl.addEventListener('mouseenter', this.show);
          this.triggerEl.addEventListener('mouseleave', this.hide);
        } else if (this.trigger === 'focus') {
          this.triggerEl.addEventListener('focus', this.show);
          this.triggerEl.addEventListener('blur', this.hide);
        } else if (this.trigger === 'hover-focus') {
          this.triggerEl.addEventListener('mouseenter', this.handleAuto);
          this.triggerEl.addEventListener('mouseleave', this.handleAuto);
          this.triggerEl.addEventListener('focus', this.handleAuto);
          this.triggerEl.addEventListener('blur', this.handleAuto);
        } else if (this.trigger === 'click' || this.trigger === 'outside-click') {
          this.triggerEl.addEventListener('click', this.toggle);
        }
      }
      window.addEventListener('click', this.windowClicked);
    },

    clearListeners() {
      if (this.triggerEl) {
        this.triggerEl.removeEventListener('focus', this.show);
        this.triggerEl.removeEventListener('blur', this.hide);
        this.triggerEl.removeEventListener('mouseenter', this.show);
        this.triggerEl.removeEventListener('mouseleave', this.hide);
        this.triggerEl.removeEventListener('click', this.toggle);
        this.triggerEl.removeEventListener('mouseenter', this.handleAuto);
        this.triggerEl.removeEventListener('mouseleave', this.handleAuto);
        this.triggerEl.removeEventListener('focus', this.handleAuto);
        this.triggerEl.removeEventListener('blur', this.handleAuto);
      }
      window.removeEventListener('click', this.windowClicked);
      this.clearTimeouts();
    },

    clearTimeouts() {
      if (this.hideTimeoutId) {
        clearTimeout(this.hideTimeoutId);
        this.hideTimeoutId = 0;
      }
      if (this.showTimeoutId) {
        clearTimeout(this.showTimeoutId);
        this.showTimeoutId = 0;
      }
      if (this.transitionTimeoutId) {
        clearTimeout(this.transitionTimeoutId);
        this.transitionTimeoutId = 0;
      }
      if (this.autoTimeoutId) {
        clearTimeout(this.autoTimeoutId);
        this.autoTimeoutId = 0;
      }
    },

    resetPosition() {
      const popup = this.$refs.popup;
      if (!(popup instanceof HTMLElement) || !this.triggerEl) {
        return;
      }
      setTooltipPosition(popup, this.triggerEl, this.placement, this.autoPlacement, this.appendTo, this.viewport);
    },

    hideOnLeave() {
      if (this.trigger === 'hover' || (this.trigger === 'hover-focus' && !this.triggerEl.matches(':focus'))) {
        this.$hide();
      }
    },

    toggle() {
      if (this.isShown()) {
        this.hide();
      } else {
        this.show();
      }
    },

    show() {
      if (this.enable && this.triggerEl && this.isNotEmpty() && !this.isShown()) {
        const popUpAppendedContainer = this.hideTimeoutId > 0; // weird condition
        if (popUpAppendedContainer) {
          clearTimeout(this.hideTimeoutId);
          this.hideTimeoutId = 0;
        }
        if (this.transitionTimeoutId > 0) {
          clearTimeout(this.transitionTimeoutId);
          this.transitionTimeoutId = 0;
        }
        clearTimeout(this.showTimeoutId);
        this.showTimeoutId = setTimeout(() => {
          this.showTimeoutId = 0;
          const popup = this.$refs.popup;
          if (popup instanceof HTMLElement) {
            const alreadyOpenModalNum = document.querySelectorAll('.modal-backdrop').length;
            if (alreadyOpenModalNum > 1) {
              const defaultZ = this.name === 'popover' ? 1060 : 1070;
              const offset = (alreadyOpenModalNum - 1) * 20;
              popup.style.zIndex = `${defaultZ + offset}`;
            }
            // add to dom
            if (!popUpAppendedContainer) {
              popup.className = `${this.name} ${this.placement} ${this.customClass ? this.customClass : ''} fade`;
              const container = document.querySelector(this.appendTo);
              container.appendChild(popup);
              this.resetPosition();
            }
            popup.classList.add('in');
            this.$emit('update:modelValue', true);
            this.$emit('input', true);
            this.$emit('show');
          }
        }, this.showDelay);
      }
    },

    hide() {
      if (this.showTimeoutId > 0) {
        clearTimeout(this.showTimeoutId);
        this.showTimeoutId = 0;
      }

      if (!this.isShown()) {
        return;
      }
      if (this.enterable && (this.trigger === 'hover' || this.trigger === 'hover-focus')) {
        clearTimeout(this.hideTimeoutId);
        this.hideTimeoutId = setTimeout(() => {
          this.hideTimeoutId = 0;
          const popup = this.$refs.popup;
          if (popup instanceof HTMLElement && !popup.matches(':hover')) {
            this.$hide();
          }
        }, 100);
      } else {
        this.$hide();
      }
    },

    $hide() {
      if (this.isShown()) {
        clearTimeout(this.hideTimeoutId);
        this.hideTimeoutId = setTimeout(() => {
          this.hideTimeoutId = 0;
          if (this.$refs.popup instanceof HTMLElement) {
            this.$refs.popup.classList.remove('in');
          }
          // gives fade out time
          this.transitionTimeoutId = setTimeout(() => {
            this.transitionTimeoutId = 0;
            if (this.$refs.popup instanceof HTMLElement && this.$refs.popup.parentNode) {
              this.$refs.popup.parentNode.removeChild(this.$refs.popup);
            }
            this.$emit('update:modelValue', false);
            this.$emit('input', false);
            this.$emit('hide');
          }, this.transitionDuration);
        }, this.hideDelay);
      }
    },

    isShown() {
      return this.$refs.popup instanceof HTMLElement && this.$refs.popup.classList.contains('in');
    },

    windowClicked(event: MouseEvent) {
      if (this.trigger !== 'outside-click' || !(event.target instanceof Node) || !(this.triggerEl instanceof HTMLElement) || !(this.$refs.popup instanceof HTMLElement)) {
        return;
      }
      if (!this.triggerEl.contains(event.target) && !this.$refs.popup.contains(event.target) && this.isShown()) {
        this.hide();
      }
    },

    handleAuto() {
      clearTimeout(this.autoTimeoutId);
      this.autoTimeoutId = setTimeout(() => {
        this.autoTimeoutId = 0;
        if (this.triggerEl.matches(':hover, :focus')) {
          this.show();
        } else {
          this.hide();
        }
      }, 20); // 20ms make firefox happy
    },
  },
});
