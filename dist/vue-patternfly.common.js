function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var c3 = _interopDefault(require('c3'));
var Dropdown = _interopDefault(require('vue-strap/src/components/Dropdown.vue'));

var AggregateStatusCard = {render: function(){with(this){return _h('div',{staticClass:"card-pf card-pf-aggregate-status",class:{ 'card-pf-accented': accented, 'card-pf-aggregate-status-alt': isLayoutTall, 'card-pf-aggregate-status-mini': isLayoutMini }},[_h('h2',{staticClass:"card-pf-title"},[(href)?_h('a',{attrs:{"href":href}},[(iconClass)?_h('span',{class:iconClass}):_e()," ",(count)?_h('span',{staticClass:"card-pf-aggregate-status-count"},[_s(count)]):_e()," ",_h('span',{staticClass:"card-pf-aggregate-status-title"},[_s(title)])]):[(iconClass)?_h('span',{class:iconClass}):_e()," ",(count)?_h('span',{staticClass:"card-pf-aggregate-status-count"},[_s(count)]):_e()," ",_h('span',{staticClass:"card-pf-aggregate-status-title"},[_s(title)])]]),_h('div',{staticClass:"card-pf-body"},[_h('p',{directives:[{name:"show",rawName:"v-show",value:(!isLayoutMini || iconClass || count),expression:"!isLayoutMini || iconClass || count"}],staticClass:"card-pf-aggregate-status-notifications"},[_t("default")])])])}},staticRenderFns: [],
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
    isLayoutTall: function isLayoutTall$1() {
      return this.layout === 'tall';
    },
    isLayoutMini: function isLayoutMini$1() {
      return this.layout === 'mini';
    },
  },
};

var C3Chart = {render: function(){with(this){return _h('div')}},staticRenderFns: [],
  name: 'pf-c3-chart',

  props: {
    type: {
      type: String,
      default: 'bar',
    },
    title: String,
    width: Number,
    height: Number,
    data: {
      type: Object,
      default: function default$1() {
        return {};
      },
    },
    axis: {
      type: Object,
      default: function default$2() {
        return {};
      },
    },
  },

  mounted: function mounted() {
    var chartData = {
      bindto: this.$el,
      size: {
        width: this.width,
        height: this.height,
      },
      data: Object.assign({}, this.data),
    };
    chartData[this.type] = {};

    chartData.data.type = this.type;

    if (this.title) {
      chartData[this.type].title = this.title;
    }

    this.chart = c3.generate(chartData);
  },
};

var Card = {render: function(){with(this){return _h('div',{staticClass:"card-pf",class:{'card-pf-accented': accented}},[(showHeader)?_h('div',{class:{'card-pf-heading': showTitlesSeparator, 'card-pf-heading-no-bottom': !showTitlesSeparator}},[(showFilterInHeader)?_h('pf-dropdown',{staticClass:"card-pf-time-frame-filter pull-right",attrs:{"text":currentFilter.label}},[_l((filter.filters),function(item){return _h('li',{class:{'selected': item === currentFilter}},[_h('a',{attrs:{"href":"javascript:void(0)","role":"menuitem","tabindex":"-1"},on:{"click":function($event){filterClicked(item);}}},[_s(item.label)])])})]):_e(),_h('h2',{staticClass:"card-pf-title"},[_s(title)])]):_e(),(subTitle)?_h('span',{staticClass:"card-pf-subtitle"},[_s(subTitle)]):_e(),_h('div',{staticClass:"card-pf-body"},[_t("default")]),(showFooter || showFilterInFooter)?_h('div',{staticClass:"card-pf-footer"},[(showFilterInFooter)?_h('pf-dropdown',{staticClass:"card-pf-time-frame-filter pull-right",attrs:{"text":currentFilter.label}},[_l((filter.filters),function(item){return _h('li',{class:{'selected': item === currentFilter}},[_h('a',{attrs:{"href":"javascript:void(0)","role":"menuitem","tabindex":"-1"},on:{"click":function($event){filterClicked(item);}}},[_s(item.label)])])})]):_e(),(showFooter)?_h('p',[(footHref)?_h('a',{class:{'card-pf-link-with-icon': footIcon, 'card-pf-link': !footIcon},attrs:{"href":footHref}},[(footIcon)?_h('span',{staticClass:"card-pf-footer-text",class:footIcon}):_e()," ",(footNote)?_h('span',{staticClass:"card-pf-footer-text"},[_s(footNote)]):_e()]):[(footIcon)?_h('span',{staticClass:"card-pf-footer-text",class:footIcon}):_e()," ",(footNote)?_h('span',{staticClass:"card-pf-footer-text"},[_s(footNote)]):_e()]]):_e()]):_e()])}},staticRenderFns: [],
  name: 'pf-card',

  props: {
    title: String,
    subTitle: String,
    footNote: String,
    footHref: String,
    footIcon: String,
    filter: {
      type: Object,
      default: function default$1() {
        return {};
      },
    },
    accented: {
      type: Boolean,
      default: true,
    },
    showTitlesSeparator: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    filterClicked: function filterClicked$1(filter) {
      this.$emit('filter', filter);
    },
  },

  computed: {
    currentFilter: function currentFilter$1() {
      if (!this.filter || !this.filter.filters) {
        return null;
      }
      if (this.filter.defaultFilter) {
        return this.filter.filters[this.filter.defaultFilter];
      }
      return this.filter.filters[0];
    },

    showFilterInHeader: function showFilterInHeader$1() {
      return this.filter && this.filter.filters && this.filter.position && this.filter.position === 'header';
    },

    showFilterInFooter: function showFilterInFooter$1() {
      return this.filter && this.filter.filters && this.filter.position && this.filter.position === 'footer';
    },

    showHeader: function showHeader$1() {
      return this.title || this.showFilterInHeader;
    },

    showFooter: function showFooter$1() {
      return this.footNote || this.footIcon;
    },
  },
};

