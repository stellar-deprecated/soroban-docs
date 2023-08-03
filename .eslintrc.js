module.exports = {
  extends: ["@stellar/eslint-config", "plugin:@tanstack/eslint-plugin-query/recommended"],
  rules: {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "jsdoc/newline-after-description": 0,
    "@typescript-eslint/naming-convention": 0,
  },
};
