import { provide, inject, ref, onMounted, onBeforeUnmount, nextTick, getCurrentInstance, Component } from 'vue';

export function tryOnMounted(hook: () => unknown, sync = true) {
  if (getCurrentInstance()) {
    onMounted(hook);
  } else if (sync) {
    hook();
  } else {
    nextTick(hook);
  }
}

const ChildrenTrackerSymbol = Symbol('Children tracker provide/inject symbol');

export function provideChildrenTracker(symbol?: symbol) {
  const items = ref<Component[]>([]);

  provide(symbol || ChildrenTrackerSymbol, {
    register: (item: Component) => items.value.push(item),

    unregister: (item: Component) => {
      const idx = items.value.findIndex(i => i === item);
      if (idx >= 0) {
        items.value.splice(idx, 1);
      }
    },
  });

  return items;
}

export function useChildrenTracker(symbol?: symbol) {
  const tracker = inject(symbol || ChildrenTrackerSymbol, null);

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
