import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierConfig from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.plugins("prettier", "jsx-a11y"),
  prettierConfig,
  {
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
];

export default eslintConfig;
