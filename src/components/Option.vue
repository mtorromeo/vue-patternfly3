<template>
  <li v-if="!filtered" v-bind="ouiaProps" :class="{'selected': checked}">
    <a href="javascript:void(0)" role="menuitem" @click.prevent="check">
      <input ref="input" type="radio" :name="name === null ? selectName : name" :value="modelValue" :checked="checked" style="display:none">
      <slot />
      <pf-icon v-show="checked" name="glyphicon-close" class="check-mark" />
    </a>
  </li>
</template>

<script lang="ts">
import { useChildrenTracker } from '../use';
import { ouiaProps, useOUIAProps } from '../ouia';
import { defineComponent, inject, PropType } from 'vue';

export const OptionSymbol = Symbol('Option');

export default defineComponent({
  name: 'PfOption',

  props: {
    name: {
      type: String,
      default: null,
    },
    modelValue: {
      type: null as unknown as PropType<unknown>,
      default: null,
    },
    checkedValue: {
      type: null as unknown as PropType<unknown>,
      default: null,
    },
    ...ouiaProps,
  },

  emits: {
    'update:modelValue': (value: unknown) => value !== undefined,
  },

  setup(props) {
    useChildrenTracker(OptionSymbol);
    return {
      select: inject<() => void>('select', () => null),
      selectName: inject<string>('selectName', null),
      ...useOUIAProps(props),
    };
  },

  data(this: void) {
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
      this.select();
    },
  },
});
</script>
