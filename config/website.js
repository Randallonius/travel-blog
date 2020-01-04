require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: `We Three Travel - a families travel blog`, // Navigation and Site Title
  titleAlt: `We Three Travel`, // Title for JSONLD
  description: `A travel blog that focuses on budget sustainable international travel with a family`,
  headline: `Writing and publishing content for We Three Travel`, // Headline for schema.org JSONLD
  url: `https://unruffled-jennings-06910a.netlify.com`, // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/images/favicon.png', // Used for manifest favicon generation
  shortName: 'W3T', // shortname for manifest. MUST be shorter than 12 characters
  author: '@randallonius', // Author for schemaORGJSONLD
  themeColor: '#00c4cc',
  backgroundColor: '#EBEDF2',

  email: `${process.env.EMAIL}`, // Email handle
  twitter: '', // Twitter Username
  facebook: '', // Facebook Site Name
  instagram: `we_three_travel`, // Instagram handle
  googleAnalyticsID: `${process.env.ANALYTICS}`,
}
