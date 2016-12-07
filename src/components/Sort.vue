<template>
<div class="sort-pf form-group">
  <dropdown :text="current.title">
    <li v-for="(item, i) in fields" :class="{'selected': item === current}">
      <a href="javascript:void(0);" class="sort-field" role="menuitem" tabindex="-1" @click="select(i)">
        {{item.title}}
      </a>
    </li>
  </dropdown>
  <button class="btn btn-link" type="button"  @click="invert">
    <span class="sort-direction" :class="sortIconClass"></span>
  </button>
</div>
</template>

<script>
import VueStrap from 'vue-strap';

export default {
  name: 'pf-sort',

  components: {
    dropdown: VueStrap.dropdown,
  },

  props: {
    fields: {
      type: Array,
      default() {
        return [];
      },
    },
    direction: {
      type: String,
      default: 'ascending',
    },
    selected: Number,
  },

  data() {
    return {
      active: -1,
      ascending: true,
    };
  },

  watch: {
    selected: {
      handler () {
        this.active = this.selected;
      },
      immediate: true,
    },
    direction: {
      handler () {
        this.ascending = this.direction == 'ascending';
      },
      immediate: true,
    },
  },

  computed: {
    current() {
      if (typeof this.active === 'undefined' || this.active >= this.fields.length || this.active < 0) {
        this.select(0);
        return this.fields.length ? this.fields[0] : {};
      }
      return this.fields[this.active];
    },

    sortIconClass() {
      const dir = this.ascending ? 'asc' : 'desc';
      const typ = this.current.type == 'numeric' ? 'numeric' : 'alpha';
      return `fa fa-sort-${typ}-${dir}`;
    },
  },

  methods: {
    select(i) {
      this.active = i;
      this.$emit('change', this.current, this.ascending);
    },
    invert() {
      this.ascending = !this.ascending;
      this.$emit('change', this.current, this.ascending);
    },
  },
};
</script>
