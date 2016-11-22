<template>
<div class="sort-pf">
  <form>
    <div class="form-group">
      <div class="dropdown btn-group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{current.title}}
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li v-for="(i, item) in fields" :class="{'selected': item === current}">
            <a href="javascript:void(0);" class="sort-field" role="menuitem" tabindex="-1" @click="selected = i">
              {{item.title}}
            </a>
          </li>
        </ul>
      </div>
      <button class="btn btn-link" type="button"  @click="invert">
        <span class="sort-direction" :class="sortIconClass"></span>
      </button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'pf-sort',

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
      ascending: true,
    };
  },

  watch: {
    direction: {
      handler () {
        this.ascending = this.direction == 'ascending';
      },
      immediate: true,
    },
  },

  computed: {
    current() {
      if (typeof this.selected === 'undefined' || this.selected >= this.fields.length) {
        return this.fields.length ? this.fields[0] : {};
      }
      return this.fields[this.selected];
    },

    sortIconClass() {
      const dir = this.ascending ? 'asc' : 'desc';
      const typ = this.current.type == 'numeric' ? 'numeric' : 'alpha';
      return `fa fa-sort-${typ}-${dir}`;
    },
  },

  methods: {
    invert() {
      this.ascending = !this.ascending;
    },
  },
};
</script>
