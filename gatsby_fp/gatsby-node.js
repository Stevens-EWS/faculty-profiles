const path = require("path")
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const profileTemplate = path.resolve("src/components/layout.js")

 return graphql(`
  {  
    allMultiApiSourcePeopleFaculty {
          edges {
              node {
                  pf_username
              }
            }
        }
  }
`).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMultiApiSourcePeopleFaculty.edges.forEach(({ node }) => {
        var path = "/" + node.pf_username
        createPage({
          path,
          component: profileTemplate,
          context: {
            pagePath: node.pf_username
          }
        })
      })
  })
}
