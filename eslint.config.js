import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      "node_modules",
      "scripts/*",
      "config/*",
      "pnpm-lock.yaml",
      "pnpm-workspace.yaml",
      ".DS_Store",
      "package.json",
      "tsconfig.json",
      "**/*.md",
      "build",
      ".eslintrc.cjs",
      "eslint.config.js",
      "**/.*",
    ],
  },
]);
