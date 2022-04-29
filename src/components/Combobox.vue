<template>
  <div
    v-bind="ouiaProps"
    class="combobox-container"
    :class="{
      'combobox-disabled': effectiveDisabled,
      'combobox-selected': hasValue,
      'has-error': hasError,
    }"
  >
    <input v-if="name" type="hidden" :name="name" :value="modelValue" :disabled="effectiveDisabled" :required="required">
    <div class="input-group">
      <label v-if="withCheckbox" class="input-group-addon">
        <input v-model="checked" type="checkbox" :name="typeof withCheckbox === 'string' ? withCheckbox : undefined" value="1">
      </label>

      <input
        ref="text"
        v-model="text"
        type="text"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        :placeholder="placeholder"
        :disabled="effectiveDisabled"
        :required="required"
        :tabindex="tabindex"
        class="combobox form-control"
        @focus="($refs.text as HTMLInputElement).select()"
        @blur="blur"
        @keydown.esc="showOptions = false"
        @keydown.up.prevent="prev"
        @keydown.down.prevent="next"
        @keydown.enter="apply"
        @keydown.tab="apply"
        @invalid="hasError = true"
      >
      <ul
        class="typeahead typeahead-long dropdown-menu"
        style="top: 26px; left: 0px; max-height: 300px"
        :style="{display: dropdownOpen ? 'block' : 'none'}"
        role="listbox"
      >
        <li v-for="o of filteredOptions" :key="o.value" :data-value="o.value" role="option" :aria-selected="o.value === active" :class="{active: o.value === active}" @click.stop.prevent="setValue(o.value)">
          <a href="javascript:void(0)" role="presentation" @click.prevent>
            <slot :option="o">
              <span v-html="o.highlighted" />
            </slot>
          </a>
        </li>
      </ul>

      <slot name="dropdownTrigger" :disabled="effectiveDisabled" :click-handler="dropdownClick">
        <a href="javascript:void(0)" role="button" class="input-group-addon dropdown-toggle" :class="{disabled: effectiveDisabled}" data-dropdown="dropdown" :disabled="effectiveDisabled" @click.prevent="dropdownClick">
          <span class="caret" />
          <pf-icon name="glyphicon-remove" />
        </a>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';

type Option = Record<string, never> | string | number;

interface NormalizedOption {
  option: Option;
  label: string;
  value: string | number;
}

