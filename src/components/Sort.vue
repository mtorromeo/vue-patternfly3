<template>
<div class="sort-pf">
  <pf-dropdown :text="current.label">
    <li v-for="field in normFields" :key="field.name" :class="{'selected': active == field.name}">
      <a href="javascript:void(0);" class="sort-field" role="menuitem" tabindex="-1" @click="select(field)">
        {{field.label}}
      </a>
    </li>
  </pf-dropdown>
  <button class="btn btn-link" type="button"  @click="invert">
    <pf-icon class="sort-direction" :name="sortIcon"/>
  </button>
</div>
</template>

<script>
import PfDropdown from './Dropdown.vue';

export default {
  name: 'pf-sort',

  components: {
    PfDropdown,
  },

  props: {
    fields: {
      type: [Array, Object],
      default() {
        return [];
      },
    },
    sortBy: String,
    direction: {
      type: String,
      default: 'ascending',
    },
  },

  data() {
    return {
      normFields: [],
      active: '',
      ascending: true,
    };
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
    sortBy: {
      handler(sortBy) {
        this.active = sortBy;
      },
      immediate: true,
    },
    direction: {
      handler() {
        this.ascending = this.direction == 'ascending';
      },
      immediate: true,
    },
  },

  computed: {
    current() {
      if (!this.active) {
        return {
          label: 'Sort by',
        };
      }
      for (const field of this.normFields) {
        if (field.name == this.active) {
          return field;
        }
      }
      return {
        label: 'Sort by',
      };
    },

    sortIcon() {
      const dir = this.ascending ? 'asc' : 'desc';
      const typ = this.current.type == 'numeric' ? 'numeric' : 'alpha';
      return `fa-sort-${typ}-${dir}`;
    },
  },

  methods: {
    fieldDefinition(field, name) {
      if (typeof field == 'object') {
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
      if (!field.type) {
        field.type = 'alpha';
      }
      return field;
    },
    select(field) {
      this.active = field.name;
      this.$emit('change', this.active, this.ascending ? 'ascending' : 'descending');
    },
    invert() {
      this.ascending = !this.ascending;
      this.$emit('change', this.active, this.ascending ? 'ascending' : 'descending');
    },
  },
};
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
