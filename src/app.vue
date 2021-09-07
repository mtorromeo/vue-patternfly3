<template>
  <pf-layout
    :display="$root.layoutDisplay"
    :icons="$root.layoutIcons"
    :collapsable="$root.layoutCollapsable"
    :horizontal="$root.layoutHorizontal"
    :horizontal-secondary="$root.layoutHorizontalSecondary"
    :disabled="$root.layoutDisabled || $route.path == '/'"
    :nomargin="$root.layoutNomargin"
  >
    <template #brand>
      <router-link to="/" :exact="true" class="navbar-brand navbar-brand-name">
        Vue PatternFly
      </router-link>
    </template>

    <template #utility-menu>
      <pf-notification-bell :updates="$root.drawer.updates" @click="$root.drawer.hidden = !$root.drawer.hidden" />

      <pf-dropdown tag="li" btn-class="nav-item-iconic" type="link">
        <template #text>
          <pf-icon name="pficon-user" />
          John Doe
        </template>

        <li>
          <a href="#">Logout</a>
        </li>
      </pf-dropdown>

      <pf-application-launcher v-model:open="$root.launcher.open" :label="$root.launcher.label" :disabled="$root.launcher.disabled" :list="$root.launcher.list">
        <pf-launcher-item v-tooltip.left="'Launch the Home UI'" :icon="$root.launcher.icon" href="/">
          {{ $root.launcher.itemText }}
        </pf-launcher-item>
        <pf-launcher-item icon="fa-github" href="https://github.com/mtorromeo/vue-patternfly" target="_blank">
          GitHub
        </pf-launcher-item>
        <pf-launcher-item v-tooltip.left="'Launch the Suavitate UI'" icon="pficon-build">
          Suavitate
        </pf-launcher-item>
        <pf-launcher-item v-tooltip.left="'Launch the Lorem UI'" icon="pficon-domain">
          Lorem
        </pf-launcher-item>
      </pf-application-launcher>
    </template>

    <template #horizontal-menu>
      <pf-menu-item
        to="/get-started"
        exact
        title="Get Started"
      />

      <pf-menu-item
        to="/layout"
        exact
        title="Layout"
      />

      <pf-menu-item
        to="/application-launcher"
        exact
        title="Application Launcher"
      />

      <pf-menu-item
        to="/toolbar"
        exact
        title="Toolbar"
      />

      <pf-menu-item
        to="/table"
        exact
        title="Table"
      />

      <pf-menu-item
        to="/list-view"
        exact
        title="ListView"
        icon="list-th-list"
      />

      <pf-menu-item
        to="/cards"
        exact
        title="Cards"
      />

      <pf-menu-item
        to="/notifications"
        title="Notifications"
        badge="123"
      >
        <pf-menu-item
          to="/notifications"
          exact
          title="Inline / Toast"
        />

        <pf-menu-item
          to="/notifications/drawer"
          exact
          title="Notification Drawer"
        />
      </pf-menu-item>

      <pf-menu-item
        to="/modal"
        exact
        title="Modal"
      />
    </template>

    <template #vertical-menu>
      <pf-menu-item
        to="/get-started"
        exact
        title="Get Started"
        icon="fa-play-circle"
      />

      <pf-vertical-nav-divider title="Application Framework" />

      <pf-menu-item
        to="/layout"
        exact
        title="Layout"
        icon="fa-columns"
      />

      <pf-menu-item
        to="/application-launcher"
        exact
        title="Launcher"
        icon="fa-th"
      />

      <pf-vertical-nav-divider title="Content Views" />

      <pf-menu-item
        to="/table"
        exact
        title="Table"
        icon="fa-columns"
      />

      <pf-menu-item
        to="/list-view"
        exact
        title="ListView"
        icon="fa-columns"
        badge="123"
      />

      <pf-menu-item
        to="/cards"
        exact
        title="Cards"
        icon="fa-th"
      />

      <pf-vertical-nav-divider title="Communication" />

      <pf-vertical-submenu title="Notifications" icon="fa-bell">
        <pf-menu-item
          to="/notifications"
          exact
          title="Inline / Toast"
          badge="12"
        />

        <pf-menu-item
          to="/notifications/drawer"
          exact
          title="Notification Drawer"
          badge="12"
        />
      </pf-vertical-submenu>

      <pf-vertical-nav-divider title="Form and Controls" />

      <pf-menu-item
        to="/modal"
        exact
        title="Modal"
        icon="pficon-applications"
      />

      <pf-menu-item
        to="/toolbar"
        exact
        title="Toolbar"
        icon="fa-columns"
      />

      <pf-menu-item
        to="/expand-collapse"
        exact
        title="Expand/Collapse"
        icon="fa-angle-right"
      />

      <pf-vertical-nav-divider title="Widgets" />

      <pf-menu-item
        to="/form-controls"
        exact
        title="Form Controls"
        icon="fa-edit"
      />

      <pf-menu-item
        to="/utilization-bar"
        exact
        title="Utilization Bar"
        icon="fa-building"
      />

      <pf-menu-item
        icon="fa-github"
        href="https://github.com/mtorromeo/vue-patternfly"
        target="_blank"
        title="GitHub"
      />
    </template>

    <pf-drawer v-model:hidden="$root.drawer.hidden" :title="$root.drawer.title" :allow-expand="$root.drawer.allowExpand">
      <pf-drawer-group :title="$root.drawerGroup.title" :counter="$root.drawerGroup.counter" :loading="$root.drawerGroup.loading">
        <pf-drawer-notification>
          Notification Info

          <template #dropdown>
            <li role="menuitem">
              <a title="Menu Title 1">Menu Item 1</a>
            </li>
            <li role="menuitem">
              <a title="Menu Title 2">Menu Item 2</a>
            </li>
            <li role="separator" class="divider" />
            <li role="menuitem">
              <a title="Menu Title 3">Menu Item 3</a>
            </li>
          </template>
        </pf-drawer-notification>
        <pf-drawer-notification type="success">
          Notification Success
        </pf-drawer-notification>
        <pf-drawer-notification type="warning" unread>
          Unread Warning
        </pf-drawer-notification>
        <pf-drawer-notification :type="$root.drawerNotification.type" :date="$root.drawerNotification.date" :time="$root.drawerNotification.time" :message="$root.drawerNotification.message" :unread="$root.drawerNotification.unread" :action="$root.drawerNotification.action" :actions="$root.drawerNotification.actions" />

        <template #actions>
          <pf-drawer-group-action>Mark All Read</pf-drawer-group-action>
          <pf-drawer-group-action><pf-icon name="pficon-close" /> Clear All</pf-drawer-group-action>
        </template>
      </pf-drawer-group>

      <pf-drawer-group title="Group 2" counter="loading state" loading />

      <pf-drawer-group title="Group 3" counter="empty state" />
    </pf-drawer>

    <pf-notifications ref="notifications" toast />

    <router-view />
  </pf-layout>
</template>

<script>
import router from './router';

export default {
  router,

  data() {
    return {
      drawer: {
        hidden: true,
        allowExpand: true,
        title: 'Notification Drawer',
        updates: ' ',
      },
      drawerGroup: {
        title: 'Group 1',
        counter: '4 events',
        loading: false,
      },
      drawerNotification: {
        type: 'danger',
        date: '29/04/17',
        time: '16:25:56',
        message: 'Notification Danger',
        unread: false,
        action: {
          name: 'Action!',
          title: 'Action Title',
          button: true,
        },
        actions: [
          { name: 'Sub action 1' },
          { name: 'Sub action 2' },
          '-',
          { name: 'Sub action 3' },
        ],
      },
      launcher: {
        open: false,
        list: false,
        disabled: false,
        label: 'Application Launcher',
        icon: 'pficon-home',
        itemText: 'Home',
      },
      layoutDisplay: 'block',
      layoutHorizontal: false,
      layoutHorizontalSecondary: true,
      layoutNomargin: false,
      layoutDisabled: false,
      layoutIcons: true,
      layoutCollapsable: true,
    };
  },

  methods: {
    toast(message, type) {
      return this.$refs.notifications.add(message, type);
    },
  },
};
</script>
