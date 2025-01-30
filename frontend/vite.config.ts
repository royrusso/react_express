import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "../dist/frontend", // Output Vite build files to the dist directory
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Redirect API calls to Express
    },
  },
});
