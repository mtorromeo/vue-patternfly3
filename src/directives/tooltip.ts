import Tooltip from '../components/Tooltip';
import { App, createApp, DefineComponent, defineComponent, DirectiveBinding, h, ObjectDirective } from 'vue';
import { TooltipPlacement, TooltipTrigger } from '../mixins/popupMixin';

function isTooltipPlacement(value: string): value is TooltipPlacement {
  return /(top)|(left)|(right)|(bottom)/.test(value);
}

function isTooltipTrigger(value: string): value is TooltipTrigger {
  return /(hover)|(focus)|(click)/.test(value);
}

function getContainer() {
  const cont = document.createElement('div');
  document.documentElement.appendChild(cont);
  return cont;
}

function created(el: (Element | DefineComponent) & { 'v-tooltip'?: App, container?: HTMLElement }, binding: DirectiveBinding) {
  unmounted(el);
  const options = [];
  for (const key in binding.modifiers) {
    if (Object.prototype.hasOwnProperty.call(binding.modifiers, key) && binding.modifiers[key]) {
      options.push(key);
    }
  }

  const props: {
    placement?: TooltipPlacement;
    trigger?: TooltipTrigger;
    enterable?: boolean;
  } = {};
  options.forEach(option => {
    if (isTooltipPlacement(option)) {
      props.placement = option;
    } else if (isTooltipTrigger(option)) {
      props.trigger = option;
    } else if (/unenterable/.test(option)) {
      props.enterable = false;
    }
  });

  const container = getContainer();
  const vm = createApp(defineComponent({
    render() {
      return h(Tooltip as unknown as DefineComponent, {
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
  }));
  vm.mount(container);
  el.container = container;
  el['v-tooltip'] = vm;
}

function unmounted(el: (Element | DefineComponent) & { 'v-tooltip'?: App, container?: HTMLElement }) {
  const vm = el['v-tooltip'];
  if (!vm) {
    return;
  }

  const { container } = el;
  if (container instanceof HTMLElement) {
    document.documentElement.removeChild(container);
  }
  vm.unmount();
  delete el['v-tooltip'];
  delete el.container;
}

function updated(el: (Element | DefineComponent) & { 'v-tooltip'?: App, container: HTMLElement }, binding: DirectiveBinding) {
  if (binding.value !== binding.oldValue) {
    created(el, binding);
  }
}

const directive: ObjectDirective = {
  created,
  updated,
  unmounted,
};

export default directive;
