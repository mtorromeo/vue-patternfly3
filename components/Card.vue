<template>
<div class="card-pf" :class="{'card-pf-accented': accented}">
  <div v-if="showHeader" :class="{'card-pf-heading': showTitlesSeparator, 'card-pf-heading-no-bottom': !showTitlesSeparator}">
    <div v-if="showFilterInHeader" class="dropdown card-pf-time-frame-filter">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{currentFilter.label}}
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu dropdown-menu-right" role="menu">
        <li v-for="item in filter.filters" :class="{'selected': item === currentFilter}">
          <a role="menuitem" tabindex="-1" @click="filterClicked(item)">
            {{item.label}}
          </a>
        </li>
      </ul>
    </div>
    <h2 class="card-pf-title">{{title}}</h2>
  </div>

  <span v-if="subTitle" class="card-pf-subtitle">{{subTitle}}</span>

  <div class="card-pf-body">
    <slot></slot>
  </div>
  <div v-if="showFooter || showFilterInFooter" class="card-pf-footer">
    <div v-if="showFilterInFooter" class="dropdown card-pf-time-frame-filter">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{currentFilter.label}}
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu dropdown-menu-right" role="menu">
        <li v-for="item in filter.filters" :class="{'selected': item === currentFilter}">
          <a role="menuitem" tabindex="-1" @click="filterClicked(item)">
            {{item.label}}
          </a>
        </li>
      </ul>
    </div>
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
export default {
  name: 'pf-card',

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
