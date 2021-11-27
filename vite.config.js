import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rrd from 'vite-plugin-react-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    rrd({
      routesDir: [{ baseRoute: '', dir: 'src/views' }],

      extensions: ['jsx'],
      exclude: [/components/],
      hash: false,
      loading: '',
      notFound: '',
    }),
  ],
})
