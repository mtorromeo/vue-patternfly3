<template>
  <portal to="modals-target">
    <div class="modal" role="dialog" key="modal" @click="clickOutside">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="$emit('close')">
            <span class="pficon pficon-close"></span>
            </button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" @click="$emit('close')">Close</button>
            <slot name="button"></slot>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-backdrop in" key="backdrop" @click="clickOutside"></div>
  </portal>
</template>

<script>
import {Portal} from 'portal-vue';

export default {
  name: 'pf-modal',

  components: {
    Portal,
  },

  props: {
    title: String,
    outsideClose: {
      type: Boolean,
      default: false,
    },
  },

  clickOutside: {
    clickOuside() {
      if (this.outsideClose) {
        this.$emit('close');
      }
    },
  },
};
</script>

<style>
.modal {
  display: block !important;
  transform: translateY(0);
  bottom: auto;
}
</style>
