import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@asset": path.resolve(__dirname, "src/assets/"),
      "@component": path.resolve(__dirname, "src/components/"),
      "@layout": path.resolve(__dirname, "src/layouts/"),
      "@page": path.resolve(__dirname, "src/pages/"),
      "@router": path.resolve(__dirname, "src/router/"),
      "@hook": path.resolve(__dirname, "src/hooks/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
});
