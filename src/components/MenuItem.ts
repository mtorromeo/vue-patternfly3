import { h, resolveComponent, mergeProps, defineComponent, Slot, DefineComponent, PropType, VNode } from 'vue';
import { renderSlot } from '../render';
import { ouiaProps, useOUIAProps } from '../ouia';
import type { RouteLocationRaw } from 'vue-router';

export default defineComponent({
  name: 'PfMenuItem',

  inheritAttrs: false,

  props: {
    title: String,
    to: {
      type: [String, Object] as PropType<RouteLocationRaw>,
      default: undefined,
    },
    replace: Boolean,
    activeClass: {
      type: String,
      default: 'active',
    },
    ariaCurrentValue: String,
    exactActiveClass: String,
    icon: String,
    badge: String,
    href: String,
    target: String,
    vertical: Boolean,
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },

  render() {
    let tag: string | DefineComponent = this.to ? 'router-link' : 'li';

    const linkBuilder = (href: string) => {
      const linkChildren = [];

      if (this.icon) {
        linkChildren.push(h(resolveComponent('pf-icon'), {
          name: this.icon,
          title: this.title,
        }));
      }

      linkChildren.push(h('span', {
        class: 'list-group-item-value',
      }, this.title));

      if (this.badge) {
        linkChildren.push(h('div', {
          class: 'badge-container-pf',
        }, [
          h('div', { class: 'badge' }, this.badge),
        ]));
      }

      return h('a', {
        href,
        target: this.target,
      }, linkChildren);
    };

    const slot: Slot = (href?: string) => {
      let elements: VNode[] = [];
      const children: VNode[] | Slot = renderSlot(this.$slots.default, []);
      if (children) {
        if (this.vertical) {
          elements = children;
        } else {
          elements.push(h('ul', {
            class: 'nav navbar-nav navbar-persistent',
          }, children));
        }
      }

      elements.unshift(linkBuilder(this.href || href));
      return elements;
    };

    let tagProps = mergeProps({
      class: 'list-group-item',
      ...this.ouiaProps,
    }, this.$attrs);

    if (tag !== 'router-link') {
      return h(tag, tagProps, slot);
    }

    tag = resolveComponent('router-link') as DefineComponent;
    const liProps = { ...tagProps };
    tagProps = {
      custom: true,
      to: this.to,
      replace: this.replace,
      activeClass: this.activeClass,
      ariaCurrentValue: this.ariaCurrentValue,
      exactActiveClass: this.exactActiveClass,
    };

    const routerSlot: Slot = ({ navigate, href }: { navigate: () => void, href: string }) => {
      return [h('li', { onClick: navigate, ...liProps }, slot(href))];
    };

    return h(tag, tagProps, routerSlot);
  },
});
