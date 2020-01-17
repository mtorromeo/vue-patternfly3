<template>
  <portal to="modals-target">
    <div class="modal" role="dialog" key="modal" @click="clickOutside">
      <div ref="dialog" class="modal-dialog">
        <component :is="form ? 'form' : 'div'" class="modal-content" :target="target" :method="method" @submit="$emit('submit', $event)">
          <div class="modal-header" v-if="title">
            <button type="button" class="close" @click="cancel">
              <pf-icon name="pficon-close"/>
            </button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
          <div class="modal-body">
            <slot/>
          </div>
          <div class="modal-footer" v-if="withSlot.footer || cancelButton || confirmButton">
            <slot name="footer">
              <button type="button" class="btn btn-default" v-if="cancelButton" @click="cancel">{{cancelButton}}</button>
              <button :type="form ? 'submit' : 'button'" class="btn btn-primary" v-if="confirmButton" @click="confirm">{{confirmButton}}</button>
            </slot>
          </div>
        </component>
      </div>
    </div>

    <div class="modal-backdrop in" key="backdrop" @click="clickOutside"></div>
  </portal>
</template>

<script>
import {Portal} from 'portal-vue';
import SlotMonitor from '../mixins/SlotMonitor';

function isDescendantOf(node, ancestor) {
  while (node) {
    if (node === ancestor) {
      return true;
    }
    node = node.parentElement;
  }
  return false;
}

export default {
  name: 'pf-modal',

  mixins: [SlotMonitor],

  components: {
    Portal,
  },

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

    clickOutside(e) {
      if (this.outsideClose && !isDescendantOf(e.target, this.$refs.dialog)) {
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
