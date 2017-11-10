<template>
  <div ref="select" :class="{open: show, disabled: disabled, dropdown: isLi, 'input-group-btn': inInput, 'btn-group': !isLi && !inInput}">
    <div ref="btn" class="form-control dropdown-toggle" :tabindex="tabindex" :disabled="disabled" :readonly="readonly"
      @blur="canSearch ? null : close"
      @click="toggle"
      @keydown.esc.stop.prevent="close"
      @keydown.space.stop.prevent="toggle"
      @keydown.enter.stop.prevent="toggle"
    >
      <span class="btn-content" v-html="showPlaceholder || selected"></span>
      <span v-if="clearButton && values.length" class="close" @click="clear">&times;</span>
    </div>

    <ul class="dropdown-menu">
      <template>
        <li v-if="canSearch" class="bs-searchbox">
          <input type="text" :placeholder="typeof search == 'string' ? search : ''" class="form-control" autocomplete="off" ref="search"
            v-model="filter"
            @keyup.esc="close"
          />
          <span v-show="filter" class="close" @click="clearSearch">&times;</span>
        </li>

        <li v-if="required && !clearButton"><a @mousedown.prevent="clear() && close()">{{placeholder}}</a></li>

        <slot></slot>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pf-select',

  props: {
    clearButton: Boolean,
    closeOnSelect: Boolean,
    disabled: Boolean,
    minSearch: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default() {
        return `pf-select-uid-${this._uid}`;
      },
    },
    placeholder: String,
    readonly: Boolean,
    required: Boolean,
    search: Boolean,
    tabindex: String,
  },

  data () {
    return {
      filter: '',
      show: false,
      isLi: false,
      inInput: false,
    };
  },

  computed: {
    canSearch() {
      return this.minSearch ? this.$children.length >= this.minSearch : this.search;
    },

    selected () {
      return this.$children.reduce(function(labels, c) {
        if (c.checked) {
          labels.push(c.$el.innerText);
        }
        return labels;
      }, []).join(', ');
    },

    showPlaceholder () {
      return this.values.length ? '' : this.placeholder;
    },

    values () {
      return this.$children.reduce(function(values, c) {
        if (c.checked) {
          values.push(c.value);
        }
        return values;
      }, []);
    },
  },

  watch: {
    show(val) {
      if (val) {
        this.$refs.search ? this.$refs.search.focus() : this.$refs.btn.focus();
      } else {
        this.$refs.btn.focus();
      }
    },

    filter() {
      for (const c of this.$children) {
        c.filter = this.filter;
      }
    },
  },

  methods: {
    close () {
      this.show = false;
    },

    clear () {
      if (this.disabled || this.readonly) {
        return;
      }
      this.toggle();
    },

    clearSearch () {
      this.filter = '';
      this.$refs.search.focus();
    },

    toggle () {
      this.show = !this.show;
    },

    outerClick(e) {
      if (!this.$el.contains(e.target)) {
        this.close();
      }
    },

    select(option) {
      if (this.closeOnSelect) {
        this.close();
      }
    },
  },

  mounted() {
    this.isLi = this.$el.parentNode.tagName == 'LI';
    this.inInput = !this.isLi && this.$parent._input;
    document.addEventListener('click', this.outerClick);
  },

  beforeDestroy() {
    document.removeEventListener('click', this.outerClick);
  },
}
</script>

<style scoped>
.form-control.dropdown-toggle{
  height: auto;
  padding-right: 24px;
}
.form-control.dropdown-toggle:after{
  content: ' ';
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
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
.form-control.dropdown-toggle>.close { margin-left: 5px;}
.btn-group-justified .dropdown-toggle>span:not(.close) {
  width: calc(100% - 18px);
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: -4px;
}
.btn-group-justified .dropdown-menu { width: 100%; }
</style>
