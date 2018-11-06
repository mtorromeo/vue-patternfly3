<template functional>
  <div
    v-bind="data.attrs"
    v-on="listeners"
    :class="[data.class, data.staticClass, `spinner-${props.size}`, {
      'spinner-inline': props.inline,
      'spinner-inverse': props.inverse,
    }]"
    :style="[data.style, data.staticStyle]"
    v-if="props.loading"
    class="spinner"
  ></div>
  <div :is="props.tag" v-else>
    <slot/>
  </div>
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
