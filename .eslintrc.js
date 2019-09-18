module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  globals: {
    'google': 'readonly',
    'angular': 'readonly'
  },
  rules: {
    'no-console': 1,
    curly: [2, 'all'],
    eqeqeq: [2, 'always'],
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'require-await': 2,
    'no-undefined': 2,
    'comma-dangle': [2, 'never'],
    'no-multi-assign': 2,
    quotes: [2, 'single']
  }
};
