// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // This should match your "publish" directory in Netlify
  },
});
