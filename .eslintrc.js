module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-undef': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'linebreak-style': 'off',
    'guard-for-in': 'off',
    'default-case': 'off',
  },
};
