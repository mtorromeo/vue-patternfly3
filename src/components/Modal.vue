<template>
  <teleport :to="modalsTarget || 'body'">
    <transition-group name="pf-drop-fade">
      <div v-if="show" key="modal" ref="modal" v-bind="$attrs" class="modal" role="dialog" @click="clickOutside">
        <div ref="dialog" class="modal-dialog">
          <component :is="form ? 'form' : 'div'" class="modal-content" :target="target" :method="method" @submit="$emit('submit', $event)">
            <div v-if="title" class="modal-header">
              <button type="button" class="close" @click="cancel">
                <pf-icon name="pficon-close" />
              </button>
              <h4 class="modal-title">
                {{ title }}
              </h4>
            </div>
            <div class="modal-body">
              <slot />
            </div>
            <div v-if="$slots.footer || cancelButton || confirmButton" class="modal-footer">
              <slot name="footer">
                <button v-if="cancelButton" type="button" class="btn btn-default" @click="cancel">
                  {{ cancelButton }}
                </button>
                <button v-if="confirmButton" :type="form ? 'submit' : 'button'" class="btn btn-primary" @click="confirm">
                  {{ confirmButton }}
                </button>
              </slot>
            </div>
          </component>
        </div>
      </div>

      <div v-if="show" key="backdrop" ref="backdrop" class="modal-backdrop in" @click="clickOutside" />
    </transition-group>
  </teleport>
</template>

<script>
export default {
  name: 'pf-modal',

  inject: ['modalsTarget'],

  props: {
    title: String,
    form: Boolean,
    target: {
      type: String,
      default: '',
    },
    method: {
      type: String,
      default: '',
    },
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
    show: Boolean,
  },

  emits: ['submit', 'confirm', 'cancel', 'close'],

  mounted() {
    document.documentElement.classList.add('modal-open');
  },

  beforeUnmount() {
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

    clickOutside(e) {
      if (this.outsideClose) {
        if ([this.$refs.modal, this.$refs.backdrop].indexOf(e.target) !== -1) {
          this.cancel();
        }
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

.modal-backdrop.pf-drop-fade-enter-active,
.modal-backdrop.pf-drop-fade-leave-active,
.modal.pf-drop-fade-enter-active,
.modal.pf-drop-fade-leave-active {
  transition: transform .2s linear, opacity .2s linear;
}

.modal.pf-drop-fade-enter-from,
.modal.pf-drop-fade-leave-to {
  transform: translateY(-100%);
}

.modal.pf-drop-fade-enter-from,
.modal.pf-drop-fade-leave-to,
.modal-backdrop.pf-drop-fade-enter-from,
.modal-backdrop.pf-drop-fade-leave-to {
  opacity: 0;
}
</style>
