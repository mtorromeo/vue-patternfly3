import popupMixin from '../mixins/popupMixin';
import { h } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import { renderSlot } from '../render';

export default {
  name: 'PfTooltip',

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
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
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
      this.ouiaProps,
      [
        renderSlot(this.$slots.default),
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
