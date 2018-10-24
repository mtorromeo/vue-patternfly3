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
      <li><a href="http://www.patternfly.org/pattern-library/navigation/horizontal-navigation/" target="_blank">Pattern Library > Horizontal Navigation</a></li>
      <li><a href="http://www.patternfly.org/pattern-library/navigation/vertical-navigation/" target="_blank">Pattern Library > Vertical Navigation</a></li>
      <li><a href="http://router.vuejs.org/en/" target="_blank">Vue Router</a></li>
    </ol>

    <props-table :component-props="layoutProps">
      <props-row name="horizontal" description="Enable horizontal navigation layout" v-model="$root.layoutHorizontal"/>
      <props-row name="horizontalSecondary" description="Show horizontal secondary menu" v-model="$root.layoutHorizontalSecondary"/>
      <props-row name="display" description="Switch layout type" v-model="$root.layoutDisplay" :options="['block', 'flex', 'grid']"/>
      <props-row name="icons" description="Display icons in the vertical navigation enabling a compact menu when collapsed" v-model="$root.layoutIcons"/>
      <props-row name="collapsable" description="Collapse the vertical navigation menu" v-model="$root.layoutCollapsable"/>
      <props-row name="nomargin" description="Disable margins in the main container" v-model="$root.layoutNomargin"/>
      <props-row name="disabled" description="Disable all layout elements" v-model="$root.layoutDisabled"/>
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
    <pre><code class="lang-html" v-text="vueroutersample"></code></pre>

    <h3>Example with tertiary menu</h3>
    <pre><code class="lang-html" v-text="tertiarymenusample"></code></pre>
  </section>
</article>
</template>

<script>
import vueroutersample from './layout/vue-router.html';
import tertiarymenusample from './layout/tertiary-menu.html';

import VuePatternfly from 'vue-patternfly';

export default {
  name: 'layout-page',

  data() {
    return {
      vueroutersample,
      tertiarymenusample,
      layoutProps: VuePatternfly.Layout.props,
    };
  },
};
</script>
