<template>
<tr>
  <td>{{propName}}</td>
  <td v-html="description"></td>
  <td>{{prop.type}}</td>
  <td>{{prop.default}}</td>
  <td v-if="$parent.interactive"
      :class="{
        'has-error': error
      }" :style="{
        height: code ? '150px' : null,
      }">
    <input v-if="prop.type == 'Boolean'" type="checkbox" :checked="value" @change="update" @click.stop>
    <select v-else-if="options.length" class="form-control" @change="update" @click.stop>
      <option v-for="o in options" :value="o" :selected="o == value">{{o}}</option>
    </select>
    <input v-else-if="!code" type="text" class="form-control" :value="editableValue" @keyup="update" @click.stop>
    <ace-editor v-else class="form-control" :value="editableValue" @input="update" lang="javascript"></ace-editor>
  </td>
</tr>
</template>

<script>
export default {
  name: 'props-row',

  props: {
    name: String,
    description: String,
    code: Boolean,
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    value: {},
  },

  data() {
    return {
      error: false,
    };
  },

  computed: {
    propName() {
      return this.name.split(/([A-Z][^A-Z]+)/).
                       map(v => v.toLowerCase()).
                       filter(v => v).
                       join('-');
    },

    editableValue() {
      if (this.prop.object) {
        return JSON.stringify(this.value, null, 2);
      }
      return this.value;
    },

    prop() {
      const def = this.$parent.componentProps[this.name];
      const prop = {
        object: false,
      };
      const typ = typeof def;
      if (typ == 'function') {
        prop.type = def.name;
      } else if (typ == 'object') {
        prop.object = def.type.name != 'String';
        if (def.type instanceof Array) {
          prop.type = def.type.map(t => t.name).join(' | ');
        } else if (def.type) {
          prop.type = def.type.name;
        }
        if (prop.type == 'Boolean') {
          prop.default = Boolean(def.default).toString();
        } else if (def.default) {
          if (typeof def.default == 'function') {
            prop.default = def.default();
          } else {
            prop.default = def.default;
          }
        }
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
      const value = e && e.target ? e.target.value : e;
      if (this.prop.object) {
        try {
          this.$emit('input', JSON.parse(value));
          this.error = false;
        } catch (exc) {
          this.error = true;
        }
        return;
      }
      this.$emit('input', value);
    },
  },
};
</script>
