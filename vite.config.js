import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://portfolio-ten-theta-67.vercel.app/",
  plugins: [react()],
});
