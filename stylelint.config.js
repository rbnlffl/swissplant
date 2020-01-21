/* eslint-env node */

module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    indentation: 2,
    'declaration-colon-newline-after': null,
    'number-leading-zero': 'never'
  },
  defaultSeverity: 'warning'
};
