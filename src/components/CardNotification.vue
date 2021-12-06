<template>
  <span
    v-if="icon || count || count === 0"
    v-bind="ouiaProps"
    class="card-pf-aggregate-status-notification"
  >
    <component :is="href ? 'a' : 'span'" :href="href">
      <pf-icon v-if="icon" :name="icon" />
      {{ count }}
    </component>
  </span>
</template>

<script>import { ouiaProps, useOUIAProps } from '../use';

export default {
  name: 'PfCardNotification',

  props: {
    count: [String, Number],
    href: String,
    icon: String,
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },
};
</script>
