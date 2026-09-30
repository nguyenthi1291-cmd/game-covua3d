import { defineConfig } from 'vite';

export default defineConfig({
  base: '/game-covua3d/',
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
