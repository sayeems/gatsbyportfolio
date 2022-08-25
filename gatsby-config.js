/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path")
require("dotenv").config({
  path: path.resolve(process.cwd(), ".env.local"),
})

const url =
  process.env.WPGQL_URL ||
  `https://${process.env.PANTHEON_CMS_ENDPOINT}/graphql`

// to build with prefix: PREFIX_PATHS=true gatsby buil

module.exports = {
  /* Your site config here */
  pathPrefix: `/gatsby`,
  siteMetadata: {
    title: "sayeem's portfolio",
    description:
      "this site is created to showcase personal resume and projects",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
  ],
}
