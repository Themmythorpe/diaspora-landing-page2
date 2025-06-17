// vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tagger from "@dhiwise/component-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProduction = mode === 'production';
  const baseApiUrl = isProduction ? 'https://onewellapp.com/v1' : '/api';

  return {
    plugins: [react(), tagger()],
    build: {
      outDir: "build",
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@pages': path.resolve('./src/pages'),
        '@assets': path.resolve('./src/assets'),
        '@constants': path.resolve('./src/constants'),
        '@styles': path.resolve('./src/styles'),
      },
    },
    server: {
      port: "4029",
      host: "0.0.0.0",
      strictPort: true,
      proxy: isProduction ? {} : {
        '^/api/.*': {
          target: 'https://onewellapp.com',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '/v1')
        },
        '^/v1/.*': {
          target: 'https://onewellapp.com',
          changeOrigin: true,
          secure: false
        }
      }
    },
    define: {
      'process.env.VITE_API_URL': JSON.stringify(baseApiUrl),
      'process.env.VITE_STRIPE_PUBLISHABLE_KEY': JSON.stringify(env.VITE_STRIPE_PUBLISHABLE_KEY),
      'process.env.VITE_BASE_API_URL': JSON.stringify('https://onewellapp.com')
    }
  };
});
