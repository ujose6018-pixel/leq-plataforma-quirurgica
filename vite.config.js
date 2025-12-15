
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Esta configuración es necesaria para que Vercel y tu entorno local entiendan el proyecto React.
export default defineConfig({
  plugins: [react()],
});
