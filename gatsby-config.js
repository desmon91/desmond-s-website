module.exports = {
  siteMetadata: {
    title: "Desmond's Website",
    siteUrl: "https://desmon91.netlify.app/"
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `desmonds-website`
      }
  },
  {
    resolve: "gatsby-plugin-load-script",
    options: {
      id: "s9-sdk",
      async: true,
      defer: true,
      content: "c5e75423bb35445f8ac22a8109cb4268",
      src: "//cdn.social9.com/js/socialshare.min.js"
    },
  }
  ],
};
