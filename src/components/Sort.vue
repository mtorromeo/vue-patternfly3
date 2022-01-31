<template>
  <div v-bind="ouiaProps" class="sort-pf">
    <pf-dropdown :text="current.label">
      <li v-for="field in normFields" :key="field.name" :class="{'selected': active == field.name}">
        <a href="javascript:void(0)" class="sort-field" role="menuitem" tabindex="-1" @click.prevent="select(field)">
          {{ field.label }}
        </a>
      </li>
    </pf-dropdown>
    <pf-button variant="link" @click="invert">
      <pf-icon class="sort-direction" :name="sortIcon" />
    </pf-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import PfButton from './Button.vue';
import PfDropdown from './Dropdown.vue';

export type SortDirection = 'ascending' | 'descending' | 'asc' | 'desc';

export interface SortField {
  name: string;
  label: string;
  type?: 'alpha' | 'numeric';
}

export type SortFieldDefinition = Partial<SortField> | string;

export default defineComponent({
  name: 'PfSort',

  components: {
    PfButton,
    PfDropdown,
  },

  props: {
    fields: {
      type: [Array, Object] as PropType<SortFieldDefinition[] | Record<string, SortFieldDefinition>>,
      default: (): SortFieldDefinition[] => [],
    },
    sortBy: String,
    direction: {
      type: String as PropType<SortDirection>,
      default: 'ascending',
      validator: (v: never) => ['ascending', 'descending', 'asc', 'desc'].includes(v),
    },
    ...ouiaProps,
  },

  emits: ['change'],

  setup(props) {
    return useOUIAProps(props);
  },

  data(this: void) {
    return {
      normFields: [] as SortField[],
      active: '',
      ascending: true,
    };
  },

  computed: {
    current(): SortField {
      if (!this.active) {
        return {
          name: '',
          label: 'Sort by',
        };
      }
      for (const field of this.normFields) {
        if (field.name == this.active) {
          return field;
        }
      }
      return {
        name: '',
        label: 'Sort by',
      };
    },

    sortIcon() {
      const dir = this.ascending ? 'asc' : 'desc';
      const typ = this.current.type === 'numeric' ? 'numeric' : 'alpha';
      return `fa-sort-${typ}-${dir}`;
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

    sortBy: {
      handler(sortBy) {
        this.active = sortBy;
      },
      immediate: true,
    },

    direction: {
      handler() {
        this.ascending = this.direction === 'ascending' || this.direction === 'asc';
      },
      immediate: true,
    },
  },

  methods: {
    normalizeField(fieldDefinition: SortFieldDefinition, name?: string): SortField {
      const field: SortField = {
        name: typeof fieldDefinition === 'object' ? fieldDefinition.name : '',
        label: typeof fieldDefinition === 'object' ? fieldDefinition.label : fieldDefinition,
        type: typeof fieldDefinition === 'object' ? fieldDefinition.type : 'alpha',
      };
      field.name = name || field.name || field.label || '';
      if (!field.label) {
        field.label = name;
      }
      return field;
    },

    select(field: SortField) {
      this.active = field.name;
      this.$emit('change', this.active, this.ascending ? 'ascending' : 'descending');
    },

    invert() {
      this.ascending = !this.ascending;
      this.$emit('change', this.active, this.ascending ? 'ascending' : 'descending');
    },
  },
});
</script>

<style>
.sort-pf .form-group .btn-link {
  color: #222;
  font-size: 16px;
  line-height: 1;
  padding: 4px 0;
  margin-left: 10px;
}

.sort-pf .form-group .btn-link:hover {
  color: #0099d3;
}
</style>
