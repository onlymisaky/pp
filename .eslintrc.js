/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  root: true,
  env: { node: true },
  extends: [
    'airbnb-base',
  ],
};

module.exports = eslintConfig;
