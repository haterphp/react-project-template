module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  env: { browser: true, es2020: true },
  rules: {
    "linebreak-style": 0,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "./config/eslint/base/.eslintrc.cjs",
    "./config/eslint/import/.eslintrc.cjs",
    "./config/eslint/react/.eslintrc.cjs",
    "./config/eslint/react-jsx/.eslintrc.cjs",
    "./config/eslint/typescript/.eslintrc.cjs",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts", "*.d.ts"],
  plugins: ["react-refresh", "@typescript-eslint", "react-hooks", "import"],
  rules: {
    "linebreak-style": 0,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
};
