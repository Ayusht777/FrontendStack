import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      Components: path.resolve(__dirname, "./src/Components/"),
      public: path.resolve(__dirname, "./public/"),
      Pages: path.resolve(__dirname, "./src/Pages/"),
      Assets: path.resolve(__dirname, "./src/Assets/"),
      Hooks: path.resolve(__dirname, "./src/Hooks/"),
      types: path.resolve(__dirname, "./src/@types/"),
    },
  },
  build: {
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
