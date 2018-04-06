<template>
<section>
  <h3 v-html="title"></h3>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th style="width: 200px">Name</th>
        <th style="width: 60px" v-if="toggle">Enable</th>
        <th style="width: 300px">Description</th>
        <th>HTML</th>
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
  name: 'slots-table',

  props: {
    title: {
      type: String,
      default: 'Slots',
    },
    toggle: Boolean,
  },
};
</script>
