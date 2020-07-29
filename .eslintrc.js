module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint', 'jest'
  ],
};
