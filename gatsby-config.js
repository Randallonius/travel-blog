require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Travel Blog Starter`,
    description: `A Travel Blog setup integrating Prismic.io CMS and Netlify`,
    author: `@randallonius`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `travel-blog`,
        short_name: `travel-blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: 'we-three-travel-test',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `${process.env.INSTAGRAM}`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `${process.env.DISQUS}`,
      },
    },
    'gatsby-plugin-netlify',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
