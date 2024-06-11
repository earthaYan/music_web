import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      vueJsx(),
      vuetify({
        autoImport: true,
        styles: {
          configFile: 'src/settings.scss'
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      open: true,
      cors: true,
      proxy: {
        '/api': {
          target: env.VITE_API_HOST,
          changeOrigin: true,
          rewrite: (path) => {
            return path.replace(/^\/api/, '')
          }
        }
      }
    }
  }
})
