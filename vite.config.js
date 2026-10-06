import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  server: { port: 5000 },
  // Keep a transpiled nomodule bundle for older browsers (previously built by rollup + babel)
  plugins: [legacy()]
});
