<template>
  <div
    tabindex="0"
    class="btn-group btn-group-flip"
    :class="{disabled}"
    @keyup.space="toggle"
    @keyup.enter="toggle"
    @keyup.left="set(onValue)"
    @keyup.right="setOff"
  >
    <template v-if="noOff">
      <pf-radio-button :name="name" input="checkbox" :value="value" :class="[`btn-${size}`]" :active-class="onClass" inactive-class="btn-default" :checked-value="onValue" :loose="loose" :disabled="disabled" @input="set(onValue)">
        {{ onText }}
      </pf-radio-button>
      <label class="btn" :class="[on ? 'btn-default' : offClass, `btn-${size}`]" @click="setOff">
        {{ offText }}
      </label>
    </template>

    <template v-else>
      <pf-radio-button :name="name" :value="radioValue" :class="[`btn-${size}`]" :active-class="onClass" inactive-class="btn-default" :checked-value="onValue" :loose="loose" :disabled="disabled" @input="set($event)">
        {{ onText }}
      </pf-radio-button>
      <pf-radio-button :name="name" :value="radioValue" :class="[`btn-${size}`]" :active-class="offClass" inactive-class="btn-default" :checked-value="offValue" :loose="loose" :disabled="disabled" @input="set($event)">
        {{ offText }}
      </pf-radio-button>
    </template>

    <pf-spinner v-if="loading" :size="size" inline loading />
    &nbsp;
    <slot />
  </div>
</template>

<style lang="scss">
@import "~bootstrap-sass/assets/stylesheets/bootstrap/variables";

.btn-group.disabled {
  color: $btn-link-disabled-color;
}

.btn-group > .spinner.spinner-inline {
  position: relative;
  top: 2px;
  left: 5px;
}
</style>

<script>
import PfRadioButton from './RadioButton.vue';
import PfSpinner from './Spinner.vue';

export default {
  name: 'pf-toggle',

  components: {
    PfRadioButton,
    PfSpinner,
  },

  model: {
    event: 'change',
  },

  props: {
    name: {
      type: String,
      default: null,
    },
    value: {
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
  },

  computed: {
    on() {
      return this.test(this.onValue);
    },

    radioValue() {
      if (Array.isArray(this.value)) {
        return this.on ? this.onValue : this.offValue;
      }
      return this.value;
    },

    values() {
      return Array.isArray(this.value) ? this.value : [this.value];
    },
  },

  watch: {
    noOff() {
      if (!this.test(this.onValue) && !this.test(this.offValue)) {
        this.setOff();
      } else if (this.noOff && !Array.isArray(this.value)) {
        this.$emit('change', this.values);
      }
    },
  },

  methods: {
    test(value) {
      if (!this.noOff) {
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

    setOff() {
      if (this.disabled) {
        return;
      }

      if (this.noOff) {
        this.$emit('change', this.values.filter(v => {
          if (this.loose) {
            return v != this.onValue;
          }
          return v !== this.onValue;
        }));
        return;
      }

      this.set(this.offValue);
    },

    set(value) {
      if (this.disabled) {
        return;
      }

      if (this.noOff && !Array.isArray(value)) {
        this.$emit('change', this.test(value) ? this.values : [...this.values, value]);
        return;
      }

      this.$emit('change', value);
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
