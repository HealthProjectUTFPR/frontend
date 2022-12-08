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
  plugins: ['vue', 'tailwindcss', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'tailwindcss/no-custom-classname': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': ['error', { multiline: true }],
    'comma-dangle': 'off',
    'vue/multi-word-component-names': 'off',
    'linebreak-style': 0,
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'], // these modules are included in nuxt.js
    'import/resolver': {
      alias: {
        map: [['@', '.']],
        extensions: ['.vue', '.js'],
      },
    },
  },
};
