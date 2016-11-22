<template>
<div class="utilization-bar-chart-pf" :class="{'data-unavailable-pf': !dataAvailable}">
  <template v-if="!inline">
    <div v-if="title" class="progress-description" v-html="title"></div>
    <div class="progress progress-label-top-right" v-if="dataAvailable">
      <div class="progress-bar" :aria-valuenow="percent" aria-valuemin="0"
           aria-valuemax="100" :tooltip="percent + '% Used'"
           :class="{
             'animate': animate,
             'progress-bar-success': isOk,
             'progress-bar-danger': isError,
             'progress-bar-warning': isWarning,
            }"
           :style="{width: percent + '%'}">
        <span v-html="footerHTML"></span>
      </div>
      <div class="progress-bar progress-bar-remaining"
           :style="{width: (100 - percent) + '%'}"
           :tooltip="(100 - percent) + '% Available'">
      </div>
    </div>
  </template>
  <template v-else>
    <div class="progress-container progress-description-left progress-label-right"
         :style="{
           'padding-left': titleWidth,
           'padding-right': footerWidth,
          }">
      <div v-if="title" class="progress-description"  :style="{'max-width': titleWidth}" v-html="title"></div>
      <div class="progress" v-if="dataAvailable">
        <div class="progress-bar" :aria-valuenow="percent" aria-valuemin="0"
             aria-valuemax="100" :tooltip="percent + '% Used'"
             :class="{
               'animate': animate,
               'progress-bar-success': isOk,
               'progress-bar-danger': isError,
               'progress-bar-warning': isWarning,
              }"
              :style="{width: percent + '%'}">
           <span v-html="footerHTML" :style="{'max-width': footerWidth}"></span>
        </div>
        <div class="progress-bar progress-bar-remaining"
             :style="{width: (100 - percent) + '%'}"
             :tooltip="(100 - percent) + '% Available'">
        </div>
      </div>
    </div>
  </template>
  <div pf-empty-chart v-if="!dataAvailable" chart-height="45"></div>
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

  mounted() {
    this.$nextTick(function() {
      this.animate = false;
    }.bind(this));
  },

  computed: {
    dataAvailable() {
      return typeof this.value != 'undefined' && typeof this.total != 'undefined';
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
  },
};
</script>
