import { provide, inject, ref, onMounted, onBeforeUnmount, nextTick, getCurrentInstance, Component, InjectionKey, Ref } from 'vue';

export function tryOnMounted(hook: () => unknown, sync = true) {
  if (getCurrentInstance()) {
    onMounted(hook);
  } else if (sync) {
    hook();
  } else {
    nextTick(hook);
  }
}

type ChildrenTracker<T extends Component = Component> = {
  register: (item: T) => void;
  unregister: (item: T) => void;
}

export type ChildrenTrackerInjectionKey<T extends Component = Component> = InjectionKey<ChildrenTracker<T>>;

const ChildrenTrackerSymbol = Symbol('Children tracker provide/inject symbol') as ChildrenTrackerInjectionKey;

export function provideChildrenTracker<T extends Component = Component>(symbol: symbol | ChildrenTrackerInjectionKey<T>) {
  const items = ref([]) as Ref<T[]>;

  provide(symbol || ChildrenTrackerSymbol, {
    register: (item: T) => items.value.push(item),

    unregister: (item: T) => {
      const idx = items.value.findIndex(i => i === item);
      if (idx >= 0) {
        items.value.splice(idx, 1);
      }
    },
  });

  return items;
}

export function useChildrenTracker(symbol: symbol | ChildrenTrackerInjectionKey) {
  const tracker = inject(symbol || ChildrenTrackerSymbol, null);

  if (tracker) {
    tryOnMounted(() => {
      const instance = getCurrentInstance();
      if (instance?.proxy) {
        tracker.register(instance.proxy);
      }
    });

    onBeforeUnmount(() => {
      const instance = getCurrentInstance();
      if (instance?.proxy) {
        tracker.unregister(instance.proxy);
      }
    });
  }

  return tracker;
}
