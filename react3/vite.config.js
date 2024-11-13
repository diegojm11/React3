import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react3',
  plugins: [react()],
  
  
  build: {
    target: 'esnext', // Establece el objetivo de construcción
    sourcemap: true,   // Genera mapas de origen si los necesitas
  },
  server: {
    mimeTypes: {
      // Asegúrate de que Vite sirva los archivos JS con el tipo MIME correcto
      'application/javascript': ['js'],
    }},

  optimizeDeps: {
    include: ['firebase'],  // Asegúrate de que Firebase esté incluido en la optimización de dependencias
  },
  alias: {
    'firebase': 'firebase/app', // Asegura la ruta correcta al paquete principal de Firebase
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth', 'firebase/firestore']
  }
})



