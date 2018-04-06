<template>
<form class="content-view-pf-pagination clearfix" :class="[`${type}-view-pf-pagination`]" aria-label="Search results pages">
  <div class="form-group">
    <pf-select ref="perpage" button close-on-select v-if="itemsPerPageOptions.length" class="pagination-pf-pagesize">
      <pf-option :value="itemsPerPage" @input="$emit('update:itemsPerPage', $event)" :checked-value="item" v-for="(item, i) in itemsPerPageOptions" :key="i">{{item}}</pf-option>
    </pf-select>
    <span @click.stop="openPerPageSelect">per page</span>
  </div>

  <div class="form-group">
    {{firstItem}}-{{lastItem}} of {{totalItems}}
    <ul class="pagination pagination-pf-back">
      <li :class="{disabled: page == 1}">
        <a href="javascript:void(0)" title="First Page" @click="setPage(1)">
          <span class="i fa fa-angle-double-left" aria-hidden="true"></span>
        </a>
      </li>
      <li :class="{disabled: page <= 1}">
        <a href="javascript:void(0)" title="Previous Page" @click="setPage(page - 1)">
          <span class="i fa fa-angle-left" aria-hidden="true"></span>
        </a>
      </li>
    </ul>

    <label for="`pf-paginate-control-input-${_uid}`" class="sr-only">Current Page</label>
    <input :id="`pf-paginate-control-input-${_uid}`" type="text" class="pagination-pf-page" v-model="page" :style="{
      width: (pages.toString().length * .8 + 1.5) + 'em'
    }">
    of {{pages}}

    <ul class="pagination pagination-pf-forward">
      <li :class="{disabled: page >= pages}">
        <a href="javascript:void(0)" title="Next Page" @click="setPage(page + 1)">
          <span class="i fa fa-angle-right" aria-hidden="true"></span>
        </a>
      </li>
      <li :class="{disabled: page >= pages}">
        <a href="javascript:void(0)" title="Last Page" @click="setPage(pages)">
          <span class="i fa fa-angle-double-right" aria-hidden="true"></span>
        </a>
      </li>
    </ul>
  </div>
</form>
</template>

<script>
import PfSelect from './Select.vue';
import PfOption from './Option.vue';

export default {
  name: 'pf-paginate-control',

  components: {
    PfSelect,
    PfOption,
  },

  model: {
    prop: 'page',
    event: 'change',
  },

  props: {
    page: Number,
    type: {
      type: String,
      default: 'list',
      validator: type => ['list', 'card', 'table'].indexOf(type) >= 0,
    },
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 25,
    },
    itemsPerPageOptions: {
      type: Array,
      default() {
        return [10, 25, 50, 100, 500];
      },
    },
  },

  computed: {
    pages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },

    firstItem() {
      return (this.page - 1) * this.itemsPerPage + 1;
    },

    lastItem() {
      return Math.min(this.page * this.itemsPerPage, this.totalItems);
    },
  },

  methods: {
    setPage(page) {
      page = Math.max(Math.min(page, this.pages), 1);
      this.$emit('change', page);
    },

    openPerPageSelect() {
      this.$refs.perpage.focus();
      this.$refs.perpage.open();
    },
  },
};
</script>

<style>
.content-view-pf-pagination .form-group {
  align-items: center;
}
</style>
