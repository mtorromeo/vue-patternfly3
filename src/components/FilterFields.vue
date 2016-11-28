<template>
<div class="filter-pf filter-fields">
  <form @submit="$event.preventDefault()">
    <div class="form-group toolbar-pf-filter">
      <div class="input-group">
        <dropdown :text="current.title" class="input-group-btn">
          <li v-for="(item, i) in fields">
            <a class="filter-field" role="menuitem" tabindex="-1" @click="selected = i">
              {{item.title}}
            </a>
          </li>
        </dropdown>
        <v-select ref="select" class="filter-select" v-if="isSelect" @input="set" :placeholder="current.placeholder" :close-on-select="true">
          <slot name="options" :field="current">
            <v-option :value="item" v-for="item in current.values">{{item}}</v-option>
          </slot>
        </v-select>
        <div v-else>
          <input class="form-control" type="text" :value="value"
                 @keyup.enter.stop="set" :placeholder="current.placeholder">
        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import Dropdown from 'vue-strap/src/components/Dropdown.vue';
import VSelect from 'vue-strap/src/components/Select.vue';
import VOption from 'vue-strap/src/Option.vue';

export default {
  name: 'pf-filter-fields',

  components: {
    Dropdown,
    VSelect,
    VOption,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
    fields: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      selected: 0,
    };
  },

  computed: {
    current() {
      if (typeof this.selected === 'undefined' || this.selected >= this.fields.length) {
        return this.fields.length ? this.fields[0] : {};
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
          this.$emit('filter', this.current, value.target.value);
        } else {
          this.$emit('filter', this.current, value);
        }
      }
      if (this.isSelect) {
        this.$refs.select.clear();
      }
    },
  },
};
</script>
