import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://nikosmpountalis.github.io/My-portfolio/',
  build: {
    outDir: 'dist',
  }
});
