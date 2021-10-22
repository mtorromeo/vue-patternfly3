import popupMixin from '../mixins/popupMixin';
import { h } from 'vue';

export default {
  name: 'pf-tooltip',

  mixins: [popupMixin],

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

  data() {
    return {
      name: 'tooltip',
    };
  },

  computed: {
    allContent() {
      return this.text;
    },
  },

  render() {
    return h(
      this.tag,
      {},
      [
        this.$slots.default && this.$slots.default(),
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

  methods: {
    isNotEmpty() {
      return !!this.text;
    },
  },
};
