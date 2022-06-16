import path from "path"
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/

const pathSrc = path.resolve(__dirname, "src")
const config = loadEnv("development", "./")
export default ({ mode }) => defineConfig({
  resolve: {
    alias: {
      "~/": pathSrc,
      "@": pathSrc
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/styles/index.scss';"
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5555,
    open: true,
    proxy: {
      "/api": {
        target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  build: {
    manifest: false,
    outDir: 'dist/20210811',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // 重点在这里哦
        // entryFileNames: `assets/[name].${timestamp}.js`,
        // chunkFileNames: `assets/[name].${timestamp}.js`,
        // assetFileNames: `assets/[name].${timestamp}.[ext]`
        entryFileNames: `assets/[name].ts`,
        chunkFileNames: `assets/[name].ts`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})
