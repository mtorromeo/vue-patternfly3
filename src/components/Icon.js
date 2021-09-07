// https://www.patternfly.org/v3/styles/icons/
// https://getbootstrap.com/docs/3.4/components/#glyphicons
import { h } from 'vue';

export default {
  name: 'pf-icon',

  props: {
    name: String,
    src: String,
    tag: {
      type: String,
      default: 'span',
    },
  },

  render() {
    const classes = [];
    const style = {};
    if (this.src) {
      classes.push('pficon');
      classes.push('pf-icon-img');
      style.backgroundImage = `url("${this.src}")`;
    } else {
      const match = (/^(fa|pficon|glyphicon)-/).exec(this.name);
      if (match) {
        classes.push(match[1]);
      }
      if (this.name) {
        classes.push(this.name);
      }
    }

    return h(this.tag, {
      'aria-hidden': 'true',
      class: classes,
      style,
    }, this.$slots);
  },
};
