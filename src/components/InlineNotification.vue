<template>
<div class="alert"
     :class="[alertClass, {'alert-dismissable': !persistent}]">
  <button v-show="!persistent" @click="dismiss"
          type="button" class="close" data-dismiss="alert" aria-hidden="true">
    <span class="pficon pficon-close"></span>
  </button>
  <span class="pficon" :class="[typeIcon]"></span>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'pf-inline-notification',

  props: {
    type: {
      type: String,
      default: 'info',
    },
    persistent: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    alertClass() {
      return `alert-${this.type || 'info'}`;
    },
    typeIcon() {
      switch (this.type) {
        case 'success':
          return 'pficon-ok';
        case 'danger':
          return 'pficon-error-circle-o';
        case 'warning':
          return 'pficon-warning-triangle-o';
        default:
          return 'pficon-info';
      }
    },
  },

  methods: {
    dismiss() {
      this.$emit('dismiss', this);
    },
  }
};
</script>
