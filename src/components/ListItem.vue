<template>
  <div
    v-bind="ouiaProps"
    class="list-view-pf-main-info"
  >
    <slot>
      <div v-if="icon || iconSrc || $slots.left" class="list-view-pf-left">
        <slot name="left">
          <pf-icon :name="icon" :src="iconSrc" :class="[
            `list-view-pf-icon-${iconSize}`,
            {[`list-view-pf-icon-${iconVariant}`]: iconVariant},
          ]" />
        </slot>
      </div>
      <div class="list-view-pf-body">
        <div v-if="$slots.heading || $slots.description" class="list-view-pf-description">
          <div v-if="$slots.heading" class="list-group-item-heading">
            <slot name="heading" />
          </div>
          <div v-if="$slots.description" class="list-group-item-text">
            <slot name="description" />
          </div>
        </div>
        <div v-if="$slots['additional-info']" class="list-view-pf-additional-info">
          <slot name="additional-info" />
        </div>
      </div>
    </slot>
  </div>
</template>

<script>import { ouiaProps, useOUIAProps } from '../use';

export default {
  name: 'PfListItem',

  props: {
    icon: String,
    iconSrc: String,
    iconSize: {
      type: String,
      default: 'md',
      validator: size => ['sm', 'md', 'lg'].indexOf(size) >= 0,
    },
    iconVariant: {
      type: String,
      default: '',
      validator: variant => ['', null, 'info', 'success', 'warning', 'danger'].indexOf(variant) >= 0,
    },
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },
};
</script>
