<template>
<tr>
  <td :colspan="typeof value !== 'undefined' || $parent.readonly ? 1 : 2">{{name}}</td>
  <td v-if="typeof value !== 'undefined' && $parent.toggle"><input type="checkbox" :checked="enabled" @change="$emit('update:enabled', !enabled)"></td>
  <td v-html="description" :colspan="typeof value !== 'undefined' ? 1 : 2"></td>
  <td v-if="typeof value !== 'undefined'" :style="{height: height}">
    <ace-editor class="form-control" :value="value.toString()" @input="update" lang="html"></ace-editor>
  </td>
</tr>
</template>

<script>
export default {
  name: 'slots-row',

  props: {
    name: String,
    description: String,
    value: String,
    enabled: Boolean,
    height: {
      type: String,
      default: '5em',
    },
  },

  methods: {
    update(e) {
      const value = e && e.target ? e.target.value : e;
      this.$emit('input', value);
    },
  },
};
</script>
