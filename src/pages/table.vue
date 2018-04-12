<template>
<article class="page">
  <header>
    <h1>Table <code>&lt;pf-table&gt;</code></h1>
  </header>

  <section>
    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/content-views/table-view/#_" target="_blank">Pattern Library > Content Views > Table View</a></li>
      <li><a href="http://www.patternfly.org/pattern-library/widgets/#tables" target="_blank">Pattern Library > Widgets > Tables</a></li>
    </ol>

    <pf-table :columns="table.columns"
              :rows="table.rows"
              :page.sync="table.page"
              :total-items="table.totalItems"
              :items-per-page.sync="table.itemsPerPage"
              :items-per-page-options="table.itemsPerPageOptions"
              :striped="table.striped"
              :bordered="table.bordered"
              :hover="table.hover"
              :selectable="table.selectable"
              :sortable="table.sortable"
              :scrollable="table.scrollable"
              :sort-by.sync="table.sortBy"
              :sort-direction.sync="table.sortDirection"
              style="height:250px">
      <template slot-scope="data">
        <td style="width:50px">#{{data.row.id}}</td>
        <td>{{data.row.name}}</td>
        <td>{{data.row.surname}}</td>
        <td>{{data.row.city}}</td>
        <td>{{data.row.state}}</td>
      </template>
      <template slot="action">
        <a href="#" class="btn btn-default">
          Action
        </a>
      </template>
      <template slot="dropdown">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </template>
    </pf-table>

    <props-table :component-props="tableProps">
      <props-row name="striped" description="Striped table rows" v-model="table.striped"/>
      <props-row name="bordered" description="Borders on all sides of the table and cells" v-model="table.bordered"/>
      <props-row name="hover" description="Enable hover state on table rows" v-model="table.hover"/>
      <props-row name="selectable" description="Make every table row selectable" v-model="table.selectable"/>
      <props-row name="sortable" description="Enable sorting by table columns" v-model="table.sortable"/>
      <props-row name="scrollable" description="Enable scrolling with fixed headers" v-model="table.scrollable"/>
      <props-row name="columns" description="List of columns" v-model="table.columns" code/>
      <props-row name="rows" description="List of rows" v-model="table.rows" code/>
      <props-row name="page" description="Current page number" v-model="table.page"/>
      <props-row name="totalItems" description="Total number of items (used to calculate the number of pages)" v-model="table.totalItems"/>
      <props-row name="itemsPerPage" description="Number of items to display per page (0 = disable paging controls)" v-model="table.itemsPerPage"/>
      <props-row name="itemsPerPageOptions" description="Available options to change the number of items per page" v-model="table.itemsPerPageOptions"/>
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
          <td>Template for a single row of the table</td>
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
const Table = VuePatternfly.Table;

export default {
  name: 'table-page',

  data() {
    return {
      tableProps: Table.props,
      table: {
        columns: ['Id', 'Name', 'Surname', 'City', 'State'],
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
        striped: true,
        bordered: true,
        hover: true,
        selectable: true,
        sortable: true,
        scrollable: true,
        page: 1,
        totalItems: 95,
        itemsPerPage: 25,
        itemsPerPageOptions: [10, 25, 50, 100, 500],
        sortBy: '',
        sortDirection: '',
      },
    };
  },
};
</script>
