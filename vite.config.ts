import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
        svgProps: { role: 'img' },
      },
      include: ['**/logo/*.svg', '**/components/*.svg']
    }),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
})
