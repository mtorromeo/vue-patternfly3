<template>
  <div :style="{
    height: height ? px(height) : '100%',
    width: width ? px(width) : '100%',
  }" />
</template>

<script>
export default {
  name: 'ace-editor',

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: 'text',
    },
    theme: {
      type: String,
      default: 'chrome',
    },
    height: String,
    width: String,
  },

  emits: ['init', 'update:modelValue'],

  data() {
    return {
      editor: null,
      contentBackup: '',
    };
  },

  watch: {
    modelValue(val) {
      if (this.contentBackup !== val) {
        this.editor.setValue(val, 1);
      }
    },
  },

  async mounted() {
    const ace = await import('brace');

    await Promise.all([
      // import('brace/ext/emmet'),
      import('brace/mode/html'),
      import('brace/mode/javascript'),
      import('brace/theme/chrome'),
    ]);

    // import(['emmet/emmet'],function (data) {
    //     window.emmet = data.emmet;
    // });

    const editor = this.editor = ace.edit(this.$el);

    this.$emit('init', editor);

    editor.$blockScrolling = Infinity;
    // editor.setOption('enableEmmet', true);
    editor.getSession().setMode(`ace/mode/${this.lang}`);
    editor.setTheme(`ace/theme/${this.theme}`);
    editor.setValue(this.modelValue, 1);

    editor.on('change', () => {
      const content = editor.getValue();
      this.$emit('update:modelValue', content);
      this.contentBackup = content;
    });
  },

  methods: {
    px(n) {
      if ((/^\d*$/).test(n)) {
        return `${n}px`;
      }
      return n;
    },
  },
};
</script>
