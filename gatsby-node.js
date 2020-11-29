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
      posts: allContentfulPost {
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
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  // amount of posts
  const posts = data.posts.edges
  // posts per page
  const postsPerPage = 5
  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
