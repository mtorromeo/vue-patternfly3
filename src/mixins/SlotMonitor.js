function checkMountedSlots(vm) {
  const slots = {};
  for (const k of Object.keys(vm.withSlot)) {
    slots[k] = false;
  }
  for (const [k, v] of Object.entries(vm.$scopedSlots)) {
    slots[k] = slots[k] || typeof v !== 'undefined';
  }
  for (const [k, v] of Object.entries(vm.$slots)) {
    slots[k] = slots[k] || Boolean(Array.isArray(v) ? v.length : v);
  }
  for (const [k, v] of Object.entries(slots)) {
    if (v) {
      vm.$set(vm.withSlot, k, v);
    } else {
      vm.$delete(vm.withSlot, k);
    }
  }
}

export default {
  data() {
    return {
      withSlot: {},
    };
  },

  mounted() {
    checkMountedSlots(this);
  },

  updated() {
    checkMountedSlots(this);
  },
};
