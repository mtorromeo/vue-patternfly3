<template>
  <div v-bind="ouiaProps" class="input-group">
    <pf-dropdown v-if="showDropdown" :text="current.label" class="input-group-btn">
      <li v-for="(item, name) in normFields" :key="name">
        <a class="filter-field" role="menuitem" tabindex="-1" @click="selected = name">
          {{ item.label }}
        </a>
      </li>
    </pf-dropdown>
    <pf-select v-if="isSelect" close-on-select class="filter-select" :placeholder="current.placeholder">
      <pf-option v-for="(item, i) in current.values" :key="i" :checked-value="item" @update:model-value="set">
        {{ item }}
      </pf-option>
    </pf-select>
    <div v-else>
      <input
        ref="input"
        class="form-control"
        type="text"
        :value="value"
        :placeholder="showDropdown || current.placeholder ? current.placeholder : current.label"
        @keyup.enter.stop="set"
      >
    </div>
  </div>
</template>

<script>
import PfSelect from './Select.vue';
import PfOption from './Option.vue';
import PfDropdown from './Dropdown.vue';
import { ouiaProps, useOUIAProps } from '../ouia';

export default {
  name: 'PfFilterFields',

  components: {
    PfDropdown,
    PfSelect,
    PfOption,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
    fields: {
      type: [Array, Object],
      default() {
        return {};
      },
    },
    ...ouiaProps,
  },

  emits: ['filter'],

  setup(props) {
    return useOUIAProps(props);
  },

  data() {
    return {
      normFields: [],
      selected: 0,
    };
  },

  computed: {
    current() {
      let selected = this.selected;
      if (!this.normFields[selected]) {
        if (!this.normFields.length) {
          return {};
        }
        selected = this.normFields[0];
      }
      return this.normFields[selected];
    },

    isSelect() {
      return typeof this.current.values !== 'undefined';
    },

    showDropdown() {
      return Object.keys(this.normFields).length > 1;
    },
  },

  watch: {
    fields: {
      handler(fields) {
        const normFields = [];
        if (Array.isArray(fields)) {
          for (const f of fields) {
            normFields.push(this.fieldDefinition(f));
          }
        } else {
          for (const i of Object.keys(fields)) {
            normFields.push(this.fieldDefinition(fields[i], i));
          }
        }
        this.normFields = normFields;
      },
      immediate: true,
    },
  },

  methods: {
    fieldDefinition(field, name) {
      if (typeof field === 'object') {
        field = Object.assign({}, field);
      } else {
        field = {
          label: field,
        };
      }
      field.name = name || field.label;
      if (!field.label) {
        field.label = name;
      }
      return field;
    },

    set(value) {
      if (value !== null) {
        if (typeof value === 'object') {
          value = value.target.value;
        }
        const filter = Object.assign({}, this.current);
        filter.value = value;
        this.$emit('filter', filter);
      }
      if (!this.isSelect) {
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
