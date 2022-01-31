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

<script lang="ts">
import { defineComponent } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';

export default defineComponent({
  name: 'PfSpinner',

  props: {
    loading: Boolean,
    size: {
      type: String,
      default: 'md',
      validator: (val: never) => ['lg', 'md', 'sm', 'xs'].includes(val),
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
});
</script>
