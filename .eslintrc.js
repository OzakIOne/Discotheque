/* eslint-env node */
// https://github.com/neolectron/annepantillonch/blob/main/.eslintrc.js
// ? plugins.react ?
module.exports = {
  root: true,
  // parser: '@typescript-eslint/parser',
  // plugins: ['@typescript-eslint'],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};
