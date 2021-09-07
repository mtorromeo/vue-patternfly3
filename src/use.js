import { provide, inject, ref, onMounted, onBeforeUnmount, nextTick, getCurrentInstance } from 'vue';

export function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance()) {
    onMounted(fn);
  } else if (sync) {
    fn();
  } else {
    nextTick(fn);
  }
};

const ChildrenTrackerSymbol = Symbol('Children tracker provide/inject symbol');

export function provideChildrenTracker() {
  const items = ref([]);

  provide(ChildrenTrackerSymbol, {
    register: item => items.value.push(item),

    unregister: item => {
      const idx = items.value.findIndex(i => i === item);
      if (idx >= 0) {
        items.value.splice(idx, 1);
      }
    },
  });

  return items;
}

export function useChildrenTracker() {
  const tracker = inject(ChildrenTrackerSymbol, null);

  if (tracker) {
    tryOnMounted(() => {
      const instance = getCurrentInstance();
      if (instance) {
        tracker.register(instance.proxy);
      }
    });

    onBeforeUnmount(() => {
      const instance = getCurrentInstance();
      if (instance) {
        tracker.unregister(instance.proxy);
      }
    });
  }

  return tracker;
}
