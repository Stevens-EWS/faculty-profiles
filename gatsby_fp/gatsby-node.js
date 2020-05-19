const path = require("path")
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  //this is going to be referencing fields.js - not that specific node
  const profileTemplate = path.resolve("src/components/layout.js")

  //query to return user data
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
    console.log(res.data.allMultiApiSourcePeopleFaculty.edges)
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