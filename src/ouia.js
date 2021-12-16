import { reactive, getCurrentInstance } from 'vue';

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
