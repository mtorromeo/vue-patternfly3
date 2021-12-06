<template>
  <article class="page">
    <header>
      <h1>Table <code>&lt;pf-table&gt;</code></h1>
    </header>

    <section>
      <h4>Related documentation</h4>
      <ol>
        <li><a href="https://www.patternfly.org/v3/pattern-library/content-views/table-view/#_" target="_blank">Pattern Library > Content Views > Table View</a></li>
        <li><a href="https://www.patternfly.org/v3/pattern-library/widgets/#tables" target="_blank">Pattern Library > Widgets > Tables</a></li>
      </ol>

      <div class="demo-container">
        <pf-table v-model:page="table.page"
                  v-model:items-per-page="table.itemsPerPage"
                  v-model:sort-by="table.sortBy"
                  v-model:sort-direction="table.sortDirection"
                  :columns="table.columns"
                  :rows="table.rows"
                  :key-name="table.keyName"
                  :total-items="table.totalItems"
                  :items-per-page-options="table.itemsPerPageOptions"
                  :striped="table.striped"
                  :bordered="table.bordered"
                  :hover="table.hover"
                  :selectable="table.selectable"
                  :sortable="table.sortable"
                  :scrollable="table.scrollable"
                  style="height:250px">
          <template #default="{row}">
            <td style="width:50px">
              #{{ row.id }}
            </td>
            <td>{{ row.name }}</td>
            <td>{{ row.surname }}</td>
            <td>{{ row.city }}</td>
            <td>{{ row.state }}</td>
          </template>
          <template #action>
            <a href="#" class="btn btn-default" @click.prevent>
              Action
            </a>
          </template>
          <template #dropdown>
            <li><a href="#" @click.prevent>Action</a></li>
            <li><a href="#" @click.prevent>Another action</a></li>
            <li><a href="#" @click.prevent>Something else here</a></li>
            <li role="separator" class="divider" />
            <li><a href="#" @click.prevent>Separated link</a></li>
          </template>
          <template #footer>
            Footer slot
          </template>
        </pf-table>
      </div>

      <props-table :component-props="tableProps">
        <props-row v-model="table.striped" name="striped" description="Striped table rows" />
        <props-row v-model="table.bordered" name="bordered" description="Borders on all sides of the table and cells" />
        <props-row v-model="table.hover" name="hover" description="Enable hover state on table rows" />
        <props-row v-model="table.selectable" name="selectable" description="Make every table row selectable" />
        <props-row v-model="table.sortable" name="sortable" description="Enable sorting by table columns" />
        <props-row v-model="table.scrollable" name="scrollable" description="Enable scrolling with fixed headers" />
        <props-row v-model="table.columns" name="columns" description="List of columns" code />
        <props-row v-model="table.rows" name="rows" description="List of rows" code />
        <props-row v-model="table.keyName" name="keyName" description="Name of the property of each row to use as unique key (v-for)" />
        <props-row v-model="table.page" name="page" description="Current page number" />
        <props-row v-model="table.totalItems" name="totalItems" description="Total number of items (used to calculate the number of pages)" />
        <props-row v-model="table.itemsPerPage" name="itemsPerPage" description="Number of items to display per page (0 = disable paging controls)" />
        <props-row v-model="table.itemsPerPageOptions" name="itemsPerPageOptions" description="Available options to change the number of items per page" />
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
          <tr>
            <td>footer</td>
            <td>Content placed beside the pagination controls.</td>
            <td />
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script>
import { Table } from 'vue-patternfly';

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
        keyName: 'id',
        striped: true,
        bordered: true,
        hover: true,
        selectable: true,
        sortable: true,
        scrollable: false,
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
