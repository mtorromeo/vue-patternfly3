<template>
  <popover class="column-picker" placement="bottom">
    <button ref="popover-trigger" type="button" class="btn btn-link">
      <pf-icon name="fa-columns" />
    </button>

    <template #popover>
      <div v-for="(column, i) in columns" :key="i" class="column-picker checkbox">
        <label>
          <input v-model="iValue" type="checkbox" :value="columnValue(column, i)" @change="setValue">
          {{ columnLabel(column) }}
        </label>
      </div>
    </template>
  </popover>
</template>

<script>
import Popover from './Popover.vue';

export default {
  name: 'pf-column-picker',

  components: {
    Popover,
  },

  props: {
    columns: {
      type: [Array, Object],
      default() {
        return [];
      },
    },
    modelValue: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      iValue: [],
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
    columnValue(column, i) {
      let value = Array.isArray(this.columns) ? column : i;
      if (typeof value === 'object') {
        value = typeof value.name === 'undefined' ? value.label : value.name;
      }
      return value;
    },
    columnLabel(column) {
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
};
</script>

<style>
.column-picker.checkbox {
  margin: 0;
}
</style>
