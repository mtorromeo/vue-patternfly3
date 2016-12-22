<template>
  <bs-popover class="column-picker" effect="fade" placement="bottom">
    <button type="button" class="btn btn-link">
      <span class="fa fa-columns"></span>
    </button>

    <div slot="content" v-for="(column, i) in columns" class="checkbox" @click.stop>
      <label>
        <input type="checkbox" :value="columnValue(column, i)" v-model="iValue">
        {{column}}
      </label>
    </div>
  </bs-popover>
</template>

<script>
import VueStrap from '../vue-strap';

export default {
  name: 'pf-column-picker',

  components: {
    BsPopover: VueStrap.popover,
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
  },

  watch: {
    value(value) {
      if (value != this.iValue) {
        this.iValue = value;
      }
    },
    iValue(value) {
      if (value != this.value) {
        this.$emit('input', value);
      }
    },
  },
};
</script>

<style>
.column-picker .popover-content .checkbox {
  margin: 0;
}
</style>