/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const url = process.env.WPGQL_URL || `https://${process.env.WPGQL_URL}/graphql`

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "sayeem's portfolio",
    description:
      "this site is created to showcase personal resume and projects",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: { url },
    },
  ],
}
