<template>
<article class="page">
  <header>
    <h1>Table <code>&lt;pf-table&gt;</code></h1>
  </header>

  <section>
    <pf-table :columns="table.columns"
              :rows="table.rows"
              :page.sync="table.page"
              :pages="table.pages"
              :striped="table.striped"
              :bordered="table.bordered"
              :hover="table.hover"
              :selectable="table.selectable"
              :sortable="table.sortable"
              :scrollable="table.scrollable"
              :sort-by.sync="table.sortBy"
              :sort-direction.sync="table.sortDirection"
              style="height:250px">
      <template scope="data">
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

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/content-views/table-view/#_" target="_blank">Pattern Library > Content Views > Table View</a></li>
      <li><a href="http://www.patternfly.org/pattern-library/widgets/#tables" target="_blank">Pattern Library > Widgets > Tables</a></li>
    </ol>

    <props-table :component-props="tableProps">
      <props-row name="striped" description="Striped table rows" v-model="table.striped"></props-row>
      <props-row name="bordered" description="Borders on all sides of the table and cells" v-model="table.bordered"></props-row>
      <props-row name="hover" description="Enable hover state on table rows" v-model="table.hover"></props-row>
      <props-row name="selectable" description="Make every table row selectable" v-model="table.selectable"></props-row>
      <props-row name="sortable" description="Enable sorting by table columns" v-model="table.sortable"></props-row>
      <props-row name="scrollable" description="Enable scrolling with fixed headers" v-model="table.scrollable"></props-row>
      <props-row name="columns" description="List of columns" v-model="table.columns" code></props-row>
      <props-row name="rows" description="List of rows" v-model="table.rows" code></props-row>
      <props-row name="page" description="Current page number" v-model="table.page"></props-row>
      <props-row name="pages" description="Number of available pages" v-model="table.pages"></props-row>
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
            state: 'New York'
          },
          {
            id: 2,
            name: 'Joe',
            surname: 'Black',
            city: 'Miami',
            state: 'Florida'
          },
          {
            id: 3,
            name: 'David',
            surname: 'White',
            city: 'Boston',
            state: 'Massachusetts'
          },
          {
            id: 1,
            name: 'John',
            surname: 'Smith',
            city: 'New York',
            state: 'New York'
          },
          {
            id: 2,
            name: 'Joe',
            surname: 'Black',
            city: 'Miami',
            state: 'Florida'
          },
          {
            id: 3,
            name: 'David',
            surname: 'White',
            city: 'Boston',
            state: 'Massachusetts'
          },
          {
            id: 1,
            name: 'John',
            surname: 'Smith',
            city: 'New York',
            state: 'New York'
          },
          {
            id: 2,
            name: 'Joe',
            surname: 'Black',
            city: 'Miami',
            state: 'Florida'
          },
          {
            id: 3,
            name: 'David',
            surname: 'White',
            city: 'Boston',
            state: 'Massachusetts'
          },
          {
            id: 1,
            name: 'John',
            surname: 'Smith',
            city: 'New York',
            state: 'New York'
          },
          {
            id: 2,
            name: 'Joe',
            surname: 'Black',
            city: 'Miami',
            state: 'Florida'
          },
          {
            id: 3,
            name: 'David',
            surname: 'White',
            city: 'Boston',
            state: 'Massachusetts'
          },
          {
            id: 1,
            name: 'John',
            surname: 'Smith',
            city: 'New York',
            state: 'New York'
          },
          {
            id: 2,
            name: 'Joe',
            surname: 'Black',
            city: 'Miami',
            state: 'Florida'
          },
          {
            id: 3,
            name: 'David',
            surname: 'White',
            city: 'Boston',
            state: 'Massachusetts'
          },
        ],
        striped: true,
        bordered: true,
        hover: true,
        selectable: true,
        sortable: true,
        scrollable: true,
        page: 1,
        pages: 10,
        sortBy: '',
        sortDirection: '',
      },
    };
  },
};
</script>
