/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-check

const react = require("eslint-plugin-react");
const eslintConfigPrettier = require("eslint-config-prettier");
const reactHooks = require("eslint-plugin-react-hooks");
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const globals = require("globals");
const effect = require("eslint-plugin-react-you-might-not-need-an-effect");

module.exports = tseslint.config(
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  effect.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    ignores: ["*.stories.tsx", "dist/**"],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-function-type": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.vitest,
      },
    },
  },
);
