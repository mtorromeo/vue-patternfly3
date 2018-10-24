<template>
  <div :style="{
    height: height ? px(height) : '100%',
    width: width ? px(width) : '100%',
  }"></div>
</template>

<script>

module.exports = {
  name: 'ace-editor',

  props: {
    value: {
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
    height: true,
    width: true,
  },

  data() {
    return {
      editor: null,
      contentBackup: '',
    };
  },

  methods: {
    px(n) {
      if ((/^\d*$/).test(n)) {
        return `${n}px`;
      }
      return n;
    },
  },

  watch: {
    value(val) {
      if (this.contentBackup !== val) {
        this.editor.setValue(val, 1);
      }
    },
  },

  mounted() {
    require.ensure([], require => {
      const ace = require('brace');

      // require('brace/ext/emmet');
      require('brace/mode/html');
      require('brace/mode/javascript');
      require('brace/theme/chrome');

      // require(['emmet/emmet'],function (data) {
      //     window.emmet = data.emmet;
      // });

      const editor = this.editor = ace.edit(this.$el);

      this.$emit('init', editor);

      editor.$blockScrolling = Infinity;
      // editor.setOption('enableEmmet', true);
      editor.getSession().setMode(`ace/mode/${this.lang}`);
      editor.setTheme(`ace/theme/${this.theme}`);
      editor.setValue(this.value, 1);

      editor.on('change', () => {
        var content = editor.getValue();
        this.$emit('input', content);
        this.contentBackup = content;
      });
    }, 'brace');
  },
};
</script>
