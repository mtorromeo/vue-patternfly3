<template functional>
  <dropdown
    v-bind="data.attrs"
    v-on="listeners"
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
  >
    <button role="button" aria-haspopup="true" type="button" class="btn dropdown-toggle" :class="[props.type ? `btn-${props.type}` : '', props.btnClass]">
      <slot name="text">
        <span class="dropdown-title">{{props.text}}</span>
      </slot> <span class="caret"></span>
    </button>

    <template slot="dropdown">
      <slot/>
    </template>
  </dropdown>
</template>

<script>
import {Dropdown} from 'uiv';

export default {
  name: 'pf-dropdown',

  components: {
    Dropdown,
  },

  props: {
    text: String,
    type: {
      type: String,
      default: 'default',
    },
    btnClass: String,
  },
};
</script>
