import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Ensure path module is imported

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"), // Alias for src directory
      Components: path.resolve(__dirname, "./src/Components/"), // Alias for Components
      public: path.resolve(__dirname, "./public/"), // Alias for public directory
      Pages: path.resolve(__dirname, "./src/Pages/"), // Alias for Pages
      Assets: path.resolve(__dirname, "./src/Assets/"), // Alias for Assets
      Hooks: path.resolve(__dirname, "./src/Hooks/"), // Alias for Hooks
      types: path.resolve(__dirname, "./src/@types/"), // Alias for @types
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "./src/main.jsx"), // Ensure the input path is correct
    },
  },
});
