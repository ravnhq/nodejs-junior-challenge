module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-undef': 'off',
    'max-len': ['error', { code: 120 }],
    'no-trailing-spaces': 'off',
  },
};
