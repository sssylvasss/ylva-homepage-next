import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextConfig from "eslint-config-next";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...nextConfig,
);
