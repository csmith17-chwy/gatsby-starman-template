/**
 * Implement Gatsby’s Node.js APIs to customize and extend default settings affecting the build process
 *
 */

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const blogData = [
    {
      name: "post1",
      author: "Colin Smith",
    },
    {
      name: "post2",
      author: "Colin Smith",
    },
  ]
  blogData.forEach(post => {
    createPage({
      path: `/${post.name}`,
      component: require.resolve(`./src/templates/post-template.js`),
      context: { post },
    })
  })
}