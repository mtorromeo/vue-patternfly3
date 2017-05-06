<template>
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a @click="toggle" :class="{collapsed: !expanded}" :aria-expanded="expanded ? 'true' : 'false'">
        {{title}}
      </a>
    </h4>
    <span class="panel-counter">{{counter}}</span>
  </div>

  <transition name="collapse">
    <div v-show="expanded" class="panel-collapse" :aria-expanded="expanded ? 'true' : 'false'">
      <div class="panel-body">
        <slot></slot>

        <div v-if="loading" class="drawer-pf-loading text-center">
          <span class="spinner spinner-xs spinner-inline"></span> Loading
        </div>
      </div>

      <div v-if="action" class="drawer-pf-action">
        <button class="btn btn-link btn-block" @click="$emit('action')">
          {{action}}
        </button>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'pf-drawer-group',

  props: {
    title: String,
    counter: String,
    action: String,
    loading: Boolean,
  },

  data: () => ({
    expanded: false,
  }),

  mounted() {
    this.$parent.$on('groupChanged', group => {
      if (group !== this) {
        this.close();
      }
    });
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

  watch: {
    expanded(value) {
      if (value) {
        this.$emit('opened', this);
        this.$parent.$emit('groupChanged', this);
      } else {
        this.$emit('closed', this);
      }
    },
  },
};
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
