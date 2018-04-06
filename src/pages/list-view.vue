<template>
<article class="page">
  <header>
    <h1>ListView <code>&lt;pf-list-view&gt;</code></h1>
  </header>

  <section>
    <pf-list-view
      :rows="listview.rows"
      :page.sync="listview.page"
      :total-items="listview.totalItems"
      :items-per-page.sync="listview.itemsPerPage"
      :items-per-page-options="listview.itemsPerPageOptions"
      :selectable="listview.selectable"
      :expandable="listview.expandable"
      :stacked="listview.stacked"
    >
      <pf-list-item
        slot-scope="data"
        icon="plane"
        icon-size="md"
        :icon-variant="data.row.city == 'Miami' ? 'danger' : 'info'"
      >
        <template slot="heading">{{data.row.name}} {{data.row.surname}}</template>
        <template slot="description">{{data.row.city}} {{data.row.state}}</template>
        <template slot="additional-info">
          <pf-list-item-additional-info>
            <strong>113,735</strong><span>Service One</span>
          </pf-list-item-additional-info>
          <pf-list-item-additional-info>
            <strong>35%</strong><span>Service Two</span>
          </pf-list-item-additional-info>
          <pf-list-item-additional-info expandable>
            <span class="pficon pficon-flavor"></span><strong>4</strong> hosts
            <template slot="expansion">Additional info about {{data.row.name}}'s hosts</template>
          </pf-list-item-additional-info>
        </template>
      </pf-list-item>

      <template slot="expansion" slot-scope="data">Showing additional info about {{data.row.name}}</template>

      <a slot="action" href="#" @click.prevent class="btn btn-default">
        Action
      </a>

      <template slot="dropdown">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </template>
    </pf-list-view>

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/content-views/list-view/" target="_blank">Pattern Library > Content Views > List View</a></li>
    </ol>

    <props-table :component-props="listviewProps">
      <props-row name="selectable" description="Make every list item selectable" v-model="listview.selectable"></props-row>
      <props-row name="expandable" description="Make every list item expandable" v-model="listview.expandable"></props-row>
      <props-row name="stacked" description="Stacked items" v-model="listview.stacked"></props-row>
      <props-row name="rows" description="List of items" v-model="listview.rows" code></props-row>
      <props-row name="page" description="Current page number" v-model="listview.page"></props-row>
      <props-row name="totalItems" description="Total number of items (used to calculate the number of pages)" v-model="listview.totalItems"></props-row>
      <props-row name="itemsPerPage" description="Number of items to display per page (0 = disable paging controls)" v-model="listview.itemsPerPage"></props-row>
      <props-row name="itemsPerPageOptions" description="Available options to change the number of items per page" v-model="listview.itemsPerPageOptions"></props-row>
    </props-table>


    <h3>Slots</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Scope properties</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>default</td>
          <td>Template for a single item of the view</td>
          <td><code>row</code>: the row data</td>
        </tr>
        <tr>
          <td>action</td>
          <td>The action column. Should typically include a button.</td>
          <td><code>row</code>: the row data</td>
        </tr>
        <tr>
          <td>dropdown</td>
          <td>The dropdown items of the Actions column. You should specify a list of <code>li > a</code> items.</td>
          <td><code>row</code>: the row data</td>
        </tr>
      </tbody>
    </table>
  </section>
</article>
</template>

<script>
import VuePatternfly from 'vue-patternfly';

export default {
  name: 'list-view-page',

  data() {
    return {
      listviewProps: VuePatternfly.ListView.props,
      listview: {
        rows: [
          {
            id: 1,
            name: 'John',
            surname: 'Smith',
            city: 'New York',
            state: 'New York',
          },
          {
            id: 2,
            name: 'Joe',
            surname: 'Black',
            city: 'Miami',
            state: 'Florida',
          },
          {
            id: 3,
            name: 'David',
            surname: 'White',
            city: 'Boston',
            state: 'Massachusetts',
          },
        ],
        selectable: true,
        expandable: false,
        stacked: false,
        page: 1,
        totalItems: 95,
        itemsPerPage: 0,
        itemsPerPageOptions: [10, 25, 50, 100, 500],
      },
    };
  },
};
</script>
