import { DefineComponent, defineComponent, PropType, Slot, VNode } from 'vue';

export default defineComponent({
  name: 'Void',

  inheritAttrs: false,

  props: {
    alter: {
      type: Function as PropType<(v: VNode[]) => VNode[]>,
      default: null,
    },

    useRef: {
      type: Object as PropType<DefineComponent>,
      default: null,
    },

    template: Boolean,
  },

  setup() {
    return {
      templateFn: null as Slot,
    };
  },

  render() {
    if (this.template) {
      this.templateFn = this.$slots.default;
      return [];
    }

    if (this.useRef && this.useRef.templateFn) {
      return this.useRef.templateFn();
    }

    if (!this.$slots.default) {
      return;
    }

    if (!this.$slots.default) {
      return [];
    }

    let children = this.$slots.default();
    if (this.alter) {
      children = this.alter(children);
    }

    return children;
  },
});
