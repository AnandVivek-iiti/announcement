import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react';
import netlify from '@netlify/vite-plugin'
export default defineConfig({
  plugins: [tailwindcss(),react(), reactRouter(), tsconfigPaths() ,netlify()],
  build: {
    outDir: "build/client"
  },
});
