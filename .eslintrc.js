module.exports = {
  parser: "babel-eslint",
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'import/first': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'react/prop-types': 'off',
  }
};
