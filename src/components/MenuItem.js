import {mergeData} from 'vue-functional-data-merge';

export default {
  name: 'pf-menu-item',

  functional: true,

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

  render(h, {props, data, children}) {
    const {
      vertical,
      icon,
      badge,
      title,
      href,
      target,
      ...attrs
    } = props;

    const tag = typeof attrs.to === 'undefined' ? 'li' : 'router-link';

    if (tag === 'router-link') {
      attrs.tag = 'li';
      attrs.activeClass = 'active';
    }

    let elements = [];

    if (icon) {
      elements.push(h('pf-icon', {
        attrs: {
          name: icon,
          title: title,
        },
      }));
    }

    elements.push(h('span', {
      staticClass: 'list-group-item-value',
    }, title));

    if (badge) {
      elements.push(h('div', {
        staticClass: 'badge-container-pf',
      }, [
        h('div', {staticClass: 'badge'}, badge),
      ]));
    }

    elements = [
      h('a', {
        attrs: {
          href,
          target,
        },
      }, elements),
    ];

    if (children) {
      if (vertical) {
        elements = elements.concat(children);
      } else {
        elements.push(h('ul', {
          staticClass: 'nav navbar-nav navbar-persistent',
        }, children));
      }
    }

    return h(tag, mergeData(data, {
      attrs,
      staticClass: 'list-group-item',
    }), elements);
  },
};
