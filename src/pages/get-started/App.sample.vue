<template>
  <pf-layout>
    <template #brand>
      <router-link to="/" :exact="true" class="navbar-brand navbar-brand-name">
        My Vue App
      </router-link>
    </template>

    <template #utility-menu>
      <pf-dropdown tag="li" btn-class="nav-item-iconic" type="link">
        <template #text>
          <pf-icon name="pficon-user" />
          John Doe
        </template>

        <li>
          <a href="#">Logout</a>
        </li>
      </pf-dropdown>
    </template>

    <template #horizontal-menu>
      <pf-menu-item
        to="/"
        exact
        title="Home"
      />

      <pf-menu-item
        to="/get-started"
        exact
        title="Get Started"
      />
    </template>

    <pf-notifications ref="notifications" toast />

    <router-view />
  </pf-layout>
</template>

<script>
export default {
  methods: {
    toast(message, type) {
      return this.$refs.notifications.add(message, type);
    },
  },
};
</script>
