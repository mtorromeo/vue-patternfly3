<template>
  <div
    v-bind="ouiaProps"
    tabindex="0"
    class="btn-group btn-group-flip"
    :class="{disabled}"
    @keyup.space="toggle"
    @keyup.enter="toggle"
    @keyup.left="set(onValue)"
    @keyup.right="setOff"
  >
    <template v-if="noOff">
      <pf-radio-button :name="name" input="checkbox" :model-value="modelValue" :class="[`btn-${size}`]" :active-class="onClass" inactive-class="btn-default" :checked-value="onValue" :loose="loose" :disabled="disabled" @update:model-value="set(onValue)">
        {{ onText }}
      </pf-radio-button>
      <label class="btn" :class="[on ? 'btn-default' : offClass, `btn-${size}`]" @click="setOff">
        {{ offText }}
      </label>
    </template>

    <template v-else>
      <pf-radio-button :name="name" :model-value="radioValue" :class="[`btn-${size}`]" :active-class="onClass" inactive-class="btn-default" :checked-value="onValue" :loose="loose" :disabled="disabled" @update:model-value="set($event)">
        {{ onText }}
      </pf-radio-button>
      <pf-radio-button :name="name" :model-value="radioValue" :class="[`btn-${size}`]" :active-class="offClass" inactive-class="btn-default" :checked-value="offValue" :loose="loose" :disabled="disabled" @update:model-value="set($event)">
        {{ offText }}
      </pf-radio-button>
    </template>

    <pf-spinner v-if="loading" :size="size" inline loading />
    &nbsp;
    <slot />
  </div>
</template>

<script>
import { ouiaProps, useOUIAProps } from '../use';
import PfRadioButton from './RadioButton.vue';
import PfSpinner from './Spinner.vue';

export default {
  name: 'PfToggle',

  components: {
    PfRadioButton,
    PfSpinner,
  },

  props: {
    name: {
      type: String,
      default: null,
    },
    modelValue: {
      type: [Boolean, String, Number, Array],
      required: true,
    },
    disabled: Boolean,
    loading: Boolean,
    loose: Boolean,
    onText: {
      type: String,
      default: 'ON',
    },
    onValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    onClass: {
      type: String,
      default: 'btn-success',
    },
    offText: {
      type: String,
      default: 'OFF',
    },
    offValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    noOff: Boolean,
    offClass: {
      type: String,
      default: 'btn-danger',
    },
    size: {
      type: String,
      default: 'sm',
      validator: val => ['lg', 'md', 'sm', 'xs'].includes(val),
    },
    ...ouiaProps,
  },

  emits: ['change', 'update:modelValue'],

  setup(props) {
    return useOUIAProps(props);
  },

  computed: {
    on() {
      return this.test(this.onValue);
    },

    radioValue() {
      if (Array.isArray(this.modelValue)) {
        return this.on ? this.onValue : this.offValue;
      }
      return this.modelValue;
    },

    values() {
      return Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue];
    },
  },

  watch: {
    noOff() {
      if (!this.test(this.onValue) && !this.test(this.offValue)) {
        this.setOff();
      } else if (this.noOff && !Array.isArray(this.modelValue)) {
        this.$emit('update:modelValue', this.values);
      }
    },
  },

  methods: {
    test(value) {
      if (!this.noOff) {
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

    setOff() {
      if (this.disabled) {
        return;
      }

      if (this.noOff) {
        const value = this.values.filter(v => {
          if (this.loose) {
            return v != this.onValue;
          }
          return v !== this.onValue;
        });
        this.$emit('change', value);
        this.$emit('update:modelValue', value);
        return;
      }

      this.set(this.offValue);
    },

    set(value) {
      if (this.disabled) {
        return;
      }

      if (this.noOff && !Array.isArray(value)) {
        value = this.test(value) ? this.values : [...this.values, value];
      }

      this.$emit('change', value);
      this.$emit('update:modelValue', value);
    },

    toggle() {
      if (this.disabled) {
        return;
      }

      if (this.on) {
        if (this.noOff) {
          this.setOff();
          return;
        }
        this.set(this.offValue);
        return;
      }

      this.set(this.onValue);
    },
  },
};
</script>

<style lang="scss">
@import "bootstrap-sass/assets/stylesheets/bootstrap/variables";

.btn-group.disabled {
  color: $btn-link-disabled-color;
}

.btn-group > .spinner.spinner-inline {
  position: relative;
  top: 2px;
  left: 5px;
}
</style>
