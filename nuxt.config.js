const modifyHtml = (html) => {
  // Add amp-custom tag to added CSS and join all the CSS into one <style-tag>
  let styleConcat = ''
  html = html.replace(
    /(<style\b[^<>]*>)([^<]*)(<\/style>)/gi,
    (_match, _p1, p2) => {
      styleConcat += p2
      return ''
    }
  )

  html = html.replace(
    '</head>',
    `<style data-vue-ssr>${styleConcat}</style></head>`
  )

  // Remove every script tag from generated HTML except the JSON type for the amp-state or the AMP templates
  html = html.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    () => ''
  )

  return html
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: false,
    loading: false,
    extend(_config, _ctx) {}
  },
  render: {
    resourceHints: false
  },
  hooks: {
    // This hook is called before generatic static html files for SPA mode
    'generate:page': (page) => {
      page.html = modifyHtml(page.html)
    },
    // This hook is called before rendering the html to the browser
    'render:route': (_url, page) => {
      page.html = modifyHtml(page.html)
    }
  }
}
