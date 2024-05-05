import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();
// eslint-disable-next-line no-undef
var endpoint = process.env.endpoint || "http://localhost:5000"

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_ENV__: endpoint,
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api/": endpoint || "http://localhost:5000",
      "/uploads/": endpoint || "http://localhost:5000",
    },
  },
});
