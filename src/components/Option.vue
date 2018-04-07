<template>
  <li v-if="!filtered" :class="{'selected': checked}">
    <a href="javascript:void(0)" @click="check" role="menuitem">
      <input ref="input" type="radio" :name="name" :value="value" :checked="checked" style="display:none">
      <slot></slot>
      <pf-icon name="glyphicon-close" class="check-mark" v-show="checked"/>
    </a>
  </li>
</template>

<script>
export default {
  name: 'pf-option',

  props: {
    name: {
      type: String,
      default() {
        return this.$parent.name;
      },
    },
    value: {},
    checkedValue: {},
  },

  data() {
    return {
      label: '',
      filter: '',
    };
  },

  mounted() {
    this.label = this.$el.innerText;
  },

  methods: {
    check() {
      this.$emit('input', this.checkedValue);
      this.$parent.select(this);
    },
  },

  computed: {
    checked() {
      return this.checkedValue == this.value;
    },

    filtered() {
      if (!this.label || !this.filter) {
        return false;
      }
      return this.label.toLowerCase().indexOf(this.filter) === -1;
    },
  },
};
</script>
