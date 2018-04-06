<template functional>
  <portal-target name="modals-target" :transition="{name: 'drop-fade'}" multiple/>
</template>

<style>
.modal-backdrop.drop-fade-enter-active,
.modal-backdrop.drop-fade-leave-active,
.modal.drop-fade-enter-active,
.modal.drop-fade-leave-active {
  transition: transform .2s linear, opacity .2s linear;
}

.modal.drop-fade-enter,
.modal.drop-fade-leave-to {
  transform: translateY(-100%);
}

.modal.drop-fade-enter,
.modal.drop-fade-leave-to,
.modal-backdrop.drop-fade-enter,
.modal-backdrop.drop-fade-leave-to {
  opacity: 0;
}
</style>

<script>
import {PortalTarget} from 'portal-vue';

export default {
  name: 'pf-modal-target',

  components: {
    PortalTarget,
  },
};
</script>
