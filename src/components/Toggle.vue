<template>
  <div
    tabindex="0"
    class="btn-group btn-group-flip"
    :class="{disabled}"
    @keyup.space="toggle"
    @keyup.enter="toggle"
    @keyup.left="toggle(onValue)"
    @keyup.right="toggle(offValue)"
  >
    <template v-if="offValue !== false">
      <pf-radio-button :name="name" :value="radioValue" :class="[`btn-${size}`]" :active-class="onClass" inactive-class="btn-default" :checked-value="onValue" :disabled="disabled" @input="toggle($event)">
        {{ onText }}
      </pf-radio-button>
      <pf-radio-button :name="name" :value="radioValue" :class="[`btn-${size}`]" :active-class="offClass" inactive-class="btn-default" :checked-value="offValue" :disabled="disabled" @input="toggle($event)">
        {{ offText }}
      </pf-radio-button>
    </template>
    <template v-else>
      <pf-radio-button :name="name" input="checkbox" :value="value" :class="[`btn-${size}`]" :active-class="onClass" inactive-class="btn-default" :checked-value="onValue" :disabled="disabled" @input="toggle(onValue)">
        {{ onText }}
      </pf-radio-button>
      <label class="btn" :class="[on ? 'btn-default' : offClass, `btn-${size}`]" @click="toggle(false)">
        {{ offText }}
      </label>
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
    onText: {
      type: String,
      default: 'ON',
    },
    onValue: {
      type: [Boolean, String, Number],
      default: '1',
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
      return this.arrValue.includes(this.onValue);
    },

    radioValue() {
      if (Array.isArray(this.value)) {
        return this.value.includes(this.onValue) ? this.onValue : this.offValue;
      }
      return this.value;
    },

    arrValue() {
      return Array.isArray(this.value) ? this.value : [this.value];
    },
  },

  methods: {
    toggle(value) {
      if (this.disabled) {
        return;
      }

      if (typeof value === 'undefined') {
        value = this.value === this.onValue ? this.offValue : this.onValue;
      }

      if (value === false) {
        this.$emit('change', this.arrValue.filter(v => v !== this.onValue));
        return;
      }

      if (this.offValue === false && !Array.isArray(value)) {
        this.$emit('change', this.arrValue.includes(value) ? this.arrValue : [...this.arrValue, value]);
        return;
      }

      this.$emit('change', value);
    },
  },
};
</script>
