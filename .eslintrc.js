module.exports = {
  extends: ["@stellar/eslint-config"],
  rules: {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "jsdoc/newline-after-description": 0,
    "arrow-body-style": 0,
    "no-return-await": 0,
    "@typescript-eslint/naming-convention": 0,
  },
};
