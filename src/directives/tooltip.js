import Tooltip from '../components/Tooltip';
import { createApp, h } from 'vue';

function getContainer() {
  const cont = document.createElement('div');
  document.documentElement.appendChild(cont);
  return cont;
}

function bind(el, binding) {
  unbind(el);
  const options = [];
  for (const key in binding.modifiers) {
    if (Object.prototype.hasOwnProperty.call(binding.modifiers, key) && binding.modifiers[key]) {
      options.push(key);
    }
  }

  const props = {};
  options.forEach(option => {
    if (/(top)|(left)|(right)|(bottom)/.test(option)) {
      props.placement = option;
    } else if (/(hover)|(focus)|(click)/.test(option)) {
      props.trigger = option;
    } else if (/unenterable/.test(option)) {
      props.enterable = false;
    }
  });

  const container = getContainer();
  const vm = createApp({
    data() {
      return {
        container,
      };
    },
    render() {
      return h(Tooltip, {
        target: el,
        appendTo: binding.arg && '#' + binding.arg,
        text: typeof binding.value === 'string' ? (binding.value && binding.value.toString()) : (binding.value && binding.value.text && binding.value.text.toString()),
        viewport: binding.value && binding.value.viewport && binding.value.viewport.toString(),
        customClass: binding.value && binding.value.customClass && binding.value.customClass.toString(),
        showDelay: binding.value && binding.value.showDelay,
        hideDelay: binding.value && binding.value.hideDelay,
        ...props,
      });
    },
  });
  vm.mount(container);
  el['v-tooltip'] = vm;
}

function unbind(el) {
  const vm = el['v-tooltip'];
  if (vm) {
    const container = vm.container;
    vm.unmount();
    document.documentElement.removeChild(container);
  }
  delete el['v-tooltip'];
}

function updated(el, binding) {
  if (binding.value !== binding.oldValue) {
    bind(el, binding);
  }
}

export default {
  created: bind,
  updated: updated,
  umounted: unbind,
};
