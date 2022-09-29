import path from 'path'
import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import {alias} from '../../scripts'
const pathSrc = path.resolve(__dirname, './')

export default defineConfig(async ({ command, mode }) => {
  let docsBuild = {}
  if (mode === 'docs') {
    docsBuild.base = './'
    docsBuild.build = {
      outDir: '../../docs/.vitepress/dist/fig-ui'
    }
  }

  return {
    server: {
      port: '3255'
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/style/mixins.scss" as *;`,
        },
      },
    },
    plugins: [vue()],
    build: {
      rollupOptions: {
        external: ['vue']
      },
      lib: {
        entry: path.resolve(__dirname, './components/index.ts'),
        name: 'fig-ui',
        fileName: 'fig-ui',
        formats: ['es', 'cjs', 'umd']
      }
    },
    resolve: {
      alias: {
        '~/': `${pathSrc}/`,
        'fig-ui': path.join(__dirname, `/index`)
      }
    },
    ...docsBuild
  }
})
