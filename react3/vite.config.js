import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  
  build: {
    target: 'esnext', // Establece el objetivo de construcción
    sourcemap: true,   // Genera mapas de origen si los necesitas
  },
  optimizeDeps: {
    include: ['firebase'],  // Asegúrate de que Firebase esté incluido en la optimización de dependencias
  },
})



