module.exports = {
  siteMetadata: {
    title: `Compra Panameño 🇵🇦`,
    description: `Directorio virtual: Descubre y apoya los emprendimientos panameños ¡Compra Panameño!`,
    author: `@RicardoCuan`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0239A3`,
        theme_color: `#0239A3`,
        display: `minimal-ui`,
        icon: `src/images/icon-cp.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `users`,
        path: `${__dirname}/data`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
