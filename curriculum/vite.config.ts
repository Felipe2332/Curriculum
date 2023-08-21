import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { checker } from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({typescript: true}),
    tsconfigPaths()
  ],
  server: {
    port: 3000,
    watch:{
      ignored: ['**/covarage/**']
    }
  },
  preview:{
    port: 3000
  },
  build:{
    outDir: 'build',
    sourcemap: 'hidden'
  },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/pages"
    },
  },
})
