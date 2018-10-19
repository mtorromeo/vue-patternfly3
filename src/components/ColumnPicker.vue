<template>
  <popover class="column-picker" placement="bottom">
    <button ref="popover-trigger" type="button" class="btn btn-link">
      <pf-icon name="fa-columns"/>
    </button>

    <template slot="popover">
      <div class="column-picker checkbox" v-for="(column, i) in columns" :key="i">
        <label>
          <input type="checkbox" :value="columnValue(column, i)" v-model="iValue" @change="setValue">
          {{column}}
        </label>
      </div>
    </template>
  </popover>
</template>

<script>
import {Popover} from 'uiv';

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
    value: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      iValue: [],
    };
  },

  mounted() {
    this.iValue = this.value;
  },

  methods: {
    columnValue(column, i) {
      return this.columns instanceof Array ? column : i;
    },
    setValue() {
      const columns = this.columns instanceof Array ? this.columns : Object.keys(this.columns);
      const sortedValue = [];
      for (const value of columns) {
        if (this.iValue.indexOf(value) >= 0) {
          sortedValue.push(value);
        }
      }
      this.$emit('input', sortedValue);
    },
  },

  watch: {
    value(value) {
      if (value != this.iValue) {
        this.iValue = value.slice(0);
      }
    },
  },
};
</script>

<style>
.column-picker.checkbox {
  margin: 0;
}
</style>
