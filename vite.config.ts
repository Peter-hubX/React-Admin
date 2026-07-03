import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // 1. Keeps the ability to view on your iPad via local Wi-Fi
  server: {
    host: true,
  },
  build: {
    // 2. Silences the 500kB warning for React Admin bundles
    chunkSizeWarningLimit: 1500,
    // 3. Keeps source maps enabled only during development for easier debugging
    sourcemap: mode === "development",
  },
  // 4. Ensures assets load correctly when deployed
  base: "./",
}));
