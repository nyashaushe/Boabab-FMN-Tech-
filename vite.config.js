import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/baobab-stack/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});