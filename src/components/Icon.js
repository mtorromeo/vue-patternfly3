// https://www.patternfly.org/styles/icons/
// http://getbootstrap.com/components/#glyphicons
import {mergeData} from 'vue-functional-data-merge';

export default {
  name: 'pf-icon',

  functional: true,

  props: {
    name: String,
    tag: {
      type: String,
      default: 'span',
    },
  },

  render(h, {props, data, children}) {
    const match = (/^(fa|pficon|glyphicon)-/).exec(props.name);
    const family = match ? match[1] : '';
    return h(props.tag, mergeData(data, {
      attrs: {
        'aria-hidden': 'true',
      },
      staticClass: `${family} ${props.name}`,
    }), children);
  },
};
