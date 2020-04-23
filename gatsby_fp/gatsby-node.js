const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  //this is going to be referencing fields.js - not that specific node
  const profileTemplate = path.resolve("src/components/fieldComponents/genInfoTable.js")

  //query to return user data
  return graphql(`
  {
      allRestApiEmployees {
          edges {
              node {
                  pf_address
                  pf_email
                  pf_fax
                  pf_first_name
                  pf_last_name
                  pf_phone
                  pf_title
                  pf_username
              }
            }
        }
  }
`).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allRestApiEmployees.edges.forEach(({ node }) => {
        createPage({
          path: ("/" + node.pf_username),
          component: profileTemplate,
        })
      })
  })

 
}
