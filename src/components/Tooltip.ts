import popupMixin from '../mixins/popupMixin';
import { defineComponent, h } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';
import { renderSlot } from '../render';

export default defineComponent({
  name: 'PfTooltip',

  mixins: [popupMixin],

  props: {
    text: {
      type: String,
      default: '',
    },
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },

  data(this: void) {
    return {
      name: 'tooltip',
    };
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
});
