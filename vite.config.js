import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Boabab-FMN-Tech-/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});