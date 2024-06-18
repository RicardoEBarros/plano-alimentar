import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      "semi": ["error", "never"],
      "eqeqeq": "error",
      "no-eval": "error",
      "curly": ["warn", "all"],
      "no-unused-vars": "warn",
      "no-var": "error",
      "indent": ["error", 2],
      "prefer-const": "warn",
      "quotes": ["error", "single"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "@stylistic/js/function-call-spacing": ["error", "never"],
      "@stylistic/js/array-bracket-spacing": ["error", "always"],
      "@stylistic/js/eol-last": ["error", "always"],
      "@stylistic/js/function-paren-newline": ["error", "never"],
      "@stylistic/js/space-before-function-paren": ["error", "always"]
    },
    languageOptions: { 
      globals: globals.browser 
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];