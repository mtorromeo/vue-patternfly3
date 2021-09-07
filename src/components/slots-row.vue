<template>
  <tr>
    <td :colspan="typeof movelValue !== 'undefined' || $parent.readonly ? 1 : 2">
      {{ name }}
    </td>
    <td v-if="typeof movelValue !== 'undefined' && $parent.toggle">
      <input type="checkbox" :checked="enabled" @change="$emit('update:enabled', !enabled)">
    </td>
    <td :colspan="typeof movelValue !== 'undefined' ? 1 : 2" v-html="description" />
    <td v-if="typeof movelValue !== 'undefined'" :style="{height: height}">
      <ace-editor class="form-control" :model-value="movelValue.toString()" lang="html" @update:model-value="update" />
    </td>
  </tr>
</template>

<script>
export default {
  name: 'slots-row',

  props: {
    name: String,
    description: String,
    movelValue: String,
    enabled: Boolean,
    height: {
      type: String,
      default: '5em',
    },
  },

  emits: ['update:modelValue', 'update:enabled'],

  methods: {
    update(e) {
      const value = e && e.target ? e.target.value : e;
      this.$emit('update:modelValue', value);
    },
  },
};
</script>
