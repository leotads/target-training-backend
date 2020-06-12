module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    "consistent-return": "off",
    "no-console": "off",
    "import/no-unresolved": "off",
    "no-underscore-dangle": "off",
    "prefer-promise-reject-errors": "off",
    "func-names": "off",
    "new-cap": "off",
    "no-shadow": "off",
    "no-unused-expressions": "off",
    "no-return-assign": "off",
    "linebreak-style": "off",
    "import/no-extraneous-dependencies": "off"
  },
};
