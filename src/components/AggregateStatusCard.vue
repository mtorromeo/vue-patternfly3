<template>
  <div
    v-bind="ouiaProps"
    :class="{
      'card-pf-accented': accented,
      'card-pf-aggregate-status-alt': layout === 'tall',
      'card-pf-aggregate-status-mini': layout === 'mini',
    }"
    class="card-pf card-pf-aggregate-status">
    <h2 class="card-pf-title">
      <component :is="href ? 'a' : 'span'" :href="href">
        <pf-icon :name="icon" />
        <span v-if="count" class="card-pf-aggregate-status-count">{{ count }}{{ ' ' }}</span>
        <span class="card-pf-aggregate-status-title">{{ title }}</span>
      </component>
    </h2>
    <div class="card-pf-body">
      <p v-show="layout !== 'mini' || icon || count" class="card-pf-aggregate-status-notifications">
        <slot />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';

export default defineComponent({
  name: 'PfAggregateStatusCard',

  props: {
    title: String,
    count: [String, Number],
    href: String,
    icon: String,
    layout: String,
    accented: {
      type: Boolean,
      default: true,
    },
    ...ouiaProps,
  },

  setup(props) {
    return useOUIAProps(props);
  },
});
</script>

<style>
.card-pf-aggregate-status-alt .card-pf-body {
  padding-bottom: 20px;
}

.card-pf-aggregate-status-alt .card-pf-title {
  line-height: 22px;
  margin: 20px 0 10px 0;
  font-weight: 300;
}

.card-pf-aggregate-status-alt .card-pf-aggregate-status-count {
  font-size: 24px;
}

.card-pf-aggregate-status-alt .card-pf-aggregate-status-title {
  display: block;
  font-size: 12px;
}

.card-pf-aggregate-status-alt .card-pf-aggregate-status-notifications .card-pf-aggregate-status-notification {
  border-left: none;
}

.card-pf-aggregate-status-alt .card-pf-aggregate-status-notifications .fa, .card-pf-aggregate-status-alt .card-pf-aggregate-status-notifications .pficon {
  position: relative;
  top: -1px;
}
</style>
