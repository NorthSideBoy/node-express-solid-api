import love from 'eslint-config-love' //preconfigured eslint config from "eslint-config-love" library

export default [
  {
    ...love,
    files: ['**/*.js', '**/*.ts'],
    rules: {
      ...love.rules,

      /* approximate "ts-standard" library rules */

      "@typescript-eslint/no-unsafe-type-assertion": "off",
      "no-console": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/prefer-destructuring":"off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment":"off",
      "@typescript-eslint/no-explicit-any":"off",
      "@typescript-eslint/no-unsafe-member-access":"off",
      "@typescript-eslint/no-unsafe-call":"off",

      /* personal rules */

      "semi": ["error", "always"], // force use of ";" statement   
      "indent": ["error", 2], // indent of 2 spaces
      "@/indent": ["error", 2], // enable indent support for TypeScript (2 spaces)
    }
  },
  {
    ignores: ['build/', 'node_modules/']
  }
]

/* default configuration */

// import { defineConfig } from "eslint/config";
// import js from "@eslint/js";
// import globals from "globals";
// import tseslint from "typescript-eslint";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
//   tseslint.configs.recommended,
// ]);