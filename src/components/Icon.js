// https://www.patternfly.org/styles/icons/
// http://getbootstrap.com/components/#glyphicons

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

  render(h, context) {
    const match = (/^(fa|pficon|glyphicon)-.*/).exec(context.props.name);
    const family = match ? match[1] : '';
    const slots = context.slots();
    return h(context.props.tag, {
      ...context.data,
      attrs: {
        ...context.data.attrs,
        'aria-hidden': 'true',
      },
      'class': `${family} ${context.props.name}`,
    }, [slots.default]);
  },
};
