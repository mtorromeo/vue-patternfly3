<template>
  <article class="page">
    <header>
      <h1>Layout <code>&lt;pf-layout&gt;</code></h1>
    </header>

    <section>
      <p>This component handles the application's navigation controls and is a perfect fit for the root element of the Vue.js application.</p>
      <p>It works well with <i>vue-router</i> to handle the application routing using <code>&lt;router-link&gt;</code> in the menu slots and <code>&lt;router-view&gt;</code> as the default slot (See the vue-router example below).</p>
      <p><code>&lt;pf-menu-item&gt;</code>s can be used in both vertical-menu and horizontal-menu slots and are integrated with vue-router so that you can simply use the <code>to</code> property to insert a <code>&lt;router-link&gt;</code>.</p>
      <p>To insert a secondary or tertiary submenu into a vertical-menu slot you have to nest a <code>&lt;pf-vertical-submenu&gt;</code> component.</p>
      <p>A separator component for vertical navigation, which is not part of the original patternfly design, is available as <code>&lt;pf-vertical-nav-divider&gt;</code>.</p>
      <p>Note that there is no corresponding pf-horizontal-submenu as you can simply nest <code>&lt;pf-menu-item&gt;</code>s there.</p>

      <h4>Related documentation</h4>
      <ol>
        <li><a href="https://www.patternfly.org/v3/pattern-library/navigation/horizontal-navigation/" target="_blank">Pattern Library > Horizontal Navigation</a></li>
        <li><a href="https://www.patternfly.org/v3/pattern-library/navigation/vertical-navigation/" target="_blank">Pattern Library > Vertical Navigation</a></li>
        <li><a href="https://next.router.vuejs.org" target="_blank">Vue Router</a></li>
      </ol>

      <props-table :component-props="layoutProps">
        <props-row v-model="$root.layoutHorizontal" name="horizontal" description="Enable horizontal navigation layout" />
        <props-row v-model="$root.layoutHorizontalSecondary" name="horizontalSecondary" description="Show horizontal secondary menu" />
        <props-row v-model="$root.layoutDisplay" name="display" description="Switch layout type" :options="['block', 'flex', 'grid']" />
        <props-row v-model="$root.layoutIcons" name="icons" description="Display icons in the vertical navigation enabling a compact menu when collapsed" />
        <props-row v-model="$root.layoutCollapsable" name="collapsable" description="Collapse the vertical navigation menu" />
        <props-row v-model="$root.layoutNomargin" name="nomargin" description="Disable margins in the main container" />
        <props-row v-model="$root.layoutDisabled" name="disabled" description="Disable all layout elements" />
      </props-table>

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
      <pre><code class="lang-html" v-text="vueroutersample" /></pre>

      <h3>Example with tertiary menu</h3>
      <pre><code class="lang-html" v-text="tertiarymenusample" /></pre>
    </section>
  </article>
</template>

<script>
import vueroutersample from './layout/vue-router.html?raw';
import tertiarymenusample from './layout/tertiary-menu.html?raw';

import { Layout } from 'vue-patternfly';

export default {
  name: 'layout-page',

  data() {
    return {
      vueroutersample,
      tertiarymenusample,
      layoutProps: Layout.props,
    };
  },
};
</script>
