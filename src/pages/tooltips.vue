<template>
<article class="page">
  <header>
    <h1>Tooltips <code>v-tooltip</code></h1>
  </header>

  <section>
    <p>
      Tooltips are implemented with a <a href="https://vuejs.org/v2/guide/syntax.html#Directives" target="_blank">Vue directive</a> wrapper over <a href="https://github.com/HubSpot/tooltip" target="_blank">tether-tooltip</a> instead of a component as this allows to use them on HTML tags that need to be nested in a specific way such as <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;li&gt;</code>, etc...
    </p>

    <p>
      The tooltip's position can be altered using directive modifiers (e.g. <code>&lt;div v-tooltip.right-middle=&quot;'My tooltip'&quot;&gt;Test&lt;/div&gt;</code>) or using the <code>data-placement</code> data attribute (e.g. <code>&lt;div v-tooltip=&quot;'My tooltip'&quot; data-placement=&quot;right-middle&quot;&gt;Test&lt;/div&gt;</code>)
    </p>

    <div class="cards-pf container-fluid container-cards-pf">
      <div class="row-cards-pf">
        <pf-card class="col-md-5 col-lg-3" title="Tooltip example" v-tooltip="tooltip" :data-placement="position">
          Hover over this card
        </pf-card>
      </div>
    </div>

    <props-table title="Attributes">
      <tr>
        <td>v-tooltip</td>
        <td>The text of the tooltip.</td>
        <td>String</td>
        <td></td>
        <td>
          <input class="form-control" type="text" v-model="tooltip">
        </td>
      </tr>
      <tr>
        <td>data-placement</td>
        <td>Where the tooltip should be positioned relative to the element.</td>
        <td>String</td>
        <td>top-center</td>
        <td>
          <select class="form-control" v-model="position">
            <option v-for="p in positions" :value="p">{{p}}</option>
          </select>
        </td>
      </tr>
    </props-table>
  </section>
</article>
</template>

<script>
export default {
  name: 'tooltips-page',

  data() {
    return {
      tooltip: 'Test tooltip 1',
      position: 'right-top',
      loading: true,
      positions: [
        'top',
        'left',
        'right',
        'bottom',
        'top-left',
        'left-top',
        'left-middle',
        'left-bottom',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'right-bottom',
        'right-middle',
        'right-top',
        'top-right',
        'top-center',
      ],
    };
  },
};
</script>
