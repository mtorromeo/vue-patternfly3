<template>
<transition name="modal">
    <div class="modal-mask" v-if="showConfirm">
        <div class="modal-wrapper">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" @click="$emit('on:close')">
                        <span class="pficon pficon-close"></span>
                        </button>
                        <h4 class="modal-title">Confirmation</h4>
                    </div>
                    <div class="modal-body">
                        {{message}}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" @click="$emit('on:close')">Cancel</button>
                        <button type="button" class="btn btn-primary" @click="confirm">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
export default {
  name: "pf-confirm",
  props: {
    message: String,
    showConfirm: {
      Type: Boolean,
      default: false
    },
    data: null
  },
  methods: {
    confirm() {
      this.$emit("on:confirm", this.data);
    }
  }
};
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>