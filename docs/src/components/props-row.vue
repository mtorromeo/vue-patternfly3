<template>
<tr>
  <td>{{propName}}</td>
  <td v-html="description"></td>
  <td>{{prop.type}}</td>
  <td>{{prop.default}}</td>
  <td v-if="$parent.interactive">
    <input v-if="prop.type == 'Boolean'" type="checkbox" :checked="value" @change="update">
    <select v-else-if="options.length" class="form-control" @change="update">
      <option v-for="o in options" :value="o">{{o}}</option>
    </select>
    <input v-else type="text" class="form-control" :value="value" @keyup="update">
  </td>
</tr>
</template>

<script>
export default {
  name: 'props-row',

  props: {
    name: String,
    description: String,
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    value: {},
  },

  computed: {
    propName() {
      return this.name.split(/([A-Z][^A-Z]+)/).
                       map(v => v.toLowerCase()).
                       filter(v => v).
                       join('-');
    },

    prop() {
      const def = this.$parent.componentProps[this.name];
      const prop = {};
      const typ = typeof def;
      if (typ == 'function') {
        prop.type = def.name;
      } else if (typ == 'object') {
        if (def.type) {
          prop.type = def.type.name;
        }
        if (def.default) {
          prop.default = def.default;
        }
      } else {
        prop.default = def;
      }
      if (!prop.type) {
        prop.type = 'Any';
      }
      return prop;
    },
  },

  methods: {
    update(e) {
      if (this.prop.type == 'Boolean') {
        this.$emit('input', e.target.checked);
        return;
      }
      this.$emit('input', e.target.value);
    },
  },
};
</script>
