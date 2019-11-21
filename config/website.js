require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: `${process.env.TITLE}`, // Navigation and Site Title
  titleAlt: `${process.env.TITLE_ALT}`, // Title for JSONLD
  description: `${process.env.DESCP}`,
  headline: `Writing and publishing content for ${process.env.TITLE_ALT}`, // Headline for schema.org JSONLD
  url: `${process.env.URL}`, // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/images/favicon.png', // Used for manifest favicon generation
  shortName: 'W3T', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Randallonius', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  email: `${process.env.EMAIL}`, // Email handle
  twitter: '', // Twitter Username
  facebook: '', // Facebook Site Name
  instagram: `${process.env.INSTAGRAM}`, // Instagram handle
  googleAnalyticsID: `${process.env.ANALYTICS}`,
}
