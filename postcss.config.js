import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";

import tailwindConfig from "./tailwind.config";

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer(), postcssImport()],
};
