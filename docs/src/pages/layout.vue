<template>
<article class="page">
  <header>
    <h1>Layout <code>&lt;pf-layout&gt;</code></h1>
  </header>

  <section>
    <p>This component handles the application's navigation controls and is a perfect fit for the root element of the Vue.js application.</p>
    <p>It works well with <i>vue-router</i> to handle the application routing using <code>&lt;router-link&gt;</code> in the menu slots and <code>&lt;router-view&gt;</code> as the default slot (See the vue-router example below).</p>

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/navigation/horizontal-navigation/" target="_blank">Pattern Library > Horizontal Navigation</a></li>
      <li><a href="http://www.patternfly.org/pattern-library/navigation/vertical-navigation/" target="_blank">Pattern Library > Vertical Navigation</a></li>
      <li><a href="http://router.vuejs.org/en/" target="_blank">Vue Router</a></li>
    </ol>

    <h3>Props</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>horizontal</td>
          <td>Enable horizontal navigation layout</td>
          <td>Boolean</td>
          <td>false</td>
          <td>
            <input type="checkbox" v-model="$root.layoutHorizontal">
          </td>
        </tr>
        <tr>
          <td>icons</td>
          <td>Display icons in the vertical navigation enabling a compact menu when collapsed</td>
          <td>Boolean</td>
          <td>false</td>
          <td>
            <input type="checkbox" v-model="$root.layoutIcons">
          </td>
        </tr>
        <tr>
          <td>collapsable</td>
          <td>Collapse the vertical navigation menu</td>
          <td>Boolean</td>
          <td>true</td>
          <td>
            <input type="checkbox" v-model="$root.layoutCollapsable">
          </td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Disable all layout elements</td>
          <td>Boolean</td>
          <td>false</td>
          <td>
            <input type="checkbox" v-model="$root.layoutDisabled">
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Slots</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>default</td>
          <td>Page content</td>
        </tr>
        <tr>
          <td>brand</td>
          <td>The top-left brand image / title</td>
        </tr>
        <tr>
          <td>utility-menu</td>
          <td>The top-right utility menu</td>
        </tr>
        <tr>
          <td>horizontal-menu</td>
          <td>The horizontal navigation menu</td>
        </tr>
        <tr>
          <td>vertical-menu</td>
          <td>The vertical navigation menu</td>
        </tr>
      </tbody>
    </table>

    <h3>Example with vue-router</h3>
    <pre><code class="lang-html" v-text="vueroutersample"></code></pre>
  </section>
</article>
</template>

<script>
import vueroutersample from './layout/vue-router.html';

export default {
  name: 'layout-page',

  data() {
    return {
      vueroutersample,
    };
  },
};
</script>
