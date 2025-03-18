import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'quotes': ['warn', 'single'],
      'comma-dangle': ['warn', 'always-multiline'],
      'indent': ['warn', 2],
      'object-curly-spacing': ['warn', 'always'],

      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
      'no-var': 'warn',

      'vue/multi-word-component-names': 'error',
      'vue/html-self-closing': 'warn',
      'vue/component-tags-order': ['warn', {
        order: ['template', 'script', 'style']
      }],

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
])