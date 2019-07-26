<template>
  <label
    type="button"
    class="btn"
    :class="[stateClass, {
      'btn-default': activeClass == 'active' && inactiveClass != 'btn-default',
    }]"
    :disabled="disabled"
  >
    <input :type="input" style="display:none" :name="name" :checked="checked" :disabled="disabled" :value="checkedValue" @change="change">
    <slot />
  </label>
</template>

<script>
export default {
  name: 'pf-radio-button',

  props: {
    activeClass: {
      type: String,
      default: 'active',
    },
    inactiveClass: String,
    value: {
      type: [Boolean, Number, String, Array],
    },
    name: String,
    checkedValue: {
      type: [Boolean, Number, String],
    },
    input: {
      type: String,
      default: 'radio',
      validator: type => ['radio', 'checkbox'].includes(type),
    },
    disabled: Boolean,
  },

  computed: {
    checked() {
      return Array.isArray(this.value) ? this.value.includes(this.checkedValue) : this.checkedValue === this.value;
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
  },

  methods: {
    change() {
      if (this.disabled) {
        return;
      }

      if (this.input === 'checkbox') {
        const arrValue = Array.isArray(this.value) ? [...this.value] : [this.value];
        if (this.checked) {
          this.$emit('input', arrValue.filter(v => v !== this.checkedValue));
        } else {
          this.$emit('input', arrValue.includes(this.checkedValue) ? arrValue : [...arrValue, this.checkedValue]);
        }
        return;
      }

      if (!this.checked) {
        this.$emit('input', this.checkedValue);
      }
    },
  },
};
</script>
