<template functional>
  <div
    v-bind="data.attrs"
    v-on="listeners"
    :class="[data.class, data.staticClass, {
      'card-pf-accented': props.accented,
      'card-pf-aggregate-status-alt': props.layout === 'tall',
      'card-pf-aggregate-status-mini': props.layout === 'mini',
    }]"
    :style="[data.style, data.staticStyle]"
    class="card-pf card-pf-aggregate-status">
    <h2 class="card-pf-title">
      <span :is="props.href ? 'a' : 'span'" :href="props.href">
        <pf-icon :name="props.icon"/>
        <span v-if="props.count" class="card-pf-aggregate-status-count">{{props.count}}</span>
        <span class="card-pf-aggregate-status-title">{{props.title}}</span>
      </span>
    </h2>
    <div class="card-pf-body">
      <p class="card-pf-aggregate-status-notifications" v-show="props.layout !== 'mini' || props.icon || props.count">
        <slot/>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pf-aggregate-status-card',

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
  },
};
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
