import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Majo14/',  // Asegúrate de que este sea el subdirectorio correcto en GitHub Pages
})