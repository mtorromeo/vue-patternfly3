<template>
  <div class="card-pf card-pf-aggregate-status" :class="{
      'card-pf-accented': accented,
      'card-pf-aggregate-status-alt': isLayoutTall,
      'card-pf-aggregate-status-mini': isLayoutMini
    }">
    <h2 class="card-pf-title">
      <a v-if="href" :href="href">
        <span v-if="iconClass" :class="iconClass"></span>
        <span v-if="count" class="card-pf-aggregate-status-count">{{count}}</span>
        <span class="card-pf-aggregate-status-title">{{title}}</span>
      </a>
      <template v-else>
        <span v-if="iconClass" :class="iconClass"></span>
        <span v-if="count" class="card-pf-aggregate-status-count">{{count}}</span>
        <span class="card-pf-aggregate-status-title">{{title}}</span>
      </template>
    </h2>
    <div class="card-pf-body">
      <p class="card-pf-aggregate-status-notifications" v-show="!isLayoutMini || iconClass || count">
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
    count: String,
    href: String,
    iconClass: String,
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
