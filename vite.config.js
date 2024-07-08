import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      Components: path.resolve(__dirname, "./src/Components/"),
      Public: path.resolve(__dirname, "./public/"),
      Pages: path.resolve(__dirname, "./src/Pages/"),
      Assets: path.resolve(__dirname, "./src/Assets/"),
      Hooks: path.resolve(__dirname, "./src/Hooks/"),
      Types: path.resolve(__dirname, "./src/@types/"),
    },
  },
});
