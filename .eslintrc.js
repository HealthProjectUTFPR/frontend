module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:vue/essential',
    'eslint:recommended',
    'airbnb-base',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  plugins: [
    'vue',
    'tailwindcss',
  ],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'operator-linebreak': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-newline': ['error', { multiline: true }],
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'], // these modules are included in nuxt.js
    'import/resolver': {
      alias: {
        map: [
          ['@', '.'],
        ],
        extensions: ['.vue', '.js'],
      },
    },
  },
};
