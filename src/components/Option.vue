<template>
  <li v-if="!filtered" v-bind="ouiaProps" :class="{'selected': checked}">
    <a href="javascript:void(0)" role="menuitem" @click.prevent="check">
      <input ref="input" type="radio" :name="name === null ? $parent.name : name" :value="modelValue" :checked="checked" style="display:none">
      <slot />
      <pf-icon v-show="checked" name="glyphicon-close" class="check-mark" />
    </a>
  </li>
</template>

<script>
import { useChildrenTracker } from '../use';
import { ouiaProps, useOUIAProps } from '../ouia';

export default {
  name: 'PfOption',

  props: {
    name: {
      type: String,
      default: null,
    },
    modelValue: {},
    checkedValue: {},
    ...ouiaProps,
  },

  emits: ['update:modelValue'],

  setup(props) {
    useChildrenTracker();
    return useOUIAProps(props);
  },

  data() {
    return {
      label: '',
      filter: '',
    };
  },

  computed: {
    checked() {
      return this.checkedValue === this.modelValue;
    },

    filtered() {
      if (!this.label || !this.filter) {
        return false;
      }
      return this.label.toLowerCase().indexOf(this.filter) === -1;
    },
  },

  mounted() {
    this.label = this.$el.innerText;
  },

  methods: {
    check() {
      this.$emit('update:modelValue', this.checkedValue);
      this.$parent.select(this);
    },
  },
};
</script>
