import { defineConfig } from 'vitepress'
import nav from './configs/nav'
import sidebar from './configs/sidebar'
import footer from './configs/footer'

const base = '/'

export default defineConfig({
  title: 'FIG-UI',
  description: '前端非一般UI组件库,收集整合那些令人惊艳的前端组件',
  appearance: true,
  base,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/logo.svg'
      }
    ]
  ],
  themeConfig: {
    // logo: '/images/logo.svg',
    nav,
    sidebar,
    footer
  }
})
