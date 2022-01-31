<template>
  <component
    :is="to ? 'router-link' : 'void'"
    v-slot="routerCtx"
    :to="to"
    :replace="replace"
    custom
  >
    <component
      v-bind="{ ...$attrs, ...ouiaProps }"
      :is="buttonComponent"
      :type="buttonComponent === 'button' ? type : null"
      :disabled="effectiveDisabled || null"
      class="btn"
      :class="[`btn-${variant}`, {
        [activeClass]: routerCtx?.isActive,
        [exactActiveClass]: routerCtx?.isExactActive,
        'btn-block': block,
        'active': active,
        'btn-sm': small,
        'btn-xs': xSmall,
        'btn-lg': large,
      }]"
      :aria-current="routerCtx?.isExactActive ? ariaCurrentValue : null"
      :aria-pressed="active || null"
      :tabindex="tabIdx"
      :role="buttonComponent !== 'button' ? 'button' : null"
      :href="href || (buttonComponent === 'a' ? routerCtx?.href : null)"
      @click="onClick($event, routerCtx?.navigate)"
    >
      <pf-spinner
        v-if="loading"
        loading
        inline
        :size="large ? 'sm' : 'xs'"
        :aria-valuetext="spinnerAriaValueText"
        style="vertical-align: middle"
      />
      <slot />
    </component>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import PfSpinner from './Spinner.vue';
import Void from './Void';

export type ButtonVariant = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link';

export default defineComponent({
  name: 'PfButton',

  components: { PfSpinner, Void },

  inheritAttrs: false,

  props: {
    /** type of button */
    type: {
      type: String,
      default: 'button',
    },

    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'default',
      validator: (v: never) => ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link'].includes(v),
    },

    component: {
      type: [String, Object],
      default: 'auto',
    },

    spinnerAriaValueText: {
      type: String,
      default: '',
    },

    active: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: {
      type: Boolean,
      default: null,
    },

    /** Adds small styling to the button */
    small: Boolean,

    /** Adds extra small styling to the button */
    xSmall: Boolean,

    /** Adds small styling to the button */
    large: Boolean,

    tabindex: {
      type: [Number, String],
      default: null,
    },

    href: {
      type: String,
      default: null,
    },

    // router-link attributes
    to: {
      type: [String, Object],
      default: null,
    },
    replace: Boolean,
    activeClass: {
      type: String,
      default: 'active',
    },
    ariaCurrentValue: {
      type: String,
      default: null,
    },
    exactActiveClass: {
      type: String,
      default: null,
    },

    ...ouiaProps,
  },

  emits: ['click'],

  setup(props) {
    return useOUIAProps(props);
  },

  computed: {
    buttonComponent() {
      if (this.component !== 'auto') {
        return this.component;
      }
      return (this.href || this.to) ? 'a' : 'button';
    },

    effectiveDisabled() {
      return this.loading || this.disabled;
    },

    tabIdx() {
      if (this.tabindex) {
        return this.tabindex;
      }
      if (this.disabled) {
        return this.component === 'button' ? null : -1;
      }
      if (this.component === 'span') {
        return 0;
      }
      return null;
    },
  },

  methods: {
    onClick(e: MouseEvent, navigate: (event?: MouseEvent) => never) {
      if (this.effectiveDisabled) {
        e.preventDefault();
        return;
      }

      if (navigate) {
        navigate(e);
        return;
      }

      this.$emit('click', e);
    },
  },
});
</script>
