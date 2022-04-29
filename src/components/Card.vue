<template>
  <div v-bind="ouiaProps" class="card-pf" :class="{'card-pf-accented': accented}">
    <div v-if="showHeader" :class="{'card-pf-heading': showTitlesSeparator, 'card-pf-heading-no-bottom': !showTitlesSeparator}">
      <slot name="header">
        <pf-dropdown v-if="showFilterInHeader" class="card-pf-time-frame-filter" :text="currentFilter?.label" menu-right>
          <li
            v-for="(item, i) in filter.filters"
            :key="i"
            :class="{'selected': item === currentFilter}"
          >
            <a href="javascript:void(0)" role="menuitem" tabindex="-1" @click.prevent="filterClicked(item)">
              {{ item.label }}
            </a>
          </li>
        </pf-dropdown>
        <h2 class="card-pf-title">
          {{ title }}
        </h2>
      </slot>
    </div>

    <span v-if="subTitle" class="card-pf-subtitle">{{ subTitle }}</span>

    <div class="card-pf-body">
      <slot />
    </div>

    <div v-if="showFooter || showFilterInFooter" class="card-pf-footer">
      <pf-dropdown v-if="showFilterInFooter" class="card-pf-time-frame-filter" :text="currentFilter?.label" menu-right>
        <li
          v-for="(item, i) in filter.filters"
          :key="i"
          :class="{'selected': item === currentFilter}"
        >
          <a href="javascript:void(0)" role="menuitem" tabindex="-1" @click.prevent="filterClicked(item)">
            {{ item.label }}
          </a>
        </li>
      </pf-dropdown>
      <p v-if="showFooter">
        <slot name="footer">
          <a v-if="footHref" :href="footHref" :class="{'card-pf-link-with-icon': footIcon, 'card-pf-link': !footIcon}">
            <pf-icon v-if="footIcon" :name="footIcon" class="cart-pf-footer-text" />
            <span v-if="footNote" class="card-pf-footer-text">{{ footNote }}</span>
          </a>
          <template v-else>
            <pf-icon v-if="footIcon" :name="footIcon" class="cart-pf-footer-text" />
            <span v-if="footNote" class="card-pf-footer-text">{{ footNote }}</span>
          </template>
        </slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import PfDropdown from './Dropdown.vue';

export interface CardFilter {
  label: string;
  value: string;
}

export interface CardFilterProp {
  filters: CardFilter[];
  defaultFilter?: number;
  position: 'header' | 'footer';
}

export default defineComponent({
  name: 'PfCard',

  components: {
    PfDropdown,
  },

  props: {
    title: String,
    subTitle: String,
    footNote: String,
    footHref: String,
    footIcon: String,
    filter: {
      type: Object as PropType<CardFilterProp>,
      default: (): CardFilterProp => ({
        filters: [],
        position: 'footer',
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (v: any) => v?.filters?.length >= 0,
    },
    accented: {
      type: Boolean,
      default: true,
    },
    showTitlesSeparator: {
      type: Boolean,
      default: true,
    },
    ...ouiaProps,
  },

  emits: {
    filter: (filter: CardFilter) => filter !== undefined,
  },

  setup(props) {
    return useOUIAProps(props);
  },

  computed: {
    currentFilter() {
      if (!this.filter?.filters) {
        return null;
      }
      if (this.filter?.defaultFilter) {
        return this.filter.filters[this.filter.defaultFilter];
      }
      return this.filter.filters[0];
    },

    showFilterInHeader() {
      return this.currentFilter && this.filter?.position === 'header';
    },

    showFilterInFooter() {
      return this.currentFilter && this.filter?.position === 'footer';
    },

    showHeader() {
      return this.$slots.header || this.title || this.showFilterInHeader;
    },

    showFooter() {
      return this.$slots.footer || this.footNote || this.footIcon;
    },
  },

  methods: {
    filterClicked(filter: CardFilter) {
      this.$emit('filter', filter);
    },
  },
});
</script>
