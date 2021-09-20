import popupMixin from '../mixins/popupMixin';
import { h } from 'vue';

export default {
  mixins: [popupMixin],
  data() {
    return {
      name: 'tooltip',
    };
  },
  render() {
    return h(
      this.tag,
      [
        this.$slots.default,
        h('div',
          {
            ref: 'popup',
            role: 'tooltip',
            onMouseleave: this.hideOnLeave,
          },
          [
            h('div', { class: 'tooltip-arrow' }),
            h('div', {
              class: 'tooltip-inner',
              innerHTML: this.text,
            }),
          ],
        ),
      ],
    );
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    trigger: {
      type: String,
      default: 'hover-focus',
    },
  },
  computed: {
    allContent() {
      return this.text;
    },
  },
  methods: {
    isNotEmpty() {
      return !!this.text;
    },
  },
};
