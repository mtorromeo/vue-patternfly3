<template>
  <div class="card-pf card-pf-aggregate-status" :class="{
      'card-pf-accented': accented,
      'card-pf-aggregate-status-alt': isLayoutTall,
      'card-pf-aggregate-status-mini': isLayoutMini
    }">
    <h2 class="card-pf-title">
      <span :is="href ? 'a' : 'span'" :href="href">
        <pf-icon :name="icon"/>
        <span v-if="count" class="card-pf-aggregate-status-count">{{count}}</span>
        <span class="card-pf-aggregate-status-title">{{title}}</span>
      </span>
    </h2>
    <div class="card-pf-body">
      <p class="card-pf-aggregate-status-notifications" v-show="!isLayoutMini || icon || count">
        <slot></slot>
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

  computed: {
    isLayoutTall() {
      return this.layout === 'tall';
    },
    isLayoutMini() {
      return this.layout === 'mini';
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
