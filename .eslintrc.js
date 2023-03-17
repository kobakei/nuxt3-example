module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxt/eslint-config',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:vitest/recommended',
  ],
  plugins: ['prettier', 'vitest'],
  rules: {
    'prettier/prettier': 'error',
  },
}
