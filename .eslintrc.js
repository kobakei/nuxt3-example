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
    // Vue関連のルールやTypeScript関連のルールの設定
    // ルール自体はplugin-vueやplugin/typescript-eslintを参照している
    '@nuxt/eslint-config',
    // Nuxt用のルール追加（nuxt/*）
    'plugin:nuxt/recommended',
    // Vitest用のルール追加（vitest/*）
    'plugin:vitest/recommended',
    // これは必ず最後。競合するルールを全部Prettierで上書き。
    'plugin:prettier/recommended',
  ],
  plugins: ['vitest'],
  rules: {
    'prettier/prettier': 'error',
  },
}