export default defineComponent({
  name: 'PfCombobox',

  props: {
    name: {
      type: String,
      default: null,
    },
    modelValue: {
      type: [String, Number] as PropType<string | number |null>,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    disabled: Boolean,
    required: Boolean,
    tabindex: {
      type: String,
      default: null,
    },
    options: {
      type: Array as PropType<Option[]>,
      default: (): Option[] => [],
    },
    labelField: {
      type: String,
      default: 'label',
    },
    valueField: {
      type: String,
      default: 'id',
    },
    match: {
      type: Function as PropType<(o: NormalizedOption, q: string) => boolean>,
      default: (o: NormalizedOption, q: string) => o.label.toString().toLowerCase().includes(q.toLowerCase()),
    },
    highlight: {
      type: Function as PropType<(o: NormalizedOption, q: string) => string>,
      default: (o: NormalizedOption, q: string) => o.label.replace(new RegExp(q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'ig'), '<strong>$&</strong>'),
    },
    withCheckbox: {
      type: [Boolean, String],
      default: false,
    },
    ...ouiaProps,
  },

  emits: {
    update: (value: string | number | null) => value !== undefined,
    'update:modelValue': (value: string | number | null) => value !== undefined,
  },

  setup(props) {
    return useOUIAProps(props);
  },

  data(this: void) {
    return {
      blurTimeout: undefined as ReturnType<typeof setTimeout> | undefined,
      showOptions: false,
      filter: null as string | null,
      active: null as string | number | null,
      hasError: false,
      checked: false,
    };
  },

  computed: {
    hasValue() {
      return this.modelValue !== null;
    },

    label() {
      if (this.modelValue === null || typeof this.optionsMap[this.modelValue] === 'undefined') {
        return '';
      }
      return this.optionsMap[this.modelValue].label;
    },

    optionsMap(): Record<string | number, NormalizedOption> {
      const map: Record<string | number, NormalizedOption> = {};
      for (const o of this.options) {
        const isObj = typeof o === 'object';
        const value = isObj ? o[this.valueField] : o;
        const label = isObj ? o[this.labelField] : o;
        map[value] = {
          option: o,
          label: label.toString(),
          value,
        };
      }
      return map;
    },

    filteredOptions() {
      if (this.filter === null) {
        return [];
      }

      const options = [];
      for (const o of Object.values(this.optionsMap)) {
        if (this.match(o, this.filter)) {
          options.push({
            ...o,
            highlighted: this.highlight(o, this.filter),
          });
        }
      }
      return options;
    },

    text: {
      get(): string {
        return this.filter === null ? this.label : this.filter;
      },
      set(text: string) {
        this.filter = text;
      },
    },

    dropdownOpen() {
      return this.showOptions && this.filteredOptions.length;
    },

    effectiveDisabled() {
      return this.disabled || Boolean(this.withCheckbox && !this.checked);
    },
  },

  watch: {
    dropdownOpen() {
      if (this.dropdownOpen) {
        clearTimeout(this.blurTimeout);
      }
    },

    filteredOptions() {
      if (this.filteredOptions.length) {
        this.active = this.filteredOptions[0].value;
        this.showOptions = this.filter !== null;
      } else {
        this.active = null;
      }
    },
  },

  methods: {
    setValue(value: string | number | null) {
      this.showOptions = false;
      this.filter = null;
      if (value !== this.modelValue) {
        this.$emit('update', value);
        this.$emit('update:modelValue', value);
        this.hasError = false;
      }
      (this.$refs.text as HTMLInputElement).focus();
    },

    toggleOptions() {
      this.showOptions = !this.dropdownOpen;
      if (this.showOptions) {
        if (this.filter === null) {
          this.filter = '';
        }
        (this.$refs.text as HTMLInputElement).focus();
      }
    },

    blur() {
      clearTimeout(this.blurTimeout);
      this.blurTimeout = setTimeout(() => {
        if (this.filter) {
          this.filter = null;
        }
        this.showOptions = false;
      }, 200);
    },

    prev() {
      if (!this.filteredOptions.length) {
        this.active = null;
        return;
      }

      let activeIdx = this.filteredOptions.findIndex(o => o.value === this.active);
      if (activeIdx < 0 || activeIdx === 0) {
        activeIdx = this.filteredOptions.length - 1;
      } else {
        activeIdx--;
      }
      this.active = this.filteredOptions[activeIdx].value;
    },

    next() {
      if (!this.dropdownOpen) {
        this.toggleOptions();
        this.active = null;
      }

      if (!this.filteredOptions.length) {
        this.active = null;
        return;
      }

      let activeIdx = this.filteredOptions.findIndex(o => o.value === this.active);
      if (activeIdx < 0 || activeIdx >= this.filteredOptions.length - 1) {
        activeIdx = 0;
      } else {
        activeIdx++;
      }
      this.active = this.filteredOptions[activeIdx].value;
    },

    apply(e: Event) {
      if (!this.dropdownOpen) {
        return;
      }

      e.preventDefault();

      if (this.active === null) {
        this.setValue(null);
        return;
      }

      const activeIdx = this.filteredOptions.findIndex(o => o.value === this.active);
      if (activeIdx < 0) {
        this.setValue(null);
        return;
      }
      this.setValue(this.filteredOptions[activeIdx].value);
    },

    dropdownClick(e: Event) {
      if (this.effectiveDisabled) {
        e.preventDefault();
        return;
      }

      if (this.hasValue) {
        this.setValue(null);
        return;
      }

      this.toggleOptions();
    },
  },
});
</script>
