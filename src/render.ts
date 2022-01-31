import { Slot, VNode } from 'vue';

export function renderSlot(slot: Slot, fallback: VNode[] = []) {
  // slot can be an array in vue compat mode 2
  if (Array.isArray(slot)) {
    return slot as ReturnType<Slot>;
  }
  return slot === undefined ? fallback : slot() || fallback;
}
