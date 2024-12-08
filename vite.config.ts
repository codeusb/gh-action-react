import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // https://codeusb.github.io/gh-action-react/
  base: "/gh-action-react/", // 替换为你的项目名
  plugins: [react()],
});
