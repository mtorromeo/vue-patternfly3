<template functional>
  <div
    v-bind="data.attrs"
    v-on="listeners"
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    class="list-view-pf-main-info"
  >
    <slot>
      <div class="list-view-pf-left" v-if="props.icon || props.iconSrc || $slots.left">
        <slot name="left">
          <pf-icon :name="props.icon" :src="props.iconSrc" :class="[
            `list-view-pf-icon-${props.iconSize}`,
            {[`list-view-pf-icon-${props.iconVariant}`]: props.iconVariant},
          ]"/>
        </slot>
      </div>
      <div class="list-view-pf-body">
        <div class="list-view-pf-description" v-if="$slots.heading || $slots.description">
          <div class="list-group-item-heading" v-if="$slots.heading">
            <slot name="heading"/>
          </div>
          <div class="list-group-item-text" v-if="$slots.description">
            <slot name="description"/>
          </div>
        </div>
        <div class="list-view-pf-additional-info" v-if="$slots['additional-info']">
          <slot name="additional-info"/>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'pf-list-item',

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
      validator: variant => ['', null, 'info', 'success', 'warning', 'danger'].indexOf(variant) >= 0,
    },
  },
};
</script>
