<template>
  <div
    ref="select"
    v-bind="ouiaProps"
    class="bootstrap-select"
    :class="{
      open: show,
      disabled,
      dropdown: isLi,
      'input-group-btn': !isLi && inInput,
      'btn-group': !isLi && !inInput,
    }"
  >
    <component
      :is="btnType"
      ref="btn"
      :type="button ? 'button' : null"
      class="dropdown-toggle"
      :class="{
        'btn btn-default': button,
        'form-control': !button,
      }"
      :tabindex="tabindex"
      :disabled="disabled || null"
      :readonly="readonly"
      role="button"
      :aria-expanded="show.toString()"
      @blur="canSearch ? null : close"
      @click="toggle"
      @keydown.esc.stop.prevent="close"
      @keydown.space.stop.prevent="toggle"
      @keydown.enter.stop.prevent="toggle"
    >
      <span
        :class="{
          'filter-option pull-left': button,
          'btn-content': !button,
        }"
        v-html="showPlaceholder || selected"
      />
      <span v-if="clearButton && values.length" class="close" @click="clear()">&times;</span>
      <span v-if="button" class="bs-caret">
        <span class="caret" />
      </span>
    </component>

    <ul class="dropdown-menu">
      <li v-if="canSearch" class="bs-searchbox">
        <input
          ref="search"
          v-model="filter"
          type="text"
          :placeholder="typeof search == 'string' ? search : ''"
          class="form-control"
          autocomplete="off"
          @keyup.esc="close"
        />
        <span v-show="filter" class="close" @click="clearSearch">&times;</span>
      </li>

      <li v-if="required && !clearButton">
        <a @mousedown.prevent="clear(true)">{{ placeholder }}</a>
      </li>

      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { provideChildrenTracker } from '../use';
import { ouiaProps, useOUIAProps } from '../ouia';
import { DefineComponent, defineComponent, inject, provide, Ref, ref } from 'vue';
import PfOption, { OptionSymbol } from './Option.vue';

const PfSelect = defineComponent({
  name: 'PfSelect',

  props: {
    button: Boolean,
    clearButton: Boolean,
    closeOnSelect: Boolean,
    disabled: Boolean,
    minSearch: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: null,
    },
    placeholder: String,
    readonly: Boolean,
    required: Boolean,
    search: Boolean,
    tabindex: String,
    ...ouiaProps,
  },

  setup(props) {
    const show = ref(false);

    function select() {
      if (props.closeOnSelect) {
        show.value = false;
      }
    }

    provide('select', select);
    provide('selectName', props.name);

    return {
      show,
      select,
      inInput: inject('inInput', false),
      options: provideChildrenTracker(OptionSymbol) as Ref<(InstanceType<typeof PfOption>)[]>,
      ...useOUIAProps(props),
    };
  },

  data(this: void) {
    return {
      filter: '',
      isLi: false,
      selected: '',
    };
  },

  computed: {
    canSearch() {
      return this.minSearch ? this.options.length >= this.minSearch : this.search;
    },

    showPlaceholder() {
      return this.values.length ? '' : this.placeholder;
    },

    values() {
      return this.options.reduce(function(values, c) {
        if (c.checked) {
          values.push(c.modelValue);
        }
        return values;
      }, []);
    },

    btnType() {
      return this.button ? 'button' : 'div';
    },
  },

  watch: {
    show(val) {
      if (val && this.$refs.search instanceof HTMLElement) {
        this.$refs.search.focus();
      } else if (this.$refs.btn instanceof HTMLElement) {
        this.$refs.btn.focus();
      }
    },

    filter() {
      for (const c of this.options) {
        c.filter = this.filter;
      }
    },
  },

  updated() {
    this.selected = this.options.reduce(function(labels, c) {
      if (c.checked) {
        labels.push(c.$el.innerText);
      }
      return labels;
    }, []).join(', ');
  },

  mounted() {
    this.isLi = this.$el && this.$el.parentNode.tagName === 'LI';
    document.addEventListener('click', this.outerClick);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.outerClick);
  },

  methods: {
    close() {
      this.show = false;
    },

    open() {
      this.show = true;
    },

    clear(close = false) {
      if (this.disabled || this.readonly) {
        return;
      }
      if (close) {
        this.close();
      } else {
        this.toggle();
      }
    },

    clearSearch() {
      this.filter = '';
      if (this.$refs.search instanceof HTMLElement) {
        this.$refs.search.focus();
      }
    },

    toggle() {
      this.show = !this.show;
    },

    outerClick(e: MouseEvent | TouchEvent) {
      if (this.$el && !this.$el.contains(e.target)) {
        this.close();
      }
    },

    focus() {
      if (this.$refs.btn instanceof HTMLElement) {
        this.$refs.btn.focus();
      }
    },
  },
});

export function isPfSelect(component: unknown): component is InstanceType<typeof PfSelect> {
  return typeof component === 'object' && (component as DefineComponent).$options?.name === 'PfSelect';
}

export default PfSelect;
</script>

<style scoped>
.form-control.dropdown-toggle {
  height: auto;
  padding-right: 24px;
}
.form-control.dropdown-toggle:after {
  content: " ";
  position: absolute;
  right: 13px;
  top: 50%;
  margin: -1px 0 0;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.bs-searchbox {
  position: relative;
  margin: 4px 8px;
}
.bs-searchbox .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
.bs-searchbox input:focus,
.form-control.dropdown-toggle:focus {
  outline: 0;
  border-color: #66afe9 !important;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.form-control.dropdown-toggle > .close {
  margin-left: 5px;
}
.btn-group-justified .dropdown-toggle > span:not(.close) {
  width: calc(100% - 18px);
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: -4px;
}
.btn-group-justified .dropdown-menu {
  width: 100%;
}
</style>
