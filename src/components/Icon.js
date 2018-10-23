// https://www.patternfly.org/styles/icons/
// http://getbootstrap.com/components/#glyphicons
import {mergeData} from 'vue-functional-data-merge';

export default {
  name: 'pf-icon',

  functional: true,

  props: {
    name: String,
    src: String,
    tag: {
      type: String,
      default: 'span',
    },
  },

  render(h, {props, data, children}) {
    let staticClass = '';
    const style = {};
    if (props.src) {
      staticClass = 'pficon pf-icon-img';
      style.backgroundImage = `url("${props.src}")`;
    } else {
      const match = (/^(fa|pficon|glyphicon)-/).exec(props.name);
      staticClass = match ? match[1] : '';
      if (props.name) {
        staticClass = `${staticClass} ${props.name}`;
      }
    }

    return h(props.tag, mergeData(data, {
      attrs: {
        'aria-hidden': 'true',
      },
      staticClass,
      style,
    }), children);
  },
};
