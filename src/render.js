export function renderSlot(slot, fallback) {
  // slot can be an array in vue compat mode 2
  if (Array.isArray(slot)) {
    return slot;
  }
  return slot === undefined ? fallback : slot() || fallback;
}
