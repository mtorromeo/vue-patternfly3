<template>
<div class="card-pf" :class="{'card-pf-accented': accented}">
  <div v-if="showHeader" :class="{'card-pf-heading': showTitlesSeparator, 'card-pf-heading-no-bottom': !showTitlesSeparator}">
    <dropdown v-if="showFilterInHeader" class="card-pf-time-frame-filter pull-right" :text="currentFilter.label">
      <li v-for="item in filter.filters" :class="{'selected': item === currentFilter}">
        <a href="javascript:void(0)" role="menuitem" tabindex="-1" @click="filterClicked(item)">
          {{item.label}}
        </a>
      </li>
    </dropdown>
    <h2 class="card-pf-title">{{title}}</h2>
  </div>

  <span v-if="subTitle" class="card-pf-subtitle">{{subTitle}}</span>

  <div class="card-pf-body">
    <slot></slot>
  </div>

  <div v-if="showFooter || showFilterInFooter" class="card-pf-footer">
    <dropdown v-if="showFilterInFooter" class="card-pf-time-frame-filter pull-right" :text="currentFilter.label">
      <li v-for="item in filter.filters" :class="{'selected': item === currentFilter}">
        <a href="javascript:void(0)" role="menuitem" tabindex="-1" @click="filterClicked(item)">
          {{item.label}}
        </a>
      </li>
    </dropdown>
    <p v-if="showFooter">
      <a v-if="footHref" :href="footHref" :class="{'card-pf-link-with-icon': footIcon, 'card-pf-link': !footIcon}">
        <span v-if="footIcon" class="card-pf-footer-text" :class="footIcon"></span>
        <span v-if="footNote" class="card-pf-footer-text">{{footNote}}</span>
      </a>
      <template v-else>
        <span v-if="footIcon" class="card-pf-footer-text" :class="footIcon"></span>
        <span v-if="footNote" class="card-pf-footer-text">{{footNote}}</span>
      </template>
    </p>
  </div>
</div>
</template>

<script>
import VueStrap from 'vue-strap';

export default {
  name: 'pf-card',

  components: {
    dropdown: VueStrap.dropdown,
  },

  props: {
    title: String,
    subTitle: String,
    footNote: String,
    footHref: String,
    footIcon: String,
    filter: {
      type: Object,
      default() {
        return {};
      },
    },
    accented: {
      type: Boolean,
      default: true,
    },
    showTitlesSeparator: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    filterClicked(filter) {
      this.$emit('filter', filter);
    },
  },

  computed: {
    currentFilter() {
      if (!this.filter || !this.filter.filters) {
        return null;
      }
      if (this.filter.defaultFilter) {
        return this.filter.filters[this.filter.defaultFilter];
      }
      return this.filter.filters[0];
    },

    showFilterInHeader() {
      return this.filter && this.filter.filters && this.filter.position && this.filter.position === 'header';
    },

    showFilterInFooter() {
      return this.filter && this.filter.filters && this.filter.position && this.filter.position === 'footer';
    },

    showHeader() {
      return this.title || this.showFilterInHeader;
    },

    showFooter() {
      return this.footNote || this.footIcon;
    },
  },
};
</script>
