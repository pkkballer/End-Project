module.exports = {
  siteMetadata: {
    title: "HelpForDog",
    description:
      "Helpallthedog",
    author: "Phansaphong Saisuwan",
    data: {
      name: "Bon",
      age: 26,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5h9nqkm4hyc2`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "VYpHqN7VZDGD009oEssutx3lArkZisZXKj_eCdlVl3Q",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
  ],
}