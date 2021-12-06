import { provide, inject, ref, reactive, onMounted, onBeforeUnmount, nextTick, getCurrentInstance } from 'vue';

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

let uid = 0;
const ouiaPrefix = 'OUIA-Generated-';
const ouiaIdByRoute = {};

export const ouiaProps = {
  ouiaId: {
    type: String,
    default: null,
  },
  ouiaSafe: Boolean,
};

/**
 * @param {string} name OUIA component type
 * @param {string} variant Optional variant to add to the generated ID
 */
export function useOUIAProps(props, name = null, variant = null) {
  if (name === null) {
    const instance = getCurrentInstance();
    name = instance.proxy.$options.name.replace(/^pf-|^Pf/, '');
  }

  return {
    ouiaProps: reactive({
      'data-ouia-component-type': `V-PF3/${name}`,
      'data-ouia-safe': props.ouiaSafe,
      'data-ouia-component-id': props.ouiaId || getDefaultOUIAId(name, variant),
    }),
  };
}

/**
 * Returns a generated id based on the URL location
 *
 * @param {string} name OUIA component type
 * @param {string} variant Optional variant to add to the generated ID
 */
export function getDefaultOUIAId(name = null, variant = null) {
  try {
    const key = `${window.location.href}-${name}-${variant || ''}`;
    if (!ouiaIdByRoute[key]) {
      ouiaIdByRoute[key] = 0;
    }
    return `${ouiaPrefix}${name}-${variant ? `${variant}-` : ''}${++ouiaIdByRoute[key]}`;
  } catch (exception) {
    return `${ouiaPrefix}${name}-${variant ? `${variant}-` : ''}${++uid}`;
  }
}
