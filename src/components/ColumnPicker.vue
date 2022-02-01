<template>
  <pf-popover v-bind="ouiaProps" class="column-picker" placement="bottom">
    <pf-button data-role="trigger" variant="link">
      <pf-icon name="fa-columns" />
    </pf-button>

    <template #popover>
      <div v-for="(column, i) in columns" :key="i" class="column-picker checkbox">
        <label>
          <input v-model="iValue" type="checkbox" :value="columnValue(column, i)" @change="setValue">
          {{ columnLabel(column) }}
        </label>
      </div>
    </template>
  </pf-popover>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import PfButton from './Button.vue';
import PfPopover from './Popover.vue';

export type Column = {
  name?: string;
  label?: string;
} | string;

export default defineComponent({
  name: 'PfColumnPicker',

  components: {
    PfPopover,
    PfButton,
  },

  props: {
    columns: {
      type: [Array, Object] as PropType<Column[] | Record<string, Column>>,
      default: (): Column[] => [],
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: (): string[] => [],
    },
    ...ouiaProps,
  },

  emits: {
    'update:modelValue': (value: string[]) => value !== undefined,
  },

  setup(props) {
    return useOUIAProps(props);
  },

  data(this: void) {
    return {
      iValue: [] as string[],
    };
  },

  watch: {
    modelValue(value) {
      if (value != this.iValue) {
        this.iValue = value.slice(0);
      }
    },
  },

  mounted() {
    this.iValue = this.modelValue;
  },

  methods: {
    columnValue(column: Column, i: string | number | typeof Symbol.iterator | typeof Symbol.unscopables) {
      let value = typeof i === 'string' ? i : column;
      if (typeof value === 'object') {
        value = typeof value.name === 'undefined' ? value.label : value.name;
      }
      return value;
    },

    columnLabel(column: Column) {
      return typeof column === 'object' ? column.label : column;
    },

    setValue() {
      const sortedValue = [];
      const iter = Array.isArray(this.columns) ? this.columns.entries() : Object.entries(this.columns);
      for (const [i, column] of iter) {
        const value = this.columnValue(column, i);
        if (this.iValue.indexOf(value) >= 0) {
          sortedValue.push(value);
        }
      }
      this.$emit('update:modelValue', sortedValue);
    },
  },
});
</script>

<style>
.column-picker.checkbox {
  margin: 0;
}
</style>
