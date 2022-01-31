import { reactive, getCurrentInstance } from 'vue';

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

/**
 * @param {string} name OUIA component type
 * @param {string} variant Optional variant to add to the generated ID
 */
export function useOUIAProps(props: OUIAProps, name: string | null = null, variant: string | null = null) {
  if (name === null) {
    const instance = getCurrentInstance();
    name = instance.proxy.$options.name;
  }

  return {
    ouiaProps: reactive({
      'data-ouia-component-type': name,
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
