import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    // Multi-page app: every HTML page is its own entry for `npm run build`.
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'src/login.html',
        register: 'src/register.html',
        userManagement: 'src/userManagement.html',
      },
    },
  },
})
