import { landingRules } from './config/routes-rules'

export default defineNuxtConfig({
  extends: [
    '../layers/landing',
    '../layers/tairo-layout-sidebar',
    '../layers/tairo-layout-collapse',
    '../layers/tairo-layout-topnav',
    '../layers/tairo',
  ],
  modules: ['nuxt-swiper'],
  ssr: false,
  css: [
    '~/assets/css/colors.css',
    '@fontsource-variable/fira-code/index.css',
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
  ],

  experimental: {
    watcher: 'chokidar-granular',

    writeEarlyHints: true,

    renderJsonPayloads: true,
  },

  typescript: {
    tsConfig: {},
  },

  // nuxt behavior configuration
  runtimeConfig: {
    public: {
      // mapbox config
      mapboxToken: process.env.NUXT_PUBLIC_MAPBOX_TOKEN,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },
  routeRules: {
    ...landingRules,
  },

  // nuxt build configuration
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  vite: {
    define: {
      'process.test': false,
      'process.env.VSCODE_TEXTMATE_DEBUG': false,
      'process.env.ENABLE_A11Y_AXE': process.env.ENABLE_A11Y_AXE,
    },
    build: {
      target: 'esnext',
    },
  },
  build: {
    html: {
      minify: {
        decodeEntities: false,
      },
    },
  },
})
