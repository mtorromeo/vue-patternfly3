<template>
  <div class="utilization-bar-chart-pf" :class="{'data-unavailable-pf': !dataAvailable}">
    <template v-if="!inline">
      <div v-if="title" class="progress-description" v-html="title" />
      <div v-if="dataAvailable" class="progress progress-label-top-right">
        <div v-tooltip="percent + '% Used'" class="progress-bar" :aria-valuenow="percent"
             aria-valuemin="0" aria-valuemax="100"
             :class="{
               'animate': animate,
               'progress-bar-success': isOk,
               'progress-bar-danger': isError,
               'progress-bar-warning': isWarning,
             }"
             :style="{width: percent + '%'}">
          <span v-html="footerHTML" />
        </div>
        <div v-tooltip="(100 - percent) + '% Available'"
             class="progress-bar progress-bar-remaining"
             :style="{width: (100 - percent) + '%'}" />
      </div>
    </template>
    <template v-else>
      <div class="progress-container progress-description-left progress-label-right"
           :style="{
             'padding-left': titleWidthPx,
             'padding-right': footerWidthPx,
           }">
        <div v-if="title" class="progress-description" :style="{'max-width': titleWidthPx}" v-html="title" />
        <div v-if="dataAvailable" class="progress">
          <div v-tooltip="percent + '% Used'" class="progress-bar" :aria-valuenow="percent"
               aria-valuemin="0" aria-valuemax="100"
               :class="{
                 'animate': animate,
                 'progress-bar-success': isOk,
                 'progress-bar-danger': isError,
                 'progress-bar-warning': isWarning,
               }"
               :style="{width: percent + '%'}">
            <span :style="{'max-width': footerWidthPx}" v-html="footerHTML" />
          </div>
          <div v-tooltip="(100 - percent) + '% Available'"
               class="progress-bar progress-bar-remaining"
               :style="{width: (100 - percent) + '%'}" />
        </div>
      </div>
    </template>
    <pf-empty-chart v-if="!dataAvailable" :height="45" />
  </div>
</template>

<script>
export default {
  name: 'pf-utilization-bar-chart',

  props: {
    value: Number,
    total: Number,
    units: String,
    title: String,
    footer: String,
    footerFormat: {
      type: String,
      default: 'actual',
    },
    inline: Boolean,
    warning: Number,
    error: Number,
    titleWidth: Number,
    footerWidth: Number,
  },

  data() {
    return {
      animate: true,
    };
  },

  computed: {
    dataAvailable() {
      return typeof this.value !== 'undefined' && typeof this.total !== 'undefined';
    },

    percent() {
      return Math.round(100 * this.value / this.total);
    },

    isError() {
      return this.percent >= this.error;
    },

    isWarning() {
      return !this.isError && this.percent >= this.warning;
    },

    isOk() {
      return !this.isError && !this.isWarning;
    },

    footerHTML() {
      if (this.footer) {
        return this.footer;
      }
      switch (this.footerFormat) {
        case 'percent':
          return `<strong>${this.percent}%</strong> used`;
        default:
          if (this.inline) {
            return `<strong>${this.value} ${this.units}</strong> used`;
          }
          return `<strong>${this.value} of ${this.total} ${this.units}</strong> used`;
      }
    },

    titleWidthPx() {
      return this.titleWidth ? `${this.titleWidth}px` : null;
    },

    footerWidthPx() {
      return this.footerWidth ? `${this.footerWidth}px` : null;
    },
  },

  mounted() {
    this.$nextTick(function() {
      this.animate = false;
    }.bind(this));
  },
};
</script>

<style>
/* Utilization bar chart - Animate load */
.utilization-bar-chart-pf .progress-bar {
  -webkit-transition: width .75s ease-in-out;
  -moz-transition: width .75s ease-in-out;
  -o-transition: width .75s ease-in-out;
  transition: width .75s ease-in-out;
}

.utilization-bar-chart-pf .progress-bar.animate {
  width: 0% !important;
}
</style>
