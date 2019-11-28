<template>
<article class="page">
  <header>
    <h1>ListView <code>&lt;pf-list-view&gt;</code></h1>
  </header>

  <section>
    <p>This is an implementation of the List View pattern.</p>

    <p>The view is composed by the <code>pf-list-view</code>, <code>pf-list-item</code> and <code>pf-list-item-additional-info</code> components nested together.</p>

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/content-views/list-view/" target="_blank">Pattern Library > Content Views > List View</a></li>
    </ol>

    <div class="demo-container">
      <pf-list-view
        :rows="listview.rows"
        :key-name="listview.keyName"
        :page.sync="listview.page"
        :total-items="listview.totalItems"
        :items-per-page.sync="listview.itemsPerPage"
        :items-per-page-options="listview.itemsPerPageOptions"
        :selectable="listview.selectable"
        :expandable="listview.expandable"
        :stacked="listview.stacked"
        :expanded="expandedRow"
      >
        <pf-list-item
          slot-scope="{row}"
          :icon="listitem.icon"
          :icon-src="listitem.iconSrc"
          :icon-size="listitem.iconSize"
          :icon-variant="listitem.iconVariant"
        >
          <div v-if="listitem.slotDefault.enabled" v-html="listitem.slotDefault.content"></div>
          <template #left v-if="row.id === 1 && listitem.slotLeft.enabled">
            <span v-html="listitem.slotLeft.content"></span>
          </template>
          <template #heading>
            <div v-if="row.id === 1 && listitem.slotHeading.enabled" v-html="listitem.slotHeading.content"></div>
            <div v-if="row.id !== 1">{{row.name}} {{row.surname}}</div>
          </template>
          <template #description>
            <div v-if="row.id === 1 && listitem.slotDescription.enabled" v-html="listitem.slotDescription.content"></div>
            <div v-if="row.id !== 1">{{row.city}} {{row.state}}</div>
          </template>
          <template #additional-info>
            <pf-list-item-additional-info>
              <strong>113,735</strong><span>Service One</span>
            </pf-list-item-additional-info>
            <pf-list-item-additional-info>
              <strong>35%</strong><span>Service Two</span>
            </pf-list-item-additional-info>
            <pf-list-item-additional-info expandable>
              <pf-icon name="pficon-flavor"></pf-icon> <strong>4</strong> hosts
              <template #expansion>Additional info about {{row.name}}'s hosts</template>
            </pf-list-item-additional-info>
          </template>
        </pf-list-item>

        <template #action>
          <a href="#" @click.prevent class="btn btn-default">
            Action
          </a>
        </template>

        <template #dropdown>
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </template>

        <template #expansion="{row}">Showing additional info about {{row.name}}</template>
      </pf-list-view>
    </div>

    <props-table :component-props="listviewProps">
      <props-row name="selectable" description="Make every list item selectable" v-model="listview.selectable"/>
      <props-row name="expandable" description="Make every list item expandable" v-model="listview.expandable"/>
      <props-row name="stacked" description="Stacked items" v-model="listview.stacked"/>
      <props-row name="rows" description="List of items" v-model="listview.rows" code/>
      <props-row name="keyName" description="Name of the property of each row to use as unique key (v-for)" v-model="listview.keyName"/>
      <props-row name="page" description="Current page number" v-model="listview.page"/>
      <props-row name="totalItems" description="Total number of items (used to calculate the number of pages)" v-model="listview.totalItems"/>
      <props-row name="itemsPerPage" description="Number of items to display per page (0 = disable paging controls)" v-model="listview.itemsPerPage"/>
      <props-row name="itemsPerPageOptions" description="Available options to change the number of items per page" v-model="listview.itemsPerPageOptions"/>
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
        <tr>
          <td>expansion</td>
          <td>The content of show below the item when it is expanded.</td>
          <td><code>row</code>: the row data</td>
        </tr>
      </tbody>
    </table>
  </section>


  <header>
    <h1>ListItem <code>&lt;pf-list-item&gt;</code></h1>
  </header>

  <section>
    <p><code>pf-list-item</code>'s are used inside the default slot of <code>pf-list-view</code> and represent a template to be used by each item.</p>

    <props-table :component-props="listitemProps">
      <props-row name="icon" description="Icon name. Empty to disable." v-model="listitem.icon"/>
      <props-row name="iconSrc" description="Url for an image to use as icon (overrides the &quot;icon&quot; prop)" v-model="listitem.iconSrc"/>
      <props-row name="iconSize" description="Icon size" v-model="listitem.iconSize" :options="['sm', 'md', 'lg']"/>
      <props-row name="iconVariant" description="Icon variant" v-model="listitem.iconVariant" :options="['', 'info', 'success', 'warning', 'danger']"/>
    </props-table>

    <slots-table toggle>
      <slots-row name="default" description="The content of the list item. This overrides every other slot." :enabled.sync="listitem.slotDefault.enabled" v-model="listitem.slotDefault.content"/>
      <slots-row name="left" description="Slot to override the icon" :enabled.sync="listitem.slotLeft.enabled" v-model="listitem.slotLeft.content"/>
      <slots-row name="heading" description="Item's title." :enabled.sync="listitem.slotHeading.enabled" v-model="listitem.slotHeading.content"/>
      <slots-row name="description" description="Item's description." :enabled.sync="listitem.slotDescription.enabled" v-model="listitem.slotDescription.content"/>
      <slots-row name="additional-info" description="Additional fragments of informations. Use <code>pf-list-item-additional-info</code> here."/>
    </slots-table>
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
        keyName: 'id',
        selectable: true,
        expandable: false,
        stacked: false,
        page: 1,
        totalItems: 95,
        itemsPerPage: 0,
        itemsPerPageOptions: [10, 25, 50, 100, 500],
      },
      listitemProps: VuePatternfly.ListItem.props,
      listitem: {
        icon: 'fa-plane',
        iconSrc: 'https://avatars0.githubusercontent.com/u/51503?s=50&v=4',
        iconSize: 'md',
        iconVariant: '',
        slotDefault: {
          enabled: false,
          content: '<strong>Important!</strong> extended information here.',
        },
        slotLeft: {
          enabled: true,
          content: '<span class="pficon pf-icon-img list-view-pf-icon-md list-pf-icon-bordered" style="background-image: url(https://duckduckgo.com/i/ceec039d.png); background-color: #363636"></span>',
        },
        slotHeading: {
          enabled: true,
          content: 'Heading title',
        },
        slotDescription: {
          enabled: true,
          content: 'Description line',
        },
      },
    };
  },

  methods: {
    expandedRow(row) {
      console.log(row);
      return Boolean(row.id % 2);
    },
  },
};
</script>
