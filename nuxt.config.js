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

  html = html.replace('</head>', `<style>${styleConcat}</style></head>`)

  // Remove every script tag from generated HTML except the JSON type for the amp-state or the AMP templates
  html = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/ data-n-head-ssr/gi, '')
    .replace(/ data-n-head="ssr"/gi, '')
    .replace(/ data-server-rendered="true"/gi, '')
    .replace(/ id="__nuxt"/gi, '')
    .replace(/ id="__layout"/gi, '')
    .replace(/ data-hid="description"/gi, '')
    .replace(/data-n-head="%7B%22lang%22:%7B%22ssr%22:%22en-US%22%7D%7D"/gi, '')

  return html
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en-US'
    },
    title: 'Fullstack dev VTerekhov',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Fullstack developer resume'
      },
      {
        name: 'keywords',
        content: 'frontend, backend, javascript, typescript, vue, webpack, nuxt'
      }
    ],
    link: [
      {
        rel: 'icon',
        href: 'data:;base64,iVBORw0KGgo='
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
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
    extend(_config, _ctx) {}
  },
  render: {
    resourceHints: false
  },
  hooks: {
    'generate:page': (page) => {
      page.html = modifyHtml(page.html)
    }
  }
}
