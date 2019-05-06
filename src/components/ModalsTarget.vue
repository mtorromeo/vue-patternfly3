<template functional>
  <portal-target name="modals-target" transition="pf-drop-fade" multiple/>
</template>

<style>
.modal-backdrop.pf-drop-fade-enter-active,
.modal-backdrop.pf-drop-fade-leave-active,
.modal.pf-drop-fade-enter-active,
.modal.pf-drop-fade-leave-active {
  transition: transform .2s linear, opacity .2s linear;
}

.modal.pf-drop-fade-enter,
.modal.pf-drop-fade-leave-to {
  transform: translateY(-100%);
}

.modal.pf-drop-fade-enter,
.modal.pf-drop-fade-leave-to,
.modal-backdrop.pf-drop-fade-enter,
.modal-backdrop.pf-drop-fade-leave-to {
  opacity: 0;
}
</style>

<script>
import Vue from 'vue';
import {PortalTarget} from 'portal-vue';

Vue.component('pf-drop-fade', {
  functional: true,
  render(createElement, context) {
    const data = {
      props: {
        name: 'pf-drop-fade',
        mode: 'out-in',
      },
    };
    return createElement('transition-group', data, context.children);
  },
});

export default {
  name: 'pf-modal-target',

  components: {
    PortalTarget,
  },
};
</script>
