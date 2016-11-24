<template>
<div class="container-fluid">
  <div class="row toolbar-pf">
    <div class="col-sm-12">
      <form class="toolbar-pf-actions" :class="{'no-filter-results': !filterConfig}">
        <pf-filter-fields @filter="setFilter" :fields="filterFields" v-if="filterFields.length > 0">
          <template slot="options">
            <option :value="item" v-for="item in field.values">{{field.placeholder}}</option>
          </template>
        </pf-filter-fields>
        <pf-sort :fields="sortFields" v-if="sortFields.length > 0"></pf-sort>
        <div class="form-group toolbar-actions"
             v-if="config.actionsConfig &&
                   ((config.actionsConfig.primaryActions && config.actionsConfig.primaryActions.length > 0) ||
                    (config.actionsConfig.moreActions && config.actionsConfig.moreActions.length > 0) ||
                    config.actionsConfig.actionsInclude)">
          <button class="btn btn-default primary-action" type="button" v-for="action in config.actionsConfig.primaryActions"
                  :title="action.title"
                  @click="handleAction(action)"
                  :disabled="action.isDisabled === true">
            {{action.name}}
          </button>
          <div v-if="config.actionsConfig.actionsInclude" pf-transclude class="toolbar-pf-include-actions" ng-tranclude="actions"></div>
          <div class="dropdown dropdown-kebab-pf" v-if="config.actionsConfig.moreActions && config.actionsConfig.moreActions.length > 0">
            <button class="btn btn-link dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span class="fa fa-ellipsis-v"></span>
            </button>
            <ul class="dropdown-menu " aria-labelledby="dropdownKebab">
              <li v-for="action in config.actionsConfig.moreActions"
                  :role="action.isSeparator === true ? 'separator' : 'menuitem'"
                  :class="{'divider': action.isSeparator === true, 'disabled': action.isDisabled === true}">
                <a v-if="action.isSeparator !== true"
                   class="secondary-action"
                   :title="action.title"
                   @click="handleAction(action)">
                  {{action.name}}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="toolbar-pf-view-selector pull-right" v-if="config.viewsConfig && config.viewsConfig.views">
          <ul class="list-inline">
            <li v-for="view in config.viewsConfig.viewsList"
                :class="{'active': isViewSelected(view.id), 'disabled': checkViewDisabled(view)}"
                :title="view.title">
              <a>
                <i :class="[view.iconClass]" class="view-selector" @click="viewSelected(view.id)"></i>
              </a>
            </li>
          </ul>
        </div>
      </form>
      <div pf-filter-results config="filterConfig" v-if="filterConfig"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'pf-toolbar',

  props: {
    filterFields: {
      type: Array,
      default() {
        return [];
      },
    },
    sortFields: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      config: {},
      filterConfig: {},
    };
  },

  methods: {
    setFilter(filter, value) {
      this.$emit('filter', filter, value);
    },
  },
};
</script>
