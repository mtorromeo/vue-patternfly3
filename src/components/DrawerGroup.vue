<template>
  <div v-bind="ouiaProps" class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a :class="{collapsed: !expanded}" :aria-expanded="expanded ? 'true' : 'false'" @click="toggle">
          {{ title }}
        </a>
      </h4>
      <span class="panel-counter">{{ counter }}</span>
    </div>

    <transition name="collapse">
      <div v-show="expanded" class="panel-collapse" :aria-expanded="expanded ? 'true' : 'false'">
        <div v-if="empty && !loading" class="blank-slate-pf">
          <div class="blank-slate-pf-icon">
            <pf-icon name="pficon-info" />
          </div>
          <h4 class="h1 blank-slate-pf-title">
            No Notifications Available
          </h4>
        </div>

        <div v-else class="panel-body">
          <slot />

          <div v-if="loading" class="drawer-pf-loading text-center">
            <span class="spinner spinner-xs spinner-inline" /> Loading
          </div>
        </div>

        <div v-if="$slots.actions" class="drawer-pf-action">
          <slot name="actions" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, defineComponent, inject } from 'vue';
import { ouiaProps, useOUIAProps } from '../ouia';

export default defineComponent({
  name: 'PfDrawerGroup',

  props: {
    title: String,
    counter: String,
    loading: Boolean,
    ...ouiaProps,
  },

  emits: ['opened', 'closed'],

  setup(props) {
    return {
      activeGroup: inject<Component | null>('activeGroup', null),
      ...useOUIAProps(props),
    };
  },

  data(this: void) {
    return {
      expanded: false,
      empty: true,
    };
  },

  watch: {
    activeGroup(group) {
      if (group !== this) {
        this.close();
      }
    },

    expanded(value) {
      if (value) {
        this.$emit('opened', this);
        this.activeGroup = this;
      } else {
        this.$emit('closed', this);
      }
    },
  },

  updated() {
    this.empty = !this.$slots.default;
  },

  methods: {
    open() {
      this.expanded = true;
    },
    close() {
      this.expanded = false;
    },
    toggle() {
      this.expanded = !this.expanded;
    },
  },
});
</script>

<style>
.panel-title input {
  display: none;
}

.collapse-enter, .collapse-leave-to,
.collapse-enter *, .collapse-leave-to * {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  line-height: 0 !important;
  border-width: 0 !important;
  transform-origin: top;
  transform: scaleY(0);
  overflow: hidden;
}

.collapse-enter .btn, .collapse-leave-to .btn,
.collapse-enter .caret, .collapse-leave-to .caret,
.collapse-enter .drawer-pf-notification-info, .collapse-leave-to .drawer-pf-notification-info {
  font-size: 0;
}

.collapse-enter-active, .collapse-leave-active,
.collapse-enter-active *, .collapse-leave-active * {
  transition: all .15s linear;
}
</style>
