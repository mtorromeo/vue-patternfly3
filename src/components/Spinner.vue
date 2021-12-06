<template>
  <div
    v-if="loading"
    v-bind="ouiaProps"
    :class="[`spinner-${size}`, {
      'spinner-inline': inline,
      'spinner-inverse': inverse,
    }]"
    class="spinner"
    :aria-valuetext="ariaValueText"
  />
  <component :is="tag" v-else>
    <slot />
  </component>
</template>

<script>import { ouiaProps, useOUIAProps } from '../use';

export default {
  name: 'PfSpinner',

  props: {
    loading: Boolean,
    size: {
      type: String,
      default: 'md',
      validator: val => ['lg', 'md', 'sm', 'xs'].indexOf(val) >= 0,
    },
    inline: Boolean,
    inverse: Boolean,
    tag: {
      type: String,
      default: 'div',
    },
    ariaValueText: {
      type: String,
      default: 'Loading...',
    },
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },
};
</script>
