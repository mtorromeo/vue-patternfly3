<template>
  <component :is="tag">
    <slot />
    <div v-bind="ouiaProps" ref="popup" style="display:block" @mouseleave="hideOnLeave">
      <div class="arrow" />
      <h3 v-if="title" class="popover-title">
        {{ title }}
      </h3>
      <div class="popover-content">
        <slot name="popover">
          {{ content }}
        </slot>
      </div>
    </div>
  </component>
</template>

<script>
import popupMixin from '../mixins/popupMixin';
import { ouiaProps, useOUIAProps } from '../ouia';

export default {
  name: 'PfPopover',

  mixins: [popupMixin],

  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    trigger: {
      type: String,
      default: 'outside-click',
    },
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },

  data() {
    return {
      name: 'popover',
    };
  },

  computed: {
    allContent() {
      return this.title + this.content;
    },
  },

  methods: {
    isNotEmpty() {
      return this.title || this.content || this.$slots.popover;
    },
  },
};
</script>
