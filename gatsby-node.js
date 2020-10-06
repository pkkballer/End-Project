const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      donations: allContentfulHelpfordog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.donations.edges.forEach(({ node }) => {
    createPage({
      path: `donations/${node.slug}`,
      component: path.resolve("./src/templates/donation-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
