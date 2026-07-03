import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/sections': path.resolve(__dirname, './src/sections'),
      '@/lib': path.resolve(__dirname, './src/lib'),
    }
  }
});
