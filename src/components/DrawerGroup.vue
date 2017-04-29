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

  <transition
    leave-active-class="collapsing"
    @before-leave="beforeLeave"
    @leave="leave"
    @enter="enter"
    @afterEnter="afterEnter"
  >
    <div v-show="expanded" class="panel-collapse collapse" :aria-expanded="expanded ? 'true' : 'false'">
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

    beforeLeave(el) {
      el.style.height = `${el.offsetHeight}px`;
    },

    leave(el) {
      this.$nextTick(function() {
        el.style.height = '';
      });
    },

    enter(el) {
      const targetHeight = el.offsetHeight;
      el.style.height = '0';
      this.$nextTick(function() {
        el.style.height = `${targetHeight}px`;
        el.classList.add('collapsing');
      });
    },

    afterEnter(el) {
      el.classList.remove('collapsing');
      el.style.height = '';
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

<style scoped>
.panel-title input {
  display: none;
}

.panel-collapse.collapse {
  display: block;
}
</style>
