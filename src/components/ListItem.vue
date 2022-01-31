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

<script lang="ts">
import { defineComponent } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';

export default defineComponent({
  name: 'PfListItem',

  props: {
    icon: String,
    iconSrc: String,
    iconSize: {
      type: String,
      default: 'md',
      validator: (size: never) => ['sm', 'md', 'lg'].includes(size),
    },
    iconVariant: {
      type: String,
      default: '',
      validator: (variant: never) => ['', null, 'info', 'success', 'warning', 'danger'].includes(variant),
    },
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },
});
</script>
