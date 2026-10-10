import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/teste-front-end/',
  plugins: [react()],
  server: {
    // Usado apenas em desenvolvimento, como fallback caso o navegador bloqueie
    // a requisição direta ao JSON (CORS).
    proxy: {
      '/econverse-proxy': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/econverse-proxy/, ''),
      },
    },
  },
});
