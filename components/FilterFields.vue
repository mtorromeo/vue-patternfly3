<template>
<div class="filter-pf filter-fields">
  <form @submit="$event.preventDefault()">
    <div class="form-group toolbar-pf-filter">
      <div class="input-group">
        <div dropdown class="input-group-btn">
          <button dropdown-toggle type="button" class="btn btn-default dropdown-toggle filter-fields" aria-haspopup="true" aria-expanded="false" tooltip="Filter by" tooltip-placement="top">
            {{current.title}}
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li v-for="(i, item) in fields">
              <a class="filter-field" role="menuitem" tabindex="-1" @click="selected = i">
                {{item.title}}
              </a>
            </li>
          </ul>
        </div>
        <div v-if="isSelect">
          <input class="form-control" type="text" :value="value"
                 @keyup.enter.stop="set" :placeholder="current.placeholder">
        </div>
        <div v-else>
          <select class="form-control filter-select" @input="set">
            <option value="">{{current.placeholder}}</option>
            <slot name="options" :field="current">
              <option :value="item" v-for="item in current.values">{{item}}</option>
            </slot>
          </select>
        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'pf-filter-fields',

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
    selected: Number,
  },

  computed: {
    current() {
      if (typeof this.selected === 'undefined' || this.selected >= this.fields.length) {
        return this.fields.length ? this.fields[0] : {};
      }
      return this.fields[this.selected];
    },

    isSelect() {
      return typeof this.current.values === 'undefined';
    },
  },

  methods: {
    set(e) {
      const input = e.target;
      this.$emit('filter', this.current, input.value);
      input.value = '';
    },
  },
};
</script>
