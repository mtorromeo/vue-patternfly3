<template>
  <section>
    <h3 v-html="title" />
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th class="name-column">
            Name
          </th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th v-if="interactive">
            Value
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
  name: 'props-table',

  props: {
    title: {
      type: String,
      default: 'Props',
    },

    interactive: {
      type: Boolean,
      default: true,
    },

    componentProps: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.name-column {
  min-width: 80px;
}
</style>
