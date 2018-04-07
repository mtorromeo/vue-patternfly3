<template>
<article class="page">
  <header>
    <h1>Application Launcher <code>&lt;pf-application-launcher&gt;</code></h1>
  </header>

  <section>
    <p>This component implements the application launcher icon and menu. The component is best included in the <code>utility-menu</code> slot of the <code>&lt;pf-layout&gt;</code> component.</p>
    <p>Menu items can be populated by inserting <code>&lt;pf-launcher-item&gt;</code>s in the default slot.</p>

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/application-framework/launcher/" target="_blank">Pattern Library > Application Framework > Launcher</a></li>
    </ol>

    <props-table :component-props="launcherProps">
      <props-row name="label" description="Descriptive label for the launcher" v-model="$root.launcher.label"></props-row>
      <props-row name="disabled" description="Toggles disabled state" v-model="$root.launcher.disabled"></props-row>
      <props-row name="list" description="Display icons in a list layour rather that a grid" v-model="$root.launcher.list"></props-row>
      <props-row name="open" description="Toggles open state of the launcher" v-model="$root.launcher.open"></props-row>
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
          <td>Content of the launcher. A list of <code>&lt;pf-launcher-item&gt;</code>s can be used for convenience</td>
        </tr>
      </tbody>
    </table>
  </section>


  <header>
    <h1>Launcher Item <code>&lt;pf-launcher-item&gt;</code></h1>
  </header>

  <section>
    <p>This component should be used inside a <code>&lt;pf-application-launcher&gt;</code>.</p>
    <p>All custom attributes and event listeners are propagated to the inner <code>&lt;a&gt;</code> tag for easier customization of the link and event handling</p>
  </section>

  <props-table :component-props="itemProps">
    <props-row name="icon" description="Class for the icon to use for the link item" v-model="$root.launcher.icon"></props-row>
  </props-table>

  <slots-table>
    <slots-row name="default" description="Content of the link" v-model="$root.launcher.itemText"></slots-row>
  </slots-table>
</article>
</template>

<script>
import VuePatternfly from 'vue-patternfly';
const ApplicationLauncher = VuePatternfly.ApplicationLauncher;
const LauncherItem = VuePatternfly.LauncherItem;

export default {
  name: 'application-launcher-page',

  data() {
    return {
      launcherProps: ApplicationLauncher.props,
      itemProps: LauncherItem.props,
    };
  },
};
</script>