var CardNotification = {render: function(){with(this){return _h('span',{staticClass:"card-pf-aggregate-status-notification"},[(href)?_h('a',{attrs:{"href":href}},[(iconClass)?_h('span',{class:iconClass}):_e()," "+_s(count)]):[(iconClass)?_h('span',{class:iconClass}):_e()," "+_s(count)]])}},staticRenderFns: [],
  name: 'pf-card-notification',

  props: {
    count: String,
    href: String,
    iconClass: String,
  },
};

var Dropdown$1 = {render: function(){with(this){return _h(isLi?'li':'div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(blur),expression:"blur"}],tag:"div",class:[{open:show,disabled:disabled,dropdown:isLi,'input-group-btn':inInput,'btn-group':!isLi&&!inInput}]},[_t("before"),_t("button",[(isLi)?_h('a',{class:['dropdown-toggle',buttonSize,{disabled:disabled}],attrs:{"role":"button"},on:{"keyup":function($event){if($event.keyCode!==27){ return; }show = false;}}},[_s(text)+" ",_h('span',{staticClass:"fa fa-ellipsis-v"})]):_h('button',{class:['btn btn-' + type,buttonSize,'dropdown-toggle'],attrs:{"type":"button","disabled":disabled,"aria-haspopup":"true","aria-expanded":"true"},on:{"keyup":function($event){if($event.keyCode!==27){ return; }show = false;}}},[_s(text)+" ",_h('span',{staticClass:"fa fa-ellipsis-v"})])]),_t("dropdown-menu",[_h('ul',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownKebab"}},[_t("default")])])])}},staticRenderFns: [],
  name: 'pf-dropdown',
  extends: Dropdown,
};

var EmptyChart = {render: function(){with(this){return _h('div',{staticClass:"empty-chart-content",style:({
    'height': height,
    'padding-top': padding,
  })},[_h('span',{staticClass:"pficon pficon-info"})," ",_h('span',["No data available"])])}},staticRenderFns: [],
  name: 'pf-empty-chart',

  props: {
    height: {
      type: Number,
      default: 40,
    },
  },

  computed: {
    padding: function padding$1() {
      return Math.min(Math.round((this.height - 40) / 2), 20);
    },
  },
};

var Sort = {render: function(){with(this){return _h('div',{staticClass:"sort-pf"},[_h('form',[_h('div',{staticClass:"form-group"},[_h('pf-dropdown',{attrs:{"text":current.title}},[_l((fields),function(item,i){return _h('li',{class:{'selected': item === current}},[_h('a',{staticClass:"sort-field",attrs:{"href":"javascript:void(0);","role":"menuitem","tabindex":"-1"},on:{"click":function($event){select(i);}}},[_s(item.title)])])})]),_h('button',{staticClass:"btn btn-link",attrs:{"type":"button"},on:{"click":invert}},[_h('span',{staticClass:"sort-direction",class:sortIconClass})])])])])}},staticRenderFns: [],
  name: 'pf-sort',

  props: {
    fields: {
      type: Array,
      default: function default$1() {
        return [];
      },
    },
    direction: {
      type: String,
      default: 'ascending',
    },
    selected: Number,
  },

  data: function data() {
    return {
      active: -1,
      ascending: true,
    };
  },

  watch: {
    selected: {
      handler: function handler () {
        this.active = this.selected;
      },
      immediate: true,
    },
    direction: {
      handler: function handler$1 () {
        this.ascending = this.direction == 'ascending';
      },
      immediate: true,
    },
  },

  computed: {
    current: function current$1() {
      if (typeof this.active === 'undefined' || this.active >= this.fields.length || this.active < 0) {
        this.select(0);
        return this.fields.length ? this.fields[0] : {};
      }
      return this.fields[this.active];
    },

    sortIconClass: function sortIconClass$1() {
      var dir = this.ascending ? 'asc' : 'desc';
      var typ = this.current.type == 'numeric' ? 'numeric' : 'alpha';
      return ("fa fa-sort-" + typ + "-" + dir);
    },
  },

  methods: {
    select: function select$1(i) {
      this.active = i;
      this.$emit('change', this.current, this.ascending);
    },
    invert: function invert$1() {
      this.ascending = !this.ascending;
      this.$emit('change', this.current, this.ascending);
    },
  },
};

var Toolbar = {render: function(){with(this){return _h('div',{staticClass:"container-fluid"},[_h('div',{staticClass:"row toolbar-pf"},[_h('div',{staticClass:"col-sm-12"},[_h('form',{staticClass:"toolbar-pf-actions",class:{'no-filter-results': !config.filterConfig}},[(config.filterConfig)?_h('div',{attrs:{"pf-filter-fields":"","config":"config.filterConfig","add-filter-fn":"addFilter"}}):_e(),(sortFields.length > 0)?_h('pf-sort',{attrs:{"fields":sortFields},on:{"change":setSort}}):_e(),(config.actionsConfig &&
                   ((config.actionsConfig.primaryActions && config.actionsConfig.primaryActions.length > 0) ||
                    (config.actionsConfig.moreActions && config.actionsConfig.moreActions.length > 0) ||
                    config.actionsConfig.actionsInclude))?_h('div',{staticClass:"form-group toolbar-actions"},[_l((config.actionsConfig.primaryActions),function(action){return _h('button',{staticClass:"btn btn-default primary-action",attrs:{"type":"button","title":action.title,"disabled":action.isDisabled === true},on:{"click":function($event){handleAction(action);}}},[_s(action.name)])}),(config.actionsConfig.actionsInclude)?_h('div',{staticClass:"toolbar-pf-include-actions",attrs:{"pf-transclude":"","ng-tranclude":"actions"}}):_e(),(config.actionsConfig.moreActions && config.actionsConfig.moreActions.length > 0)?_h('pf-dropdown',[_l((config.actionsConfig.moreActions),function(action){return _h('li',{class:{'divider': action.isSeparator === true, 'disabled': action.isDisabled === true},attrs:{"role":action.isSeparator === true ? 'separator' : 'menuitem'}},[(action.isSeparator !== true)?_h('a',{staticClass:"secondary-action",attrs:{"title":action.title},on:{"click":function($event){handleAction(action);}}},[_s(action.name)]):_e()])})]):_e()]):_e(),(config.viewsConfig && config.viewsConfig.views)?_h('div',{staticClass:"toolbar-pf-view-selector pull-right"},[_h('ul',{staticClass:"list-inline"},[_l((config.viewsConfig.viewsList),function(view){return _h('li',{class:{'active': isViewSelected(view.id), 'disabled': checkViewDisabled(view)},attrs:{"title":view.title}},[_h('a',[_h('i',{staticClass:"view-selector",class:[view.iconClass],on:{"click":function($event){viewSelected(view.id);}}})])])})])]):_e()]),(config.filterConfig)?_h('div',{attrs:{"pf-filter-results":"","config":"config.filterConfig"}}):_e()])])])}},staticRenderFns: [],
  name: 'pf-toolbar',

  props: {
    sortFields: {
      type: Array,
      default: function default$1() {
        return [];
      },
    },
  },

  data: function data() {
    return {
      config: {
        filterConfig: {},
      },
    };
  },

  methods: {
    setSort: function setSort$1(field, ascending) {
      this.$emit('sort-change', field, ascending);
    },
  },
};

var UtilizationBarChart = {render: function(){with(this){return _h('div',{staticClass:"utilization-bar-chart-pf",class:{'data-unavailable-pf': !dataAvailable}},[(!inline)?[(title)?_h('div',{staticClass:"progress-description",domProps:{"innerHTML":_s(title)}}):_e(),(dataAvailable)?_h('div',{staticClass:"progress progress-label-top-right"},[_h('div',{staticClass:"progress-bar",class:{ 'animate': animate, 'progress-bar-success': isOk, 'progress-bar-danger': isError, 'progress-bar-warning': isWarning, },style:({width: percent + '%'}),attrs:{"aria-valuenow":percent,"aria-valuemin":"0","aria-valuemax":"100","tooltip":percent + '% Used'}},[_h('span',{domProps:{"innerHTML":_s(footerHTML)}})]),_h('div',{staticClass:"progress-bar progress-bar-remaining",style:({width: (100 - percent) + '%'}),attrs:{"tooltip":(100 - percent) + '% Available'}})]):_e()]:[_h('div',{staticClass:"progress-container progress-description-left progress-label-right",style:({
           'padding-left': titleWidth,
           'padding-right': footerWidth,
          })},[(title)?_h('div',{staticClass:"progress-description",style:({'max-width': titleWidth}),domProps:{"innerHTML":_s(title)}}):_e(),(dataAvailable)?_h('div',{staticClass:"progress"},[_h('div',{staticClass:"progress-bar",class:{ 'animate': animate, 'progress-bar-success': isOk, 'progress-bar-danger': isError, 'progress-bar-warning': isWarning, },style:({width: percent + '%'}),attrs:{"aria-valuenow":percent,"aria-valuemin":"0","aria-valuemax":"100","tooltip":percent + '% Used'}},[_h('span',{style:({'max-width': footerWidth}),domProps:{"innerHTML":_s(footerHTML)}})]),_h('div',{staticClass:"progress-bar progress-bar-remaining",style:({width: (100 - percent) + '%'}),attrs:{"tooltip":(100 - percent) + '% Available'}})]):_e()])],(!dataAvailable)?_h('pf-empty-chart',{attrs:{"height":45}}):_e()])}},staticRenderFns: [],
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

  data: function data() {
    return {
      animate: true,
    };
  },

  mounted: function mounted() {
    this.$nextTick(function() {
      this.animate = false;
    }.bind(this));
  },

  computed: {
    dataAvailable: function dataAvailable$1() {
      return typeof this.value != 'undefined' && typeof this.total != 'undefined';
    },

    percent: function percent$1() {
      return Math.round(100 * this.value / this.total);
    },

    isError: function isError$1() {
      return this.percent >= this.error;
    },

    isWarning: function isWarning$1() {
      return !this.isError && this.percent >= this.warning;
    },

    isOk: function isOk$1() {
      return !this.isError && !this.isWarning;
    },

    footerHTML: function footerHTML$1() {
      if (this.footer) {
        return this.footer;
      }
      switch (this.footerFormat) {
        case 'percent':
          return ("<strong>" + (this.percent) + "%</strong> used");
        default:
          if (this.inline) {
            return ("<strong>" + (this.value) + " " + (this.units) + "</strong> used");
          }
          return ("<strong>" + (this.value) + " of " + (this.total) + " " + (this.units) + "</strong> used");
      }
    },
  },
};

var main = {
  AggregateStatusCard: AggregateStatusCard,
  C3Chart: C3Chart,
  Card: Card,
  CardNotification: CardNotification,
  Dropdown: Dropdown$1,
  EmptyChart: EmptyChart,
  Sort: Sort,
  Toolbar: Toolbar,
  UtilizationBarChart: UtilizationBarChart,
};

module.exports = main;
