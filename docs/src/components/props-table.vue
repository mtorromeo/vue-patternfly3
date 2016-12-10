<template>
<section>
  <h3>Props</h3>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Default</th>
        <th v-if="interactive">Value</th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</section>
</template>

<script>
export default {
  name: 'props-table',

  props: {
    interactive: {
      type: Boolean,
      default: true,
    },

    componentProps: Object,
  },
};
</script>
