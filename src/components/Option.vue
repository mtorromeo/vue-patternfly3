<template>
  <li v-if="!filtered" :class="{'selected': checked}">
    <a href="javascript:void(0)" role="menuitem" @click="check">
      <input ref="input" type="radio" :name="name === null ? $parent.name : name" :value="modelValue" :checked="checked" style="display:none">
      <slot />
      <pf-icon v-show="checked" name="glyphicon-close" class="check-mark" />
    </a>
  </li>
</template>

<script>
export default {
  name: 'pf-option',

  props: {
    name: {
      type: String,
      default: null,
    },
    modelValue: {},
    checkedValue: {},
  },

  emits: ['update:modelValue'],

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
