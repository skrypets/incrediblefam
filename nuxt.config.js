require("dotenv").config()

const cfclient = require("./plugins/contentful");

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      {
        property: "fb:app_id",
        content: "269268847518837"
      },
      {
        property: "fb:admin",
        content: "10158415621104189"
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Molle:400i|Baloo+Paaji+2:400,500&display=swap"
      }
    ],
    script: [
      { src: 'https://connect.facebook.net/uk_UA/sdk.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [{ src: 'bulma/bulma.sass', lang: 'sass' }, "~/assets/styles/main.scss"],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/contentful",
    "~/plugins/posts",
    "~/plugins/filters",
  ],
  /*
   ** Environment variables
   */
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT
  },
  modules: ["@nuxtjs/robots", "@nuxtjs/markdownit", "@nuxtjs/bulma", "@nuxtjs/sitemap"],
  buildModules: ["@nuxtjs/dotenv", ['@nuxtjs/google-analytics', {
    id: 'UA-165695345-1'
  }]],
  robots: () => {
    return {
      UserAgent: '*',
    }
  },
  sitemap: {
    hostname: 'https://www.incrediblefam.com',
    trailingSlash: true
  },
  markdownit: {
    injected: true
  },
  generate: {
    routes() {
      return Promise.all([
        cfclient.getEntries({
          content_type: "post"
        })
      ]).then(([blogEntries]) => {
        return [...blogEntries.items.map(entry => entry.fields.slug + '/')];
      });
    }
  },
  router: {
    trailingSlash: true,
  },
};
