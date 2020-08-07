/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Starman Gatsby Template`,
    titleTemplate: `%s · a starting point`,
    author: {
      name: `Colin Smith`,
      summary: `Software Engineer`,
    },
    description: `Gatsby Starter`,
    url: `./`,
    logo: `static/logo.svg`,
    twitter: `captstarman`,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-styled-components`],
}
