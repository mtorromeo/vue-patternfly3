module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/require-default-prop': 'off',
    'space-before-function-paren': ['error', 'never'],
    semi: ['error', 'always'],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    indent: ['error', 2, { CallExpression: { arguments: 'first' }, SwitchCase: 1 }],
    eqeqeq: 'off',
  },
};
