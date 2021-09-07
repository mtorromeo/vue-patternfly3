import { h, resolveComponent, mergeProps } from 'vue';

export default {
  name: 'pf-menu-item',

  props: {
    title: {
      type: String,
      required: true,
    },
    to: [String, Object],
    exact: Boolean,
    icon: String,
    badge: String,
    href: String,
    target: String,
    vertical: Boolean,
  },

  render() {
    let tag = typeof this.to === 'undefined' ? 'li' : 'router-link';

    let elements = [];

    if (this.icon) {
      elements.push(h(resolveComponent('pf-icon'), {
        name: this.icon,
        title: this.title,
      }));
    }

    elements.push(h('span', {
      class: 'list-group-item-value',
    }, this.title));

    if (this.badge) {
      elements.push(h('div', {
        class: 'badge-container-pf',
      }, [
        h('div', { class: 'badge' }, this.badge),
      ]));
    }

    elements = [
      h('a', {
        href: this.href,
        target: this.target,
      }, elements),
    ];

    let children = this.$slots.default ? this.$slots.default() : [];
    if (children) {
      if (this.vertical) {
        elements = elements.concat(children);
      } else {
        elements.push(h('ul', {
          class: 'nav navbar-nav navbar-persistent',
        }, children));
      }
    }

    let tagProps = {
      class: 'list-group-item',
    };

    if (tag === 'router-link') {
      tag = resolveComponent('router-link');
      const liProps = mergeProps(tagProps, this.$attrs);
      tagProps = {
        activeClass: 'active',
        custom: true,
        to: this.to,
      };
      // children = elements;
      children = {
        default: ({ navigate }) => h('li', { onClick: navigate, ...liProps }, elements),
      };
    } else {
      children = elements;
    }

    return h(tag, tagProps, children);
  },
};
