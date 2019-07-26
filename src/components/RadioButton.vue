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
      default: true,
    },
    input: {
      type: String,
      default: 'radio',
      validator: type => ['radio', 'checkbox'].includes(type),
    },
    disabled: Boolean,
    loose: Boolean,
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
      return Array.isArray(this.value) ? this.value : [this.value];
    },
  },

  watch: {
    input() {
      if (this.input === 'checkbox' && !Array.isArray(this.value)) {
        this.$emit('input', this.values);
      } else if (this.input === 'radio' && Array.isArray(this.value)) {
        this.$emit('input', this.value.length ? this.value[0] : null);
      }
    },
  },

  methods: {
    test(value) {
      if (this.input === 'radio') {
        if (this.loose) {
          return this.value == value;
        }
        return this.value === value;
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
          this.$emit('input', this.values.filter(v => {
            if (this.loose) {
              return v != this.checkedValue;
            }
            return v !== this.checkedValue;
          }));
        } else {
          this.$emit('input', this.test(this.checked) ? this.values : [...this.values, this.checkedValue]);
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
