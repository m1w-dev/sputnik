import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'


export default defineConfig({
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app'),
      features: path.resolve(__dirname, './src/features'),
      utils: path.resolve('./src/utils'),
    },
  },
  plugins: [react()],
})
