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

<script lang="ts">
import { defineComponent } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';

export default defineComponent({
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
});
</script>
