import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Boabab-FMN-Tech-/', // Add this line
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
