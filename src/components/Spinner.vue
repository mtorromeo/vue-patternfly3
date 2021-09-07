<template>
  <div
    v-if="loading"
    :class="[`spinner-${size}`, {
      'spinner-inline': inline,
      'spinner-inverse': inverse,
    }]"
    class="spinner"
  />
  <component :is="tag" v-else>
    <slot />
  </component>
</template>

<script>
export default {
  name: 'pf-spinner',

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
  },
};
</script>
