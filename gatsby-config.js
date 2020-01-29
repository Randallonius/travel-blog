require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const website = require('./config/website')

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-emotion',
    `gatsby-plugin-flow`,
    `gatsby-plugin-react-leaflet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.titleAlt,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: `minimal-ui`,
        icon: website.favicon,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: 'we-three-travel',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `we_three_travel`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `wethreetravel`,
      },
    },
    'gatsby-plugin-netlify',
    `gatsby-plugin-offline`,
  ],
}
