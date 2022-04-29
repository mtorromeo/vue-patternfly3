<template>
  <div v-bind="ouiaProps" class="input-group">
    <pf-dropdown v-if="showDropdown" :text="current?.label" class="input-group-btn">
      <li v-for="(item, i) in normFields" :key="item.name">
        <a class="filter-field" role="menuitem" tabindex="-1" @click="selected = i">
          {{ item.label }}
        </a>
      </li>
    </pf-dropdown>
    <pf-select v-if="current?.values" close-on-select class="filter-select" :placeholder="current.placeholder">
      <pf-option v-for="(item, i) in current.values" :key="i" :checked-value="item" @update:model-value="set($event as string)">
        {{ item }}
      </pf-option>
    </pf-select>
    <div v-else>
      <input
        ref="input"
        class="form-control"
        type="text"
        :value="value"
        :placeholder="showDropdown || current?.placeholder ? current?.placeholder : current?.label"
        @keyup.enter.stop="set"
      >
    </div>
  </div>
</template>

<script lang="ts">
import PfSelect from './Select.vue';
import PfOption from './Option.vue';
import PfDropdown from './Dropdown.vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import { defineComponent, PropType } from 'vue';

export interface FilterField {
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  values?: string[];
}

export type FilterFieldDefinition = Partial<FilterField> | string;

export default defineComponent({
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
      type: [Array, Object] as PropType<FilterFieldDefinition[] | Record<string, FilterFieldDefinition>>,
      default: (): FilterFieldDefinition[] => [],
    },
    ...ouiaProps,
  },

  emits: {
    filter: (value: FilterField) => value !== undefined,
  },

  setup(props) {
    return useOUIAProps(props);
  },

  data(this: void) {
    return {
      normFields: [] as FilterField[],
      selected: 0,
    };
  },

  computed: {
    current(): FilterField | null {
      let selected = this.selected;
      if (!this.normFields[selected]) {
        if (!this.normFields.length) {
          return null;
        }
        selected = 0;
      }
      return this.normFields[selected];
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
            normFields.push(this.normalizeField(f));
          }
        } else {
          for (const i of Object.keys(fields)) {
            normFields.push(this.normalizeField(fields[i], i));
          }
        }
        this.normFields = normFields;
      },
      immediate: true,
    },
  },

  methods: {
    normalizeField(fieldDefinition: FilterFieldDefinition, name?: string): FilterField {
      const field: Partial<FilterField> = {
        name: typeof fieldDefinition === 'object' ? fieldDefinition?.name : '',
        label: typeof fieldDefinition === 'object' ? fieldDefinition?.label : fieldDefinition,
        placeholder: typeof fieldDefinition === 'object' ? fieldDefinition.placeholder : undefined,
      };
      field.name = name || field.name || field.label || '';
      if (!field.label) {
        field.label = field.name;
      }
      return field as FilterField;
    },

    set(value: KeyboardEvent | string) {
      if (value !== null) {
        if (value instanceof KeyboardEvent) {
          if (!(value.target instanceof HTMLInputElement)) {
            return;
          }
          value = value.target.value;
        }
        const filter = Object.assign({}, this.current);
        filter.value = value;
        this.$emit('filter', filter);
      }
      if (this.$refs.input instanceof HTMLInputElement) {
        this.$refs.input.value = '';
      }
    },
  },
});
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
