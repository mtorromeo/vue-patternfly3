import { getCurrentInstance, ComputedRef, computed, unref } from 'vue';

export interface OUIAProps {
  ouiaId?: string;
  ouiaSafe?: boolean;
}

let uid = 0;
const ouiaPrefix = 'OUIA-Generated-';
const ouiaIdByRoute: Record<string, number> = {};

export const ouiaProps = {
  ouiaId: {
    type: String,
    default: null as string | null,
  },
  ouiaSafe: Boolean,
};

export function useOUIAProps(props: OUIAProps, {
  name = null as string | null | undefined,
  variant = null as string | null,
  safe = null as boolean | ComputedRef<boolean> | null,
} = {}) {
  if (name === null) {
    const instance = getCurrentInstance();
    name = instance?.proxy?.$options.name?.replace(/^pf-|^Pf/, '');
  }

  return {
    ouiaProps: computed(() => ({
      'data-ouia-component-type': `V-PF3/${name}`,
      'data-ouia-safe': unref(safe) ?? props.ouiaSafe,
      'data-ouia-component-id': props.ouiaId || getDefaultOUIAId(name, variant),
    })),
  };
}

/**
 * Returns a generated id based on the URL location
 *
 * @param {string} name OUIA component type
 * @param {string} variant Optional variant to add to the generated ID
 */
export function getDefaultOUIAId(name: string | null = null, variant: string | null = null) {
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
