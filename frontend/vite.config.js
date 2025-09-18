import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: [
          'import',          // @import deprecado
          'mixed-decls',     // declaraciones tras reglas anidadas
          'color-functions', // red()/green()/blue()/mix()
          'global-builtin'   // unit() y similares globales
        ]
        // silenceDeprecations: ['mixed-decls','color-functions']
      }
    }
  }
})
