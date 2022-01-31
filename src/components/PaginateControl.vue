<template>
  <form v-bind="ouiaProps" class="content-view-pf-pagination clearfix" :class="[`${type}-view-pf-pagination`]" aria-label="Search results pages">
    <div v-if="itemsPerPageOptions && itemsPerPageOptions.length" class="form-group">
      <pf-select ref="perpage" button close-on-select class="pagination-pf-pagesize">
        <pf-option v-for="(item, i) in itemsPerPageOptions" :key="i" :model-value="itemsPerPage" :checked-value="item" @update:model-value="$emit('update:itemsPerPage', $event)">
          {{ item }}
        </pf-option>
      </pf-select>
      <span @click.stop="openPerPageSelect">{{ labelPerPage }}</span>
    </div>

    <div v-if="$slots.default" class="form-group">
      <slot />
    </div>

    <div class="form-group">
      {{ firstItem }}-{{ lastItem }} {{ labelOf }} {{ totalItems }}
      <ul class="pagination pagination-pf-back">
        <li :class="{disabled: page == 1}">
          <a href="javascript:void(0)" :title="labelFirstPage" @click.prevent="setPage(1)">
            <pf-icon name="fa-angle-double-left" class="i" />
          </a>
        </li>
        <li :class="{disabled: page <= 1}">
          <a href="javascript:void(0)" :title="labelPreviousPage" @click.prevent="setPage(page - 1)">
            <pf-icon name="fa-angle-left" class="i" />
          </a>
        </li>
      </ul>

      <label for="`pf-paginate-control-input-${$.uid}`" class="sr-only">{{ labelCurrentPage }}</label>
      <input
        :id="`pf-paginate-control-input-${$.uid}`"
        type="text"
        class="pagination-pf-page"
        :style="{
          width: (pages.toString().length * .8 + 1.5) + 'em'
        }"
        :value="page"
        @change="$event.target instanceof HTMLInputElement && setPage(Number($event.target.value))"
      >
      {{ labelOf }} {{ pages }}

      <ul class="pagination pagination-pf-forward">
        <li :class="{disabled: page >= pages}">
          <a href="javascript:void(0)" :title="labelNextPage" @click.prevent="setPage(page + 1)">
            <pf-icon name="fa-angle-right" class="i" />
          </a>
        </li>
        <li :class="{disabled: page >= pages}">
          <a href="javascript:void(0)" :title="labelLastPage" @click.prevent="setPage(pages)">
            <pf-icon name="fa-angle-double-right" class="i" />
          </a>
        </li>
      </ul>
    </div>
  </form>
</template>

<script lang="ts">
import PfSelect, { isPfSelect } from './Select.vue';
import PfOption from './Option.vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PfPaginateControl',

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
      validator: (type: never) => ['list', 'card', 'table'].includes(type),
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
      default: () => [10, 25, 50, 100, 500],
    },
    labelFirstPage: {
      type: String,
      default: 'First Page',
    },
    labelLastPage: {
      type: String,
      default: 'Last Page',
    },
    labelPreviousPage: {
      type: String,
      default: 'Previous Page',
    },
    labelNextPage: {
      type: String,
      default: 'Next Page',
    },
    labelCurrentPage: {
      type: String,
      default: 'Current Page',
    },
    labelOf: {
      type: String,
      default: 'of',
    },
    labelPerPage: {
      type: String,
      default: 'per page',
    },
    ...ouiaProps,
  },

  emits: ['change', 'update:itemsPerPage'],

  setup(props) {
    return useOUIAProps(props);
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
    setPage(page: number) {
      page = Math.max(Math.min(page, this.pages), 1);
      if (!isNaN(page) && page !== this.page) {
        this.$emit('change', page);
      }
    },

    openPerPageSelect() {
      if (!(this.$refs.perpage instanceof HTMLElement)) {
        return;
      }
      if (isPfSelect(this.$refs.perpage)) {
        this.$refs.perpage.focus();
        this.$refs.perpage.open();
      }
    },
  },
});
</script>

<style>
.content-view-pf-pagination .form-group {
  align-items: center;
}
</style>
