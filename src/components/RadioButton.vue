<template>
  <label
    v-bind="ouiaProps"
    type="button"
    class="btn"
    :class="[stateClass, {
      'btn-default': activeClass == 'active' && inactiveClass != 'btn-default',
    }]"
    :disabled="disabled || null"
  >
    <input :type="input" style="display:none" :name="name" :checked="checked" :disabled="disabled || null" :value="checkedValue" @change="change">
    <slot />
  </label>
</template>

<script>import { ouiaProps, useOUIAProps } from '../use';

export default {
  name: 'PfRadioButton',

  props: {
    activeClass: {
      type: String,
      default: 'active',
    },
    inactiveClass: String,
    modelValue: {
      type: [Boolean, Number, String, Array],
    },
    name: String,
    checkedValue: {
      type: [Boolean, Number, String],
      default: true,
    },
    input: {
      type: String,
      default: 'radio',
      validator: type => ['radio', 'checkbox'].includes(type),
    },
    disabled: Boolean,
    loose: Boolean,
    ...ouiaProps,
  },

  emits: ['update:modelValue'],

  setup(props) {
    return useOUIAProps(props);
  },

  computed: {
    checked() {
      return this.test(this.checkedValue);
    },

    stateClass() {
      if (this.checked && this.activeClass) {
        return this.activeClass;
      }
      if (!this.checked && this.inactiveClass) {
        return this.inactiveClass;
      }
      return '';
    },

    values() {
      return Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue];
    },
  },

  watch: {
    input() {
      if (this.input === 'checkbox' && !Array.isArray(this.modelValue)) {
        this.$emit('update:modelValue', this.values);
      } else if (this.input === 'radio' && Array.isArray(this.modelValue)) {
        this.$emit('update:modelValue', this.modelValue.length ? this.modelValue[0] : null);
      }
    },
  },

  methods: {
    test(value) {
      if (this.input === 'radio') {
        if (this.loose) {
          return this.modelValue == value;
        }
        return this.modelValue === value;
      }
      if (this.loose) {
        return typeof this.values.find(v => v == value) !== 'undefined';
      }
      return this.values.includes(value);
    },

    change() {
      if (this.disabled) {
        return;
      }

      if (this.input === 'checkbox') {
        if (this.checked) {
          this.$emit('update:modelValue', this.values.filter(v => {
            if (this.loose) {
              return v != this.checkedValue;
            }
            return v !== this.checkedValue;
          }));
        } else {
          this.$emit('update:modelValue', this.test(this.checked) ? this.values : [...this.values, this.checkedValue]);
        }
        return;
      }

      if (!this.checked) {
        this.$emit('update:modelValue', this.checkedValue);
      }
    },
  },
};
</script>
