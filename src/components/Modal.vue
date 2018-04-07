<template>
  <portal to="modals-target">
    <div class="modal" role="dialog" key="modal" @click="clickOutside">
      <div class="modal-dialog" @click.stop>
        <div class="modal-content">
          <div class="modal-header" v-if="title">
            <button type="button" class="close" @click="cancel">
            <pf-icon name="pficon-close"/>
            </button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer" v-if="$slots.footer || $scopedSlots.footer || cancelButton || confirmButton">
            <slot name="footer">
              <button type="button" class="btn btn-default" v-if="cancelButton" @click="cancel">{{cancelButton}}</button>
              <button type="button" class="btn btn-primary" v-if="confirmButton" @click="confirm">{{confirmButton}}</button>
            </slot>
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
    confirmButton: {
      type: String,
      default: 'OK',
    },
    cancelButton: {
      type: String,
      default: 'Cancel',
    },
    outsideClose: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    document.documentElement.classList.add('modal-open');
  },

  beforeDestroy() {
    document.documentElement.classList.remove('modal-open');
  },

  methods: {
    confirm() {
      this.$emit('confirm');
      this.close();
    },

    cancel() {
      this.$emit('cancel');
      this.close();
    },

    close() {
      this.$emit('close');
    },

    clickOutside() {
      if (this.outsideClose) {
        this.cancel();
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
