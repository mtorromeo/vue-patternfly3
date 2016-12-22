<template>
<div class="filter-pf filter-fields form-group toolbar-pf-filter">
  <div class="input-group">
    <bs-dropdown :text="current.label" class="input-group-btn">
      <li v-for="(item, name) in fields">
        <a class="filter-field" role="menuitem" tabindex="-1" @click="selected = name">
          {{item.label}}
        </a>
      </li>
    </bs-dropdown>
    <bs-select ref="select" class="filter-select" v-if="isSelect" @input="set" :placeholder="current.placeholder" :close-on-select="true">
      <slot name="options" :field="current">
        <bs-option :value="item" v-for="item in current.values">{{item}}</bs-option>
      </slot>
    </bs-select>
    <div v-else>
      <input ref="input" class="form-control" type="text" :value="value"
             @keyup.enter.stop="set" :placeholder="current.placeholder">
    </div>
  </div>
</div>
</template>

<script>
import VueStrap from '../vue-strap';

export default {
  name: 'pf-filter-fields',

  components: {
    BsDropdown: VueStrap.dropdown,
    BsSelect: VueStrap.select,
    BsOption: VueStrap.option,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
    fields: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      selected: '',
    };
  },

  computed: {
    current() {
      if (!this.selected || !this.fields[this.selected]) {
        const names = Object.keys(this.fields);
        if (!names.length) {
          return {};
        }
        this.selected = names[0];
      }
      return this.fields[this.selected];
    },

    isSelect() {
      return typeof this.current.values !== 'undefined';
    },
  },

  methods: {
    set(value) {
      if (value !== null) {
        if (typeof value == 'object') {
          this.$emit('filter', this.selected, value.target.value);
        } else {
          this.$emit('filter', this.selected, value);
        }
      }
      if (this.isSelect) {
        this.$refs.select.clear();
      } else {
        this.$refs.input.value = '';
      }
    },
  },
};
</script>

<style>
.filter-pf a {
  cursor: pointer;
}

.filter-pf.filter-fields .form-group {
  padding-left: 0;
  width: 275px;
}

.filter-select {
  position: relative;
  float: left;
  width: 100%;
  margin-left: -1px !important;
}

.filter-select .btn-content {
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  background-color: #ffffff;
  background-image: none;
  color: #999999;
}

.filter-select .dropdown-menu {
  min-width: 100%;
}
</style>
