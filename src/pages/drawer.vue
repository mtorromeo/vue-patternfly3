<template>
  <article class="page">
    <header>
      <h1>Notifications Drawer <code>&lt;pf-drawer&gt;</code></h1>
    </header>

    <section>
      <p>This component implements a content delivery system such as events, tasks and alerts. It is designed to contain a number of <code>&lt;pf-drawer-group&gt;</code>s which can each have a number of <code>&lt;pf-drawer-notification&gt;</code>s.</p>

      <h4>Related documentation</h4>
      <ol>
        <li><a href="https://www.patternfly.org/v3/pattern-library/communication/notification-drawer/" target="_blank">Pattern Library > Notification Drawer</a></li>
      </ol>

      <props-table :component-props="drawerProps">
        <props-row v-model="$root.drawer.hidden" name="hidden" description="Controls the visibility state of the drawer." />
        <props-row v-model="$root.drawer.allowExpand" name="allowExpand" description="Whether the drawer can be expanded in size or not." />
        <props-row v-model="$root.drawer.title" name="title" description="A title for the container." />
      </props-table>
    </section>

    <header>
      <h1>Notification Bell <code>&lt;pf-notification-bell&gt;</code></h1>
    </header>

    <section>
      <p>A menu item that can be used as a toggler for the <code>&lt;pf-notification-drawer&gt;</code> component. Its meant to be included in the <code>utility-menu</code> slot of <code>&lt;pf-layout&gt;</code>.</p>

      <props-table :component-props="bellProps">
        <props-row v-model="$root.drawer.updates" name="updates" description="Controls the badge indicator on the notification icon. Use &quot;true&quot; to show an empty badge indicator. Any other string value will be displayed inside the badge (it's better to use a badge content with the vertival layout)." />
      </props-table>
    </section>

    <header>
      <h1>Drawer Group <code>&lt;pf-drawer-group&gt;</code></h1>
    </header>

    <section>
      <p>A collapsible container for a number of <code>&lt;pf-drawer-notification&gt;</code>s.</p>

      <props-table :component-props="drawerGroupProps">
        <props-row v-model="$root.drawerGroup.title" name="title" description="Group header title." />
        <props-row v-model="$root.drawerGroup.counter" name="counter" description="Display a counter in the group header." />
        <props-row v-model="$root.drawerGroup.loading" name="loading" description="Show a loading indicator." />
      </props-table>

      <slots-table readonly>
        <slots-row name="default" description="Used to contain <code>&amp;lt;pf-drawer-notification&amp;gt;</code>s" />
        <slots-row name="actions" description="Used to contain <code>&amp;lt;pf-drawer-group-action&amp;gt;</code>s" />
      </slots-table>
    </section>

    <header>
      <h1>Drawer Group Action <code>&lt;pf-drawer-group-action&gt;</code></h1>
      <span class="label label-default">functional</span>
    </header>

    <section>
      <p>Styled button for the <code>#actions</code> slot of <code>&lt;pf-drawer-group&gt;</code>.</p>
    </section>

    <header>
      <h1>Drawer Notification <code>&lt;pf-drawer-notification&gt;</code></h1>
    </header>

    <section>
      <p>A single notification/event/message.</p>

      <props-table :component-props="drawerNotificationProps">
        <props-row v-model="$root.drawerNotification.action" name="action" description="Action button definition." code />
        <props-row v-model="$root.drawerNotification.actions" name="actions" description="List of actions displayed in a dropdown." code />
        <props-row v-model="$root.drawerNotification.message" name="message" description="The notification message." />
        <props-row v-model="$root.drawerNotification.date" name="date" description="Event date." />
        <props-row v-model="$root.drawerNotification.time" name="time" description="Event time." />
        <props-row v-model="$root.drawerNotification.unread" name="unread" description="Unread state." />
        <props-row v-model="$root.drawerNotification.type" name="type" description="The type of notification. Can be on of: info, success, warning, danger." :options="['info', 'success', 'warning', 'danger']" />
      </props-table>
    </section>
  </article>
</template>

<script>
import { Drawer, DrawerGroup, DrawerNotification, NotificationBell } from 'vue-patternfly';

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
