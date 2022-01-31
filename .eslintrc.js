module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
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
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/valid-next-tick': 'off',
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
