<template>
<article class="page">
  <header>
    <h1>Notifications Drawer <code>&lt;pf-drawer&gt;</code></h1>
  </header>

  <section>
    <p>This component implements a content delivery system such as events, tasks and alerts. It is designed to contain a number of <code>&lt;pf-drawer-group&gt;</code>s which can each have a number of <code>&lt;pf-drawer-notification&gt;</code>s.</p>

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/communication/notification-drawer/" target="_blank">Pattern Library > Notification Drawer</a></li>
    </ol>

    <props-table :component-props="drawerProps">
      <props-row name="hidden" description="Controls the visibility state of the drawer." v-model="$root.drawer.hidden"/>
      <props-row name="allowExpand" description="Whether the drawer can be expanded in size or not." v-model="$root.drawer.allowExpand"/>
      <props-row name="title" description="A title for the container." v-model="$root.drawer.title"/>
    </props-table>
  </section>


  <header>
    <h1>Notification Bell <code>&lt;pf-notification-bell&gt;</code></h1>
  </header>

  <section>
    <p>A menu item that can be used as a toggler for the <code>&lt;pf-notification-drawer&gt;</code> component. Its meant to be included in the <code>utility-menu</code> slot of <code>&lt;pf-layout&gt;</code>.</p>

    <props-table :component-props="bellProps">
      <props-row name="updates" description="Controls the badge indicator on the notification icon. Use &quot;true&quot; to show an empty badge indicator. Any other string value will be displayed inside the badge (it's better to use a badge content with the vertival layout)." v-model="$root.drawer.updates"/>
    </props-table>
  </section>


  <header>
    <h1>Drawer Group <code>&lt;pf-drawer-group&gt;</code></h1>
  </header>

  <section>
    <p>A collapsible container for a number of <code>&lt;pf-drawer-notification&gt;</code>s.</p>

    <props-table :component-props="drawerGroupProps">
      <props-row name="title" description="Group header title." v-model="$root.drawerGroup.title"/>
      <props-row name="counter" description="Display a counter in the group header." v-model="$root.drawerGroup.counter"/>
      <props-row name="action" description="Title for an action link at the bottom of the group." v-model="$root.drawerGroup.action"/>
      <props-row name="loading" description="Show a loading indicator." v-model="$root.drawerGroup.loading"/>
    </props-table>
  </section>


  <header>
    <h1>Drawer Notification <code>&lt;pf-drawer-notification&gt;</code></h1>
  </header>

  <section>
    <p>A single notification/event/message.</p>

    <props-table :component-props="drawerNotificationProps">
      <props-row name="action" description="Action button definition." v-model="$root.drawerNotification.action" code/>
      <props-row name="actions" description="List of actions displayed in a dropdown." v-model="$root.drawerNotification.actions" code/>
      <props-row name="message" description="The notification message." v-model="$root.drawerNotification.message"/>
      <props-row name="date" description="Event date." v-model="$root.drawerNotification.date"/>
      <props-row name="time" description="Event time." v-model="$root.drawerNotification.time"/>
      <props-row name="unread" description="Unread state." v-model="$root.drawerNotification.unread"/>
      <props-row name="type" description="The type of notification. Can be on of: info, success, warning, danger." :options="['info', 'success', 'warning', 'danger']" v-model="$root.drawerNotification.type"/>
    </props-table>
  </section>
</article>
</template>

<script>
import VuePatternfly from 'vue-patternfly';

const {Drawer, DrawerGroup, DrawerNotification, NotificationBell} = VuePatternfly;

export default {
  name: 'drawer-page',

  data() {
    return {
      drawerProps: Drawer.props,
      drawerGroupProps: DrawerGroup.props,
      drawerNotificationProps: DrawerNotification.props,
      bellProps: NotificationBell.props,
    };
  },
};
</script>
