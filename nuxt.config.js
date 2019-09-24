
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'TurtleCoin.lol - A Fun, Fast, and Easy Way to Send Money To Friends and Businesses',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TurtleCoin is a fun way to send money privately to friends or businesses. TurtleCoin is a community-developed, open source cryptocurrency that is easy to mine, and has multiple wallet interfaces.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/turtle-it.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/pwa',
    'nuxt-i18n'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        code: 'es',
        iso: 'es-ES'
      },
      {
        code: 'fr',
        iso: 'fr-FR'
      }
    ],
    langDir: 'locales/',
    seo: true,
    lazy: true
  }
}
