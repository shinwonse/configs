module.exports = {
  plugins: ["@wonse"],
  extends: ["plugin:@wonse/base"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@wonse/typescript"],
    },
    {
      files: ["**/*.{jsx,tsx}"],
      extends: ["plugin:@wonse/react"],
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
