import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/gameboy-portfolio/', // IMPORTANT: Must include slashes
})