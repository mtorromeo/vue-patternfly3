<template>
  <section>
    <h3 v-html="title" />
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th style="width: 200px">
            Name
          </th>
          <th v-if="toggle" style="width: 60px">
            Enable
          </th>
          <th style="width: 300px">
            Description
          </th>
          <th v-if="!readonly">
            HTML
          </th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'slots-table',

  props: {
    title: {
      type: String,
      default: 'Slots',
    },
    readonly: Boolean,
    toggle: Boolean,
  },
};
</script>
