import { h, resolveComponent, mergeProps } from 'vue';
import { renderSlot } from '../render';
import { ouiaProps, useOUIAProps } from '../use';

export default {
  name: 'PfMenuItem',

  inheritAttrs: false,

  props: {
    title: {
      type: String,
      required: true,
    },
    to: [String, Object],
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
    let tag = typeof this.to === 'undefined' ? 'li' : 'router-link';

    const linkBuilder = href => {
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

    let elements = [];
    let children = renderSlot(this.$slots.default, []);
    if (children) {
      if (this.vertical) {
        elements = children;
      } else {
        elements.push(h('ul', {
          class: 'nav navbar-nav navbar-persistent',
        }, children));
      }
    }

    let tagProps = mergeProps({
      class: 'list-group-item',
      ...this.ouiaProps,
    }, this.$attrs);

    if (tag === 'router-link') {
      tag = resolveComponent('router-link');
      const liProps = { ...tagProps };
      tagProps = {
        custom: true,
        to: this.to,
        replace: this.replace,
        activeClass: this.activeClass,
        ariaCurrentValue: this.ariaCurrentValue,
        exactActiveClass: this.exactActiveClass,
      };

      children = {
        default: ({ navigate, href }) => {
          const link = linkBuilder(this.href || href);
          elements.unshift(link);
          return h('li', { onClick: navigate, ...liProps }, elements);
        },
      };
    } else {
      elements.unshift(linkBuilder(this.href));
      children = elements;
    }

    return h(tag, tagProps, children);
  },
};
