<template>
<span class="dataTables_paginate paginate-control" aria-label="Search results pages">
  <ul class="pagination">
    <li class="first" :class="{disabled: page == 1}" title="First" @click="setPage(1)">
      <span class="i fa fa-angle-double-left" aria-hidden="true"></span>
    </li>
    <li class="prev" :class="{disabled: page <= 1}" title="Prev" @click="setPage(page - 1)">
      <span class="i fa fa-angle-left" aria-hidden="true"></span>
    </li>
  </ul>
  <div class="pagination-input">
    <input type="text" class="paginate_input" v-model="page" :style="{
      width: (.7 * (pages.toString().length + 1)) + 'em'
    }">
    <span class="paginate_of"> of <b>{{pages}}</b></span>
  </div>
  <ul class="pagination">
    <li class="next" :class="{disabled: page >= pages}" title="Next" @click="setPage(page + 1)">
      <span class="i fa fa-angle-right" aria-hidden="true"></span>
    </li>
    <li class="last" :class="{disabled: page == pages}" title="Last" @click="setPage(pages)">
      <span class="i fa fa-angle-double-right" aria-hidden="true"></span>
    </li>
  </ul>
</span>
</template>

<script>
export default {
  name: 'pf-paginate-control',

  props: {
    page: Number,
    pages: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    setPage(page) {
      page = Math.max(Math.min(page, this.pages), 1);
      this.$emit('change', page);
    },
  },
};
</script>
