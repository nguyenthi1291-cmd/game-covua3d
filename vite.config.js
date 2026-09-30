import { defineConfig } from 'vite';

export default defineConfig({
  worker: {
    format: 'es'
  },
  server: {
    port: 3000,
    open: false
  },
  build: {
    target: 'esnext'
  },
  test: {
    environment: 'node',
    globals: true
  }
});
