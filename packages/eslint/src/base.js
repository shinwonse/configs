module.exports = {
  extends: ["plugin:import/errors", "eslint:recommended", "prettier"],
  plugins: ["json-format", "prettier", "simple-import-sort"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        usePrettierrc: false,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
  },
};
